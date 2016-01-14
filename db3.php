<?php
//echo "hi";
$servername = "localhost";
$username = "root";
$password = "root";
$db = 'test';
$user ='rob';
$pass = 'rob';
$tableName = 'kit';
$columns = array('image', 'brand', 'model', 'item', 'date');

    $create =     $sql = ("CREATE DATABASE `$db`;
                CREATE USER '$user'@'localhost' IDENTIFIED BY '$pass';
                GRANT ALL ON `$db`.* TO '$user'@'localhost';
                FLUSH PRIVILEGES;") 
        or die(print_r($dbh->errorInfo(), true));

    $table = ("CREATE TABLE $tableName (
        id    int PRIMARY KEY auto_increment,
        $columns[0] varchar(100),
        $columns[1] varchar(100),
        $columns[2] varchar(100),
        $columns[3] varchar(100),
        $columns[4] varchar(100)
        );");

try{

$dbh = new PDO( "mysql:host=$servername; dbname=$db;", $username,$password);
$dbh->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
//echo "<br> db entered <br>";
    
}

catch(PDOException $e) 
{ 
    //echo "<br> Creating Database<br>";
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
   //echo"<br> Table already exists or some other shit broke check log if it dont output tables<br>";    
    
}

    
    
    $ins =("insert into $tableName ($columns[0], $columns[1], $columns[2], $columns[3], $columns[4]) 
    values ('fred', 'pootang', 'Lab69', 'fun', 'times');") or die(print_r($dbh->errorInfo(), true));
    
    //$dbh->query($ins);

Function returnResults($db, $table, $columns)
{
     foreach($db->query("select * from $table") as $row)
     {
        $data = $row['id']. ' '. $row[$columns[0]]. ' '. $row[$columns[1]]. ' '. $row[$columns[2]]. ' '. 
            $row[$columns[3]]. ' '. $row[$columns[4]];
         $data = json_encode($data);
         echo $data;
     }
}

returnResults($dbh, $tableName, $columns);
        
//echo "<br> <br> end";
?>