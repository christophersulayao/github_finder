$(document).ready(function(){
    $('#searchUser').on('keyup', function(e){
        let username = e.target.value;

        //Make request to github
        $.ajax({
            url:'https://api.github.com/users/'+username,
            data:{
                client_id:'6f2d2daf162af8b80a22',
                client_secret:'dbd6b9442973d6c5657155e5bb85b63df76205d8',
            }
        }).done(function(user){
            $('#profile').html(`
            ${user.name}
            <div class="panel panel-default">
                <div class="panel-heading">
                    <h3 class="panel-title">${user.name}</h3>
                </div>
                <div class="panel-body">
                   <div class="row">
                        <div class="col-md-3">
                            <img class="thumbnail avatar" src="${user.avatar_url}">
                            <a target="_blank" class="btn btn-primary btn-block" href="${user.html_url}">View Profile</a>
                        </div>
                        <div class="col-md-9">
                            <span class="label label-default">Public Repos: ${user.public_repos}</span>
                            <span class="label label-primary">Public Gists: ${user.public_gists}</span>
                            <span class="label label-success">Followers: ${user.followers}</span>
                            <span class="label label-info">Following: ${user.following}</span>
                            <br><br>
                            <ul class="list-group">
                                <li class="list-group-item">Company: ${user.company}</li>
                                <li class="list-group-item">Website/Blog: ${user.blog}</li>
                                <li class="list-group-item">Location: ${user.location}</li>
                                <li class="list-group-item">Member Since: ${user.created_at}</li>
                            </ul>
                        </div>
                   </div>
                </div>
            </div>
            `);
        });
    });
});