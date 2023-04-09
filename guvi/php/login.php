<?php
    session_start();

    $dbhost="localhost";
    $dbuser="root";
    $dbpass="";
    $dbname="guvi_register";

    if(!$con = mysqli_connect($dbhost,$dbuser,$dbpass,$dbname)){
        die("Failed to connect!");
    }



    $json = file_get_contents('php://input');

    $data = json_decode($json);

    $email = $data->email;
    $password = $data->password;

    $sql2 = "select * from guvi_users where email='".$email."'";
    
    $result = mysqli_query($con,$sql2);
    
    $row = mysqli_fetch_array($result);


    if(mysqli_num_rows($result) > 0){        
        $hashed_password = $row['PASSWORD'];
        $a = password_verify($password,$hashed_password);    
        if($a == true){     
            echo 'true';
        }
        else{
            echo 'false';
        }
    } else{
        echo 'false';
    }

 ?>