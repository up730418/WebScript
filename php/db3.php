<?php
//echo "hi";
$servername = "localhost";
$username = "root";
$password = "root";
$db = 'test';
$tableName = 'Kit';
$columns = array('image', 'brand', 'model', 'item', 'date');

    // Database creation Variable
    $create =     $sql = ("CREATE DATABASE `$db`;") 
        or die(print_r($dbh->errorInfo(), true));
    
    // SQL querry for creating the kit table
    $kit = ("CREATE TABLE IF NOT EXISTS Kit (
        id    int PRIMARY KEY auto_increment,
        image varchar(100),
        brand varchar(100),
        model varchar(100),
        item varchar(100),
        date varchar(100),
        userID varchar(100)
        );");

    // SQL querry for creating the logs table
    $logs = ("CREATE TABLE IF NOT EXISTS Logs (
        id    int PRIMARY KEY auto_increment,
        diveNo varchar(100),
        date varchar(100),
        depth varchar(100),
        timeIn varchar(100),
        duration varchar(100),
        visibility varchar(100),
        PG varchar(100),
        location varchar(100),
        buddy varchar(100),
        comments varchar(1000),
        diveProfile varchar(100),
        userID varchar(100)
        );");

    // SQL querry for creating the user table
    $user = ("CREATE TABLE IF NOT EXISTS User (
        id    int PRIMARY KEY auto_increment,
        username varchar(100),
        password varchar(100),
        picture varchar(100)
        );");

    // SQL querry for creating the comment table
    $comment = ("CREATE TABLE IF NOT EXISTS Comment (
        id    int PRIMARY KEY auto_increment,
        userID varchar(100),
        comment varchar(100),
        narc varchar(100)
        );");
    
    // SQL querry for creating the challange table
    $challange = ("CREATE TABLE IF NOT EXISTS Challange (
        id    int PRIMARY KEY auto_increment,
        userID varchar(100),
        name varchar(100),
        date_added varchar(100),
        description varchar(1000),
        image varchar(100),
        likes int(10)
        );");

    // SQL querry for creating the dive Location table
    $diveLocation = ("CREATE TABLE IF NOT EXISTS diveLocation (
        id    int PRIMARY KEY auto_increment,
        userID varchar(100),
        name varchar(100),
        location varchar(100),
        description varchar(1000),
        image varchar(100),
        likes int(10)
        );");

	$locationComment = ("CREATE TABLE IF NOT EXISTS locationComments (
        locationID int,
        commentID int
        );");


try{// try to connect to the database if it already exists

$dbh = new PDO( "mysql:host=$servername; dbname=$db;", $username,$password);
$dbh->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
//echo "<br> db entered <br>";
    
}

catch(PDOException $e) // if db dosent exist connect to server create db then link to  it
{ 
    //echo "<br> Creating Database<br>";
	try{
    $dbh = new PDO( "mysql:host=$servername;", $username,$password);
    $dbh->exec($create);
    $dbh = new PDO( "mysql:host=$servername; dbname=$db;", $username,$password);
    $dbh->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);  
	}
	
	catch(PDOException $e){
		echo "Error connecting to database please check error message logs <br> Error Messaage: <br>";
		echo $e;
	}
}

try
{  // if tables dont exist add them
    $dbh->exec($kit);
    $dbh->exec($logs);
    $dbh->exec($user);
    $dbh->exec($comment);
    $dbh->exec($challange);
    $dbh->exec($diveLocation);
	$dbh->exec($locationComment);
	echo "Installation succesfully completed";
}

catch(PDOException $e)  // Cathch that does nothing probably needs deleting
{ 
   	echo "Somthing went wrong with the installation pleas check error message and server logs<br>"; 
	echo $e;
    
}
?>