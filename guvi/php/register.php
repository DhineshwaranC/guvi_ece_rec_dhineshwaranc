
<?php

    $dbhost="localhost";
    $dbuser="root";
    $dbpass="";
    $dbname="guvi_register";

    if(!$con = mysqli_connect($dbhost,$dbuser,$dbpass,$dbname)){
        die("Failed to connect!");
    }


    if($_SERVER['REQUEST_METHOD'] == 'POST'){

        // Takes raw data from the request
        $json = file_get_contents('php://input');

        // Converts it into a PHP object
        $data = json_decode($json);

        $email = $data->email;
        $password = $data->password;
        $firstname = $data->firstname;
        $lastname = $data->lastname;
        $dob = $data->dob;
        $phonenumber = $data->phonenumber;

        $check= "select * from guvi_users where email='$email'";
        $result = mysqli_query($con,$check);

        if(mysqli_num_rows($result) > 0){
            echo "Username Already Exists";
        } else{
            $hashed_password = password_hash($password,PASSWORD_DEFAULT);
            

            if(!empty($email) && !empty($password)){

                $query = "insert into guvi_users(email,password,firstname,lastname,dob,phonenumber) values ('$email','$hashed_password','$firstname','$lastname','$dob','$phonenumber')";

                mysqli_query($con , $query);
                die;
            } else {
                echo "Please enter valid information";
            }
        }
    }

?>