<?php

$servername = "localhost";
$username = "root";
$password = "root";
$db = 'test';
$dbh = new PDO( "mysql:host=$servername; dbname=$db;", $username,$password);

$dbh->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

$json = $_GET['kit'];

if(strpos($json, 'KIT') == true)
{
    
    addKit($json, $dbh);
}

else
{
   
}


Function addKit($json, $db)
{
    $array=split(',', $json);

    $ins =("insert into Kit (image, brand, model, item, date, userId) 
        values ('$array[0]', '$array[1]', '$array[2]', '$array[3]', '$array[4]','$array[5]');") or die(print_r($dbh->errorInfo(), true));
    
    $db->query($ins);    
}
?>

