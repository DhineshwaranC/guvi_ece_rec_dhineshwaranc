$(document).ready(function(){

    $("#submit").click(function(){

        var email = $('#email').val();
        var password = $('#password').val();
        var firstname = $('#firstname').val();
        var lastname = $('#lastname').val();
        var dob = $('#dob').val();
        var phonenumber = $('#phonenumber').val();

        if(password == '' || email == ''){
            alert("Please fill all fields");
            return false;
        }

        var url = window.location.origin + "/guvi/php/register.php";
        var jsonObject = new Object();
        jsonObject.email = email;
        jsonObject.password = password;
        jsonObject.firstname = firstname;
        jsonObject.lastname = lastname;
        jsonObject.dob = dob;
        jsonObject.phonenumber = phonenumber;
        var jsonString = JSON.stringify(jsonObject);

        $.ajax({
            type: "POST",
            url: url,
            data: jsonString,
            contentType: "application/json",
            cache:false,
            success:function(response) {
                alert(response);
                window.location.href = '/guvi/login.html';
            },
            error:function(xhr,status,error){
                console.error(error);
            }
        });
    });
});