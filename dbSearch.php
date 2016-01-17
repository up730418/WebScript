<?php
$columns = array('image', 'brand', 'model', 'item', 'date');
$servername = "localhost";
$username = "root";
$password = "root";
$db = 'test';

$dbh = new PDO( "mysql:host=$servername; dbname=$db;", $username,$password);
$dbh->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

$querry = $_GET['querry'];

returnResults($dbh, $querry, $columns);

Function returnResults($db, $querry, $columns)
{
    
     foreach($db->query($querry) as $row)
     {
         $data2 = '';
         
         for($i=0; $i <= (sizeof($row) / 2) - 1 ; $i++)
         {
             $data2 = $data2 .$row[$i].'****';
           
         }
           $data2 = json_encode($data2); 
            echo "<br>". $data2; 
        
     }
     

}
?>