<?php
$columns = array('image', 'brand', 'model', 'item', 'date');
$tableName = 'Kit';
$querry = 'select * from Kit';
$servername = "localhost";
$username = "root";
$password = "root";
$db = 'test';

$dbh = new PDO( "mysql:host=$servername; dbname=$db;", $username,$password);
$dbh->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

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
         
         
        $data = $row['id']. '****'. $row[$columns[0]]. '****'. $row[$columns[1]]. '****'. $row[$columns[2]]. '****'. 
            $row[$columns[3]]. '****'. $row[$columns[4]];
         $data = json_encode($data);
         //echo $data;
        
     }
     
         $data2 = json_encode($data2); 
         //echo "<br>". $data2; 
}

returnResults($dbh, $querry, $columns);
        
//echo "<br> <br> end";
?>