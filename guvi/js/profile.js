// let str = 0;
// $(document).ready(function() {


//     var url = window.location.origin + "/guvi/php/profile.php";

//     $.ajax({
//         url: url,
//         success:function(response) {
//             // var html = "";

//             // $.each(data,function(index,value){
//             //     html += "<p>" + value.column_name + "</p>";
//             // });
//             // $("#email").html(html);
//             alert(response);

//         },
//         error:function(xhr,status,error){
//             console.error(error);
//         }
//     });

//     function showUser(str) {
//         if (str == 0) {
//           document.getElementById("txtHint").innerHTML = "";
//           return;
//         } else {
//           var xmlhttp = new XMLHttpRequest();
//           xmlhttp.onreadystatechange = function() {
//             if (this.readyState == 4 && this.status == 200) {
//               document.getElementById("txtHint").innerHTML = this.responseText;
//             }
//           };
//           xmlhttp.open("GET","getuser.php?q="+str,true);
//           xmlhttp.send();
//         }
//       }
//   });


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



