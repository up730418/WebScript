<?php

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
//$newFileName = $target_dir . $fileNum . "." . pathinfo($target_file,PATHINFO_EXTENSION);

// Taken from a w3c tutorial

// Check if image file is a actual image or fake image

    $check = getimagesize($_FILES["file"]["tmp_name"]);
    if($check !== false) {
       // echo "File is an image - " . $check["mime"] . ".";
        $uploadOk = 1;
    } else {
        //echo "File is not an image.";
        $uploadOk = 0;
    }


// Check if file already exists and generate a new unique name 
if (file_exists($target_file)) {
    //echo "Sorry, file already exists. A new name will be generated";
	$newFileName = $target_dir . rand(0, 9999999) . "." . pathinfo($target_file,PATHINFO_EXTENSION);
	//if the new file name is generated and already exists this will run untill it has found a unique one
	while(file_exists($newFileName) )
	{
		$newFileName = $target_dir . rand(0, 9999999) . "." . pathinfo($target_file,PATHINFO_EXTENSION);
	}
}
else{
	$newFileName = $target_file;
}

// Check file size
//if ($_FILES["file"]["size"] > 500000) {
//    //echo "Sorry, your file is too large.";
//    $uploadOk = 0;
//}

// Allow certain file formats
if($imageFileType != "jpg" && $imageFileType != "png" && $imageFileType != "jpeg"
&& $imageFileType != "gif" ) {
    //echo "Sorry, only JPG, JPEG, PNG & GIF files are allowed.";
    $uploadOk = 0;
}

// Check if $uploadOk is set to 0 by an error
if ($uploadOk == 0) {
    //echo "Sorry, your file was not uploaded.";

// if everything is ok, try to upload file
} else {
    if (move_uploaded_file($_FILES["file"]["tmp_name"], $newFileName)) {
        //echo "The file ". basename( $_FILES["file"]["name"]). " has been uploaded.";
    } else {
       // echo "Sorry, there was an error uploading your file.";
    }
	
	$insert = "Insert into Image (url) values ('$newFileName')";
	$dbh->query($insert);
	$recordID = $dbh ->lastInsertId();
	echo $recordID;

}
?>