<?php
echo "hi";
$servername = "localhost";
$username = "root";
$password = "root";
$db = 'test';
$user ='rob';
$pass = 'rob';

    $create =     $sql = ("CREATE DATABASE `$db`;
                CREATE USER '$user'@'localhost' IDENTIFIED BY '$pass';
                GRANT ALL ON `$db`.* TO '$user'@'localhost';
                FLUSH PRIVILEGES;") 
        or die(print_r($dbh->errorInfo(), true));

    $table = ("CREATE TABLE Lecturer (
        id    int PRIMARY KEY auto_increment,
        fname varchar(20),
        lname varchar(20) not null,
        room  varchar(10) not null
        );");

try{

$dbh = new PDO( "mysql:host=$servername; dbname=$db;", $username,$password);
$dbh->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
}

catch(PDOException $e) 
{ 
    echo "<br> Creating Database<br>";
    $dbh = new PDO( "mysql:host=$servername;", $username,$password);
    $dbh->exec($create);
    $dbh = new PDO( "mysql:host=$servername; dbname=$db;", $username,$password);
    $dbh->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);  
}

try
{ 
    $dbh->exec($table);
}

catch(PDOException $e) 
{ 
   echo"<br> Table already exists<br>";    
    
}

    
    
    $ins = $dbh->query("insert into Lecturer (fname, lname, room) values ('fred', 'pootang', 'Lab69');") or die(print_r($dbh->errorInfo(), true));
    
     foreach($dbh->query('select * from Lecturer') as $row)
     {
        echo '<br>'. $row['id']. ' '. $row['fname']. ' '. $row['lname']. ' '. $row['room'];
     }
        
echo "<br>end";
?>