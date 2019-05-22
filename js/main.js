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
            console.log(user);
        });
    });
});