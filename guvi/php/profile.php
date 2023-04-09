<?php 

session_start();

if (($_SESSION["user_id"]) == NULL){
    echo 'false';
}

$dbhost="localhost";
$dbuser="root";
$dbpass="";
$dbname="guvi_register";




if(!$con = mysqli_connect($dbhost,$dbuser,$dbpass,$dbname)){
    die("Failed to connect!");
}

$email = mysqli_real_escape_string($con,$_POST["email"]);

$sql = "select * from guvi_users where email='".$email."'";
$result = mysqli_query($con,$sql);
$data = mysqli_fetch_assoc($result);
$json = json_encode($data);
echo $json;


?>