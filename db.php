<?php

echo "hello1";
$servername = "localhost";
$username = "root";
$password = "root";


try {

    $conn = mysql_connect($servername, $username, $password);
    echo "boo";
    // set the PDO error mode to exception
    //$conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $sql = "CREATE DATABASE myDB";
	echo "foo";
    // use exec() because no results are returned
    //$conn->exec($sql);
    echo "<br>Database created successfully";
    $sup = mysql_select_db("mydb");
    $sup = "CREATE TABLE Lecturer (
  id    int PRIMARY KEY auto_increment,
  fname varchar(20),
  lname varchar(20) not null,
  room  varchar(10) not null
    );" or die (mysql_error());
    echo "<br>Tabel Created";
    $sup = "insert into Lecturer values (1,'fred', 'pootang', 'Lab69');";
    echo "<br> Values Inserted poss";
    $sup = mysql_query( "show tables;") or die (mysql_error());
    //$bar = mysql_fetch_array($foo);
    //if($foo == null)
    //    echo "<br>well fuck";
    echo "<br>" .$sup;
    echo "<br>fuck this";
    
    
    }
    
catch(PDOException $e)
    {
    echo $sql . "<br>" . $e->getMessage();
    }

$conn = null;
?>