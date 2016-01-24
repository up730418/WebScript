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

else if (strpos($json, 'LOGS') == true)
{
   addLog($json, $dbh);
}

else if (strpos($json, 'COMMENT') == true)
{
   addComment($json, $dbh);
}

else if (strpos($json, 'CHALLANGE') == true)
{
   addChallange($json, $dbh);
}

else{}


Function addKit($json, $db)
{
    $array=split(',', $json);

    $ins =("insert into Kit (image, brand, model, item, date, userId) 
        values ('$array[0]', '$array[1]', '$array[2]', '$array[3]', '$array[4]','$array[5]');") or die(print_r($dbh->errorInfo(), true));
    
    $db->query($ins);    
}

Function addLog($json, $db)
{
    $array=split(',', $json);

    $ins =("insert into Logs (diveNo, date, depth, timeIn, duration, visibility, PG, location, 
            buddy, comments, diveProfile, userID) values ('$array[0]', '$array[1]', '$array[2]', '$array[3]',
                 '$array[4]','$array[5]','$array[6]','$array[7]', '$array[8]','$array[9]','$array[10]',
                    '$array[11]');") or die(print_r($dbh->errorInfo(), true));
    
    $db->query($ins);    
}

Function addComment($json, $db)
{
    $array=split(',', $json);

    $ins =("insert into Comment (userID, comment, narc) 
        values ('$array[0]', '$array[1]', '$array[2]');") or die(print_r($dbh->errorInfo(), true));
    
    $db->query($ins);    
}

Function addChallange($json, $db)
{
    $array=split(',', $json);

    $ins =("insert into Challange (userID, name, date_added, description, image, likes) values ('$array[0]', '$array[1]', '$array[2]', '$array[3]',
                 '$array[4]',0);") or die(print_r($dbh->errorInfo(), true));
    
    $db->query($ins);    
}

?>

