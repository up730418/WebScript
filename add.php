<?php

$servername = "localhost";
$username = "root";
$password = "root";
$db = 'test';
$user ='rob';
$pass = 'rob';
$tableName = 'kit';

$f = "<script>console.log(' HEllo i loadeed' );</script>";
echo $f;
header('Location: kit.html');

if ($_POST['submit']){
    
$f = "<script>console.log(' HEllo u posted' );</script>";
echo $f;
//header('Contet-Type: text/javascript', 'Location: kit.html');

$json = array('logo.jpg');

    
$json[1] = $_POST['brand'];
$json[2] = $_POST['model'];
$json[3] = $_POST['item'];
$json[4] = $_POST['date'];
    

$dbh = new PDO( "mysql:host=$servername; dbname=$db;", $username,$password);
    $dbh->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

$ins =("insert into $tableName (image, brand, model, item, date) 
    values ('$json[0]', '$json[1]', '$json[2]', '$json[3]', '$json[4]');") or die(print_r($dbh->errorInfo(), true));
    
    $dbh->query($ins);
    
    
echo json_encode($json);
$some = "<script>console.log( 'Debug Objects: " .json_encode($json). "' );</script>";
echo $some;
}
?>

