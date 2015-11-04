<?php

echo "hello";
$servername = "localhost";
$username = "root";
$password = "root";

try {
    $conn = new PDO("mysql:host=$servername;dbname=myDB", $username, $password);
    // set the PDO error mode to exception
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $sql = "CREATE DATABASE myDBPDO";
    // use exec() because no results are returned
    $conn->exec($sql);
    echo "Database created successfully<br>";
    
    $sql = "CREATE TABLE Lecturer (
  id    int PRIMARY KEY auto_increment,
  fname varchar(20),
  lname varchar(20) not null,
  room  varchar(10) not null
    );";
    echo "Tabel Created";

    }
    
catch(PDOException $e)
    {
    echo $sql . "<br>" . $e->getMessage();
    }

$conn = null;
?>