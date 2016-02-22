var cookieValue = document.cookie;
var userID = cookieValue.split("=");
userID = userID[1];

var locationTable;
var locationForm;
var response;




function locationSearch(str)
{
    //str.toString();
    str = "select * from Kit where concat(image,brand,model,item,date) like '%" + str + "%' and userID =" + userID;
    result(str, addToTable);    
}




function topLocations()
{
 var str = "Select url, name, location, id from diveLocation join Image on diveLocation.image = Image.imageID order by likes desc limit 20;";

	result(str, displayData);  
    
}

function recentlyAdded()
{
    var str = "Select url, name, location, id from diveLocation join Image on diveLocation.image = Image.imageID  order by id desc limit 20;";
    result(str, displayData);  
    
}


function allLocations()
{
    
    var str = "Select url, name, location, id from diveLocation join Image on diveLocation.image = Image.imageID;";
    result(str, displayData);  
    
}


function showAddLocation()
{

	locationTable.style.display="none";
	locationForm.style.display = "block"; // ensures input form is shown and results are hidden
    
}

function addLocation()
{
	console.log("addloc");
    var data = document.getElementById("inputs");
	
    
    data = Array(userID, data.name.value, data.location.value, data.description.value, getimgId());
	
	addData(data, "site");
	
	
	response.innerHTML = "<p> Site successfully added </p>";
	
}

function displayData(response)
{

	locationTable.style.display="block";
	locationForm.style.display = "none"; // ensures input form is hidden and results are displayed
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
	response = document.getElementById("response");
	topLocations();
};
