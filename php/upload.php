<?php
// Adapted from a w3c tutorial
$servername = "localhost";
$username = "root";
$password = "root";
$db = 'test';
$dbh = new PDO( "mysql:host=$servername; dbname=$db;", $username,$password);

$target_dir = "../img/";
$target_file = $target_dir . basename($_FILES["file"]["name"]);
$uploadOk = 1;
$imageFileType = pathinfo($target_file,PATHINFO_EXTENSION);

$newFileName;


// checks if the file is present and due to server limitations 
// if the file is over 2mb the upload will fail

if (!file_exists($_FILES['file']['tmp_name'])) {
    $error =  "File upload failed. Please upload a file less than 2mb.";
	echo($error);
	http_response_code(400);
	exit();
	
	
}

// generate a new unique name for the file
// limits to only 999,999,999 can be uploaded to
// the server otherwise an infinate loop will be reached

$newFileName = $target_dir . rand(0, 999999999) . "." . pathinfo($target_file,PATHINFO_EXTENSION);

	while(file_exists($newFileName))
	{
		$newFileName = $target_dir . rand(0, 999999999) . "." . pathinfo($target_file,PATHINFO_EXTENSION);
	}


// Only allow standard image formats to be used 
if($imageFileType != "jpg" && $imageFileType != "JPG" && $imageFileType != "png" && $imageFileType != "jpeg"
&& $imageFileType != "gif" ) 
{
    echo "Sorry, only JPG, JPEG, PNG & GIF files are allowed.<br>";
    $uploadOk = 0;
}

// Check if all check are ok if not send an error response which will 
// allow it to be handled by fileUploader.js
if ($uploadOk == 0) 
{
	http_response_code(400);

} 

// Upload the file
else 
{	// if it works then add it to the database and return the address and id to the handler
    if (move_uploaded_file($_FILES["file"]["tmp_name"], $newFileName)) 
	{
      	$insert = "Insert into Image (url) values ('$newFileName')";
		$dbh->query($insert);
		$recordID = $dbh ->lastInsertId();
		echo $newFileName ." ". $recordID;
    } 
	
	// if there was an unexpected error display message
	else 
	{
        echo "Sorry, there was an error uploading your file.<br>";
		http_response_code(400);
    }
}
?>