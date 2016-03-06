<?php

$servername = "localhost";
$username = "root";
$password = "root";
$db = 'test';
$dbh = new PDO( "mysql:host=$servername; dbname=$db;", $username,$password);

$dbh->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

$data = $_POST['data'];
$type = $_POST['type'];

$values = split(',', $data);

if($type == 'kit')
{
	addKit($values, $dbh);
}
if($type == 'log')
{
    addLog($values, $dbh);
}

if($type == 'comment')
{
   addComment($values, $dbh);
}

if($type == 'challange')
{
   addChallange($values, $dbh);
}

if($type == 'chComment')
{
   addChComment($values, $dbh);
}

if($type == 'site')
{
	addSite($values, $dbh);
}

Function addKit($json, $db)
{
    

    $ins = $db->prepare("insert into Kit (image, brand, model, item, date, userId) 
        values (?, ?, ?, ?, ?, ?);") or die(print_r($dbh->errorInfo(), true));
    
	$ins->bindParam(1, $json[0]);
	$ins->bindParam(2, $json[1]);
	$ins->bindParam(3, $json[2]);
	$ins->bindParam(4, $json[3]);
	$ins->bindParam(5, $json[4]);
	$ins->bindParam(6, $json[5]);
    $ins->execute();    
}

Function addLog($json, $db)
{

    $ins = $db->prepare("insert into Logs (diveNo, date, depth, timeIn, duration, visibility, PG, location, 
            buddy, comments, diveProfile, userID) values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);") or die(print_r($dbh->errorInfo(), true));
    
    $ins->bindParam(1, $json[0]);
	$ins->bindParam(2, $json[1]);
	$ins->bindParam(3, $json[2]);
	$ins->bindParam(4, $json[3]);
	$ins->bindParam(5, $json[4]);
	$ins->bindParam(6, $json[5]);
	$ins->bindParam(7, $json[6]);
	$ins->bindParam(8, $json[7]);
	$ins->bindParam(9, $json[8]);
	$ins->bindParam(10, $json[9]);
	$ins->bindParam(11, $json[10]);
	$ins->bindParam(12, $json[11]);
    $ins->execute();    
}

Function addComment($json, $db)
{

    $ins = $db->prepare("insert into Comment (userID, comment, narc) 
        values (?, ?, ?);") or die(print_r($dbh->errorInfo(), true));

    $ins->bindParam(1, $json[0]);
	$ins->bindParam(2, $json[1]);
	$ins->bindParam(3, $json[2]);
    $ins->execute();       
}


Function addChallange($json, $db)
{

    $ins = $db->prepare("insert into Challange (userID, name, date_added, description, image, likes) values (?,?,?,?,?,0);") or die(print_r($dbh->errorInfo(), true));
    
    $ins->bindParam(1, $json[0]);
	$ins->bindParam(2, $json[1]);
	$ins->bindParam(3, $json[2]);
	$ins->bindParam(4, $json[3]);
	$ins->bindParam(5, $json[4]);
    $ins->execute();        
}

Function addChComment($json, $db)
{

    $ins = $db->prepare("insert into Comment (userID, comment, narc) 
        values (?, ?, ?);") or die(print_r($dbh->errorInfo(), true));

    $ins->bindParam(1, $json[0]);
	$ins->bindParam(2, $json[1]);
	$ins->bindParam(3, $json[2]);
	$ins->execute(); 
	
	$commentID = $db->lastInsertId();

	$ins2 = $db->prepare("insert into challangeComments values(?,'$commentID');") or die(print_r($dbh->errorInfo(), true));
	
	$ins2->bindParam(1, $json[3]); 
	$ins2->execute(); 
}

Function addSite($json, $db)
{

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

	
	$ins = $db->prepare("insert into Comment (userID, comment, narc) 
        values (?, ?, ?);") or die(print_r($dbh->errorInfo(), true));

    $ins->bindParam(1, $json[0]);
	$ins->bindParam(2, $json[1]);
	$ins->bindParam(3, $json[2]);
    $ins->execute(); 
	
	$commentID = $db ->lastInsertId();
	
	$ins2 = $db->prepare("insert into locationComments values(?, '$commentID');") or die(print_r($dbh->errorInfo(), true));
	
	$ins->bindParam(1, $json[3]); 
	$ins2->execute(); 
}

?>

