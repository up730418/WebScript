<?php
$f = "<script>console.log(' HEllo i loadeed' );</script>";
echo $f;


if (isset($_POST['submit'])){
    
$f = "<script>console.log(' HEllo I Started' );</script>";
echo $f;
//header('Contet-Type: text/javascript');
    
    
    echo "hello";

$json = array( 
    "image" =>"logo.jpg",
    "brand" => "",
    "model" => "",
    "item" => "",
    "date" => "");

    
$json['brand'] = $_GET['brand'];
$json['model'] = $_GET['model'];
$json['item'] = $_GET['item'];
$json['date'] = $_GET['date'];


echo json_encode($json);
$some = "<script>console.log( 'Debug Objects: " .json_encode($json). "' );</script>";
echo $some;
}
?>

<html>

<head>
        <meta charset="utf-8"/>
        <title>Dive Book - Home</title>
        <meta name="description" content="The place Divers go to meet"/>
        <meta name="author" content="up730418"/>
        <link rel="stylesheet" href="main.css"/>
        <script src="links.js"> </script> 
        
</head>
    
    
<body>

    <div id = "topbar">
        
        <!--<img src="logo.jpg" >-->
        <input type="text" name="test" placeholder="Search">
        <button id="topbtn" onclick="window.location='diveLogs.html';"> Logs</button>
        <button id="topbtn" onclick="window.location='sites.html';"> Dive Sites</button>
        <button id="topbtn" onclick="window.location='kit.html';"> Kit</button>
        <button id="topbtn" onclick="window.location='home.html';"> Log Out</button>
        
        
        
    </div>
    
    
    <div id="addKit">
            

        <form  method="post" action="" id="inputs">
           <input type="text" name="image" placeholder="Image">
            <input type="text" name="brand" placeholder="Brand">
            <input type="text" name="model" placeholder="Model descrition">
            <input type="text" name="item" placeholder="Type of item">
            <input type="date" name="date" placeholder="Date Purchased">
            
            <input type="submit" name="submit" value="submit" >
        </form>
    </div>
    
    <div id="Kit">
        
        <h3> My Kit </h3>
        
        <table id="kitTable">
            <tr>
                <th>Image</th>
                <th>Type</th>
                <th>Brand</th>
                <th>Model</th>
                <th>Date Purchased</th>        
            </tr>
            <tr>
                <td id="kitImage"> <img src="logo.jpg"></td>
                <td>Tank</td>
                <td>Mares</td>
                <td>Mares Tank 2</td>
                <td>10.11.15</td>
                
            
            </tr>
            
        </table>
        
        
        
    </div>
    
    </body>
</html>


