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
                        <img src="${user.avatar_url}">
                        </div>
                        <div class="col-md-9">
                        </div>
                   </div>
                </div>
            </div>
            `);
        });
    });
});