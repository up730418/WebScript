<?php

$servername = "localhost";
$username = "root";
$password = "root";
$db = 'test';
$dbh = new PDO( "mysql:host=$servername; dbname=$db;", $username,$password);

$dbh->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

$data = $_POST['data'];
$type = $_POST['type'];


if($type == 'kit')
{
	addKit($data, $dbh);
}
if($type == 'log')
{
    addLog($data, $dbh);
}

if($type == 'comment')
{
   addComment($data, $dbh);
}

if($type == 'challange')
{
   addChallange($data, $dbh);
}

if($type == 'chComment')
{
   addChComment($data, $dbh);
}

if($type == 'site')
{
	addSite($data, $dbh);
}

Function addKit($json, $db)
{
    $array=split(',', $json);

    $ins = $db->prepare("insert into Kit (image, brand, model, item, date, userId) 
        values (?, ?, ?, ?, ?, ?);") or die(print_r($dbh->errorInfo(), true));
    
	$ins->bindParam(1, $array[0]);
	$ins->bindParam(2, $array[1]);
	$ins->bindParam(3, $array[2]);
	$ins->bindParam(4, $array[3]);
	$ins->bindParam(5, $array[4]);
	$ins->bindParam(6, $array[5]);
    $ins->execute();    
}

Function addLog($json, $db)
{
    $array=split(',', $json);

    $ins = $db->prepare("insert into Logs (diveNo, date, depth, timeIn, duration, visibility, PG, location, 
            buddy, comments, diveProfile, userID) values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);") or die(print_r($dbh->errorInfo(), true));
    
    $ins->bindParam(1, $array[0]);
	$ins->bindParam(2, $array[1]);
	$ins->bindParam(3, $array[2]);
	$ins->bindParam(4, $array[3]);
	$ins->bindParam(5, $array[4]);
	$ins->bindParam(6, $array[5]);
	$ins->bindParam(7, $array[6]);
	$ins->bindParam(8, $array[7]);
	$ins->bindParam(9, $array[8]);
	$ins->bindParam(10, $array[9]);
	$ins->bindParam(11, $array[10]);
	$ins->bindParam(12, $array[11]);
    $ins->execute();    
}

Function addComment($json, $db)
{
    $array=split(',', $json);

    $ins = $db->prepare("insert into Comment (userID, comment, narc) 
        values (?, ?, ?);") or die(print_r($dbh->errorInfo(), true));

    $ins->bindParam(1, $array[0]);
	$ins->bindParam(2, $array[1]);
	$ins->bindParam(3, $array[2]);
    $ins->execute();       
}


Function addChallange($json, $db)
{
    $array=split(',', $json);

    $ins = $db->prepare("insert into Challange (userID, name, date_added, description, image, likes) values (?,?,?,?,?,0);") or die(print_r($dbh->errorInfo(), true));
    
    $ins->bindParam(1, $array[0]);
	$ins->bindParam(2, $array[1]);
	$ins->bindParam(3, $array[2]);
	$ins->bindParam(4, $array[3]);
	$ins->bindParam(5, $array[4]);
    $ins->execute();        
}

Function addChComment($json, $db)
{
	$array=split(',', $json);

    $ins = $db->prepare("insert into Comment (userID, comment, narc) 
        values (?, ?, ?);") or die(print_r($dbh->errorInfo(), true));

    $ins->bindParam(1, $array[0]);
	$ins->bindParam(2, $array[1]);
	$ins->bindParam(3, $array[2]);
	
	$commentID = $db ->lastInsertId();
	$ins->execute(); 
	
	$ins2 = $db->prepare("insert into challangeComments values(?,'$commentID');") or die(print_r($dbh->errorInfo(), true));
	
	$ins->bindParam(1, $array[3]); 
	$ins2->execute(); 
}

Function addSite($json, $db)
{

	$array = split(',', $json);

	$ins = $db->prepare("insert into diveLocation (userID, name, location, description, image, likes) values (?, ?, ?, ?, ?, 0);") or die(print_r($dbh->errorInfo(), true));
	
	$ins->bindParam(1, $array[0]);
	$ins->bindParam(2, $array[1]);
	$ins->bindParam(3, $array[2]);
	$ins->bindParam(4, $array[3]);
	$ins->bindParam(5, $array[4]);
    $ins->execute();  

}

Function addSiteComment($json, $db)
{
	$array = split(',', $json);
	
	$ins = $db->prepare("insert into Comment (userID, comment, narc) 
        values (?, ?, ?);") or die(print_r($dbh->errorInfo(), true));

    $ins->bindParam(1, $array[0]);
	$ins->bindParam(2, $array[1]);
	$ins->bindParam(3, $array[2]);
    $ins->execute(); 
	
	$commentID = $db ->lastInsertId();
	
	$ins2 = $db->prepare("insert into locationComments values(?, '$commentID');") or die(print_r($dbh->errorInfo(), true));
	
	$ins->bindParam(1, $array[3]); 
	$ins2->execute(); 
}

?>

