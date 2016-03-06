<?php
$servername = "localhost";
$username = "root";
$password = "root";
$db = 'test';

$dbh = new PDO( "mysql:host=$servername; dbname=$db;", $username,$password);
$dbh->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

$data = $_GET['data'];
$type = $_GET['type'];
	
	
$array = split(',', $data);

if($type == 'kit')
{
	kitSearch($dbh, $array);
}
if($type == 'challange')
{
	challangePage($dbh, $array);
}
if($type == 'challangeCom')
{
	challangeCom($dbh, $array);
}
if($type == 'myChall')
{
	challangeSearch($dbh, $array);
}
if($type == 'popChall')
{
	popularChallangeSearch($dbh, $array);
}
if($type == 'logSearch')
{
	logSearch($dbh, $array);
}
if($type == 'comments')
{
	comments($dbh, $array);
}
if($type == 'locationSearch')
{
	location($dbh, $array, "", $data);
}
if($type == 'topLocation')
{
	location($dbh, $array, "order by likes desc limit 20", $data);
}
if($type == 'recentAddLocation')
{
	location($dbh, $array, "order by id desc limit 20", $data);
}
if($type == 'allLocation')
{
	location($dbh, $array, "", "");
}


Function kitSearch($db, $json)
{
	 $json[0] = "%" . $json[0] . "%";
	
	 $sql = ("select id, Image.url, brand, model, item, date,userID from Kit join Image on 
	 						Kit.image = Image.imageID where concat(image,brand,model,item,date) 
									like '$json[0]'  and userID =  $json[1] ;");
	
		returnResults($db, $sql);
}

Function challangePage($db, $json)
{	
	 $sql = ("select id, userID, name, date_added, description, url , likes from Challange join Image 
	 			on Challange.image = Image.imageID where id =  $json[0] ;");
	
	
		returnResults($db, $sql);
}


Function challangeCom($db, $json)
{
	 $sql = ("select Comment.id, comment, narc, User.username, Image.url  from Comment join 
	 			challangeComments on  challangeComments.challangeID = $json[0] and 
					challangeComments.commentID = Comment.id join User on User.id = Comment.userID 
					join Image on User.picture = Image.imageID order by Comment.id desc;");
	
		returnResults($db, $sql);
}

Function challangeSearch($db, $json)
{
	$json[0] = "%" . $json[0] . "%";
	
	 $sql = ("select id, userID, name, date_added, description, url , likes from Challange join 
	 			Image on Challange.image = Image.imageID where concat(name,date_added,description,image) 
					like '$json[0]' and userID = $json[1];");
	
		returnResults($db, $sql);
}

Function popularChallangeSearch($db, $json)
{
	$json[0] = "%" . $json[0] . "%";
	
	 $sql = ("select id, userID, name, date_added, description, url , likes from Challange join Image on 
	 			Challange.image = Image.imageID where concat(name,date_added,description,image) 
				like '$json[0]' order by likes desc limit 10;");
	
		returnResults($db, $sql);
}

Function logSearch($db, $json)
{
	$json[0] = "%" . $json[0] . "%";
	
	 $sql = ("select * from Logs where concat(diveNo, date, depth, timeIn, duration, visibility, PG, location, 
	 			buddy, comments, diveProfile) like '$json[0]' and userID = $json[1] order by diveNo;");
	
		returnResults($db, $sql);
}

Function comments($db, $json)
{
	$json[0] = "%" . $json[0] . "%";
	
	 $sql = ("select Comment.id, comment, narc, User.username, Image.url  from Comment join User on 
	 			User.id = Comment.userID join Image on User.picture = Image.imageID where comment 
					like '$json[0]' order by Comment.id;");
	
		returnResults($db, $sql);
}


Function location($db, $json, $order, $data)
{
	$data = "%" . $data . "%";
	
	 $sql = ("Select url, name, location, id from diveLocation join Image on diveLocation.image = Image.imageID 
	 			where concat(name,location,description) like '$data' $order;");
	
		returnResults($db, $sql);
}





Function returnResults($db, $querry)
{
    try{

     foreach($db->query($querry) as $row)
     {

         $data2 = '';
         
         for($i=0; $i <= (sizeof($row)/2 - 1); $i++)
         {
             $data2 = $data2 .$row[$i].'****';
           
         }
           $data2 = json_encode($data2); 
            echo "<br>". $data2;
     }
    }
    
    catch(PDOException $e)
    {
        echo "An error occured";
        echo $e;
    }
}




?>