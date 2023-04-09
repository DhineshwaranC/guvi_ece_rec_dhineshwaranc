$(document).ready(function(){


    $("#submit2").click(function(){

        var email2 = $('#email2').val();
        var password2 = $('#password2').val();
        


        
        
        // if(password2 = '' || email2 == ''){
        //     alert("Please fill all fields");
        //     return false;
        // }
        
        var url = window.location.origin + "/guvi/php/login.php";
        var jsonObject = new Object();
        jsonObject.email = email2;
        jsonObject.password = password2;
        var jsonString = JSON.stringify(jsonObject);

        

        $.ajax({
            type: "POST",
            url: url,
            data: jsonString,
            contentType: "application/json",
            cache:false,
            async: false,
            timeout: 5000,
            success:function(response) {
                var respString = response.toString();
                if(respString === 'true'){
                    alert("Logged In!");
                    sessionStorage.setItem("email",email2);
                    window.location.href = "/guvi/profile.html";
                } else if(respString === 'false'){
                    alert("Check the Username and Password");
                } else {
                    console.log("Invalid response");
                }
            },
            error:function(xhr,status,error){
                console.error(error);
            }
        });
    });
});