var cookieValue = document.cookie;
var userID = cookieValue.split("=");
userID = userID[1];

var locationTable;
var locationForm;
var feedBack;



//Used by search box to search through all locations to find a match to the input string
function locationSearch(str)
{  
    result(str, "locationSearch", displayData);    
}

//Collects the data of the top 20 locations based on likes
function topLocations()
{
	result("", "topLocation", displayData);     
}

//Collects the 20 most recent locations added
function recentlyAdded()
{
    result("", "recentAddLocation", displayData);   
}

// shows all locations stored on the database
function allLocations()
{
    
    result("", "allLocation", displayData);  
}

// displays the input boxes and hides all other data
function showAddLocation()
{

	locationTable.style.display="none";
	locationForm.style.display = "block"; // ensures input form is shown and results are hidden
}

// Posts the data put into the form to the database
function addLocation()
{
	console.log("addloc");
    var data = document.getElementById("inputs");
	
    
    data = Array(userID, data.name.value, data.location.value, data.description.value, getimgId());
	
	addData(data, "site");
	
	
	feedBack.innerHTML = "<p> Site successfully added </p>";
	
}


// Gets the response from the database and puts it into the table 
function displayData(response)
{

	locationTable.style.display="block";
	locationForm.style.display = "none"; // ensures input form is hidden and results are displayed
    feedBack.innerHTML = "";
	var data = response;
    var table = document.getElementById("locationResults");
    table.innerHTML = "<tr><th>Image</th> <th>Name</th> <th>Location</th> <th>View</th> </tr>";
    var row = data.split('<br>"');
    for(var i = 1; i <= row.length; i++) 
           {
             var column = row[i].split("****");
  
                table.innerHTML +=  "<td id=kitImage> <img src= " +  column[0] + ">" + "</td>" +
						" <td>" + column[1] + "</td>" + "<td>" + column[2] + "</td>" + 
                         "<td> <a id='view'  href='site.html?" +
                         column[3] +"'>View Location </a> </td>";
		   }

}


window.onload =function()
{
	
 	locationTable = document.getElementById("locationResults");
	locationForm = document.getElementById("inputs");
	feedBack = document.getElementById("response");
	topLocations();
};
