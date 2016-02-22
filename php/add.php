<?php

$servername = "localhost";
$username = "root";
$password = "root";
$db = 'test';
$dbh = new PDO( "mysql:host=$servername; dbname=$db;", $username,$password);

$dbh->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

//$json = $_GET['kit'];

if(isset($_GET['kit']))
{
	$json = $_GET['kit'];
     addKit($json, $dbh);
}

if(isset($_GET['log']))
{
	$json = $_GET['log'];
    addLog($json, $dbh);
}

if(isset($_GET['comment']))
{
	$json = $_GET['comment'];
   addComment($json, $dbh);
}

if(isset($_GET['challange']))
{
	$json = $_GET['challange'];
   addChallange($json, $dbh);
}

if(isset($_GET['chComment']))
{
	$json = $_GET['chComment'];
   addChComment($json, $dbh);
}

if(isset($_GET['site']))
{
	$json = $_GET['site'];
	addSite($json, $dbh);
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
    	echo "h1";
    $db->query($ins);    
}


Function addChallange($json, $db)
{
    $array=split(',', $json);

    $ins =("insert into Challange (userID, name, date_added, description, image, likes) values ('$array[0]', '$array[1]', '$array[2]', '$array[3]',
                 '$array[4]',0);") or die(print_r($dbh->errorInfo(), true));
    
    $db->query($ins);    
}

Function addChComment($json, $db)
{
	$array=split(',', $json);

    $ins =("insert into Comment (userID, comment, narc) 
        values ('$array[0]', '$array[1]', '$array[2]');") or die(print_r($dbh->errorInfo(), true));

    $db->query($ins);
	
	$commentID = $db ->lastInsertId();
	
	$ins2 = ("insert into challangeComments values('$array[3]','$commentID');") or die(print_r($dbh->errorInfo(), true));
	 $db->query($ins2);
}

Function addSite($json, $db)
{

	$array = split(',', $json);

	$ins = ("insert into diveLocation (userID, name, location, description, image, likes) values ('$array[0]', '$array[1]', '$array[2]', '$array[3]',
				'$array[4]',0);") or die(print_r($dbh->errorInfo(), true));
	
	$db->query($ins);

}

Function addSiteComment($json, $db)
{
	$array = split(',', $json);
	$ins =("insert into Comment (userID, comment, narc) 
        values ('$array[0]', '$array[1]', '$array[2]');") or die(print_r($dbh->errorInfo(), true));

    $db->query($ins);
	
	$commentID = $db ->lastInsertId();
	
	$ins2 = ("insert into locationComments values('$array[3]','$commentID');") or die(print_r($dbh->errorInfo(), true));
	
	$db->query($ins2);
}

?>

