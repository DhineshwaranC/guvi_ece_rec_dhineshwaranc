
    var email = sessionStorage.getItem("email");
    var xmlhttp = new XMLHttpRequest();
    
    xmlhttp.onreadystatechange = function(){
        if (this.readyState == 4 && this.status == 200) {
            var result = JSON.parse(this.responseText);
            var firstname = result.firstname;
            var dob = result.dob;
            var phonenumber = result.gender;
            document.getElementById("email").value=email;
            document.getElementById("firstname").value=firstname;
            document.getElementById("lastname").value=lastname;
            document.getElementById("dob").value=dob;
            document.getElementById("phonenumber").value=phonenumber;
        }
    }
    xmlhttp.open("POST","php/profile.php",true);
    xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
    
    var data = "email=" + email;
    xmlhttp.send(data);



