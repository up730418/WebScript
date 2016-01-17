<?php
//echo "hi";
$servername = "localhost";
$username = "root";
$password = "root";
$db = 'test';
$user ='rob';
$pass = 'rob';
$tableName = 'Kit';
$columns = array('image', 'brand', 'model', 'item', 'date');

    // Database creation Variable
    $create =     $sql = ("CREATE DATABASE `$db`;
                CREATE USER '$user'@'localhost' IDENTIFIED BY '$pass';
                GRANT ALL ON `$db`.* TO '$user'@'localhost';
                FLUSH PRIVILEGES;") 
        or die(print_r($dbh->errorInfo(), true));
    
    // SQL querry for creating a table
    $kit = ("CREATE TABLE Kit (
        id    int PRIMARY KEY auto_increment,
        image varchar(100),
        brand varchar(100),
        model varchar(100),
        item varchar(100),
        date varchar(100),
        userID varchar(100)
        );");

    // SQL querry for creating a table
    $logs = ("CREATE TABLE Logs (
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

    // SQL querry for creating a table
    $user = ("CREATE TABLE User (
        id    int PRIMARY KEY auto_increment,
        username varchar(100),
        password varchar(100)
        );");

    // SQL querry for creating a table
    $comment = ("CREATE TABLE Comment (
        id    int PRIMARY KEY auto_increment,
        userID varchar(100),
        comment varchar(100),
        narc varchar(100)
        );");


try{// try to connect to the database if it already exists

$dbh = new PDO( "mysql:host=$servername; dbname=$db;", $username,$password);
$dbh->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
//echo "<br> db entered <br>";
    
}

catch(PDOException $e) // if db dosent exist connect to server create db then link to  it
{ 
    //echo "<br> Creating Database<br>";
    $dbh = new PDO( "mysql:host=$servername;", $username,$password);
    $dbh->exec($create);
    $dbh = new PDO( "mysql:host=$servername; dbname=$db;", $username,$password);
    $dbh->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);  
}

try
{  // if tables dont exist add them
    $dbh->exec($kit);
    $dbh->exec($logs);
    $dbh->exec($user);
    $dbh->exec($comment);
}

catch(PDOException $e)  // if tables already exist do nothing
{ 
   //echo"<br> Table already exists or some other shit broke check log if it dont output tables<br>";    
    
}

    
    // old iseert to check if db was working should be deleted in real product
    $ins =("insert into $tableName ($columns[0], $columns[1], $columns[2], $columns[3], $columns[4]) 
    values ('fred', 'pootang', 'Lab69', 'fun', 'times');") or die(print_r($dbh->errorInfo(), true));
    
    //$dbh->query($ins);

// Old test function to return data from DB now migrated to dbSearch.php
Function returnResults($db, $table, $columns)
{
     foreach($db->query("select * from $table") as $row)
     {
        $data = $row['id']. '****'. $row[$columns[0]]. '****'. $row[$columns[1]]. '****'. $row[$columns[2]]. '****'. 
            $row[$columns[3]]. '****'. $row[$columns[4]];
         $data = json_encode($data);
         echo $data;
     }
}

//returnResults($dbh, $tableName, $columns);
        
//echo "<br> <br> end";
?>