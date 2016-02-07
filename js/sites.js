var cookieValue = document.cookie;
var userID = cookieValue.split("=");
userID = userID[1];

var locationTable;
var locationForm;




function locationSearch(str)
{
    //str.toString();
    str = "select * from Kit where concat(image,brand,model,item,date) like '%" + str + "%' and userID =" + userID;
    result(str, addToTable);    
}




function topLocations()
{
 var str = "select * from diveLocation order by likes desc limit 20;";
    result(str, displayData);  
    
}

function recentlyAdded()
{
    var str = "select * from diveLocation order by id desc limit 20;";
    result(str, displayData);  
    
}


function allLocations()
{
    
    var str = "select * from diveLocation;";
    result(str, displayData);  
    
}


function showAddLocation()
{

	locationTable.style.display="none";
	locationForm.style.display = "block"; // ensures input form is shown and results are hidden
    
}
function addLocation()
{
	


}

function displayData(response)
{
	locationTable.style.display="block";
	locationForm.style.display = "none"; // ensures input form is hidden and results are displayed
    var data = response;
    var table = document.getElementById("locationResults");
    table.innerHTML = "<tr><th>Image</th> <th>Name</th> <th>Location</th> <th>View</th> </tr>";
    var row = data.split('<br>');
    for(var i = 1; i <= row.length; i++) 
           {
             var column = row[i].split("****");
               var id = column[0].split('"');
                table.innerHTML +=  "<td id=kitImage> <img src= " +  column[5] + ">" + "</td>" +
						" <td>" + column[2] + "</td>" + "<td>" + column[3] + "</td>" + 
                         "<td> <a id='view'  href='site.html?" +
                         id[1] +"'>View Location </a> </td>";
		   }

}


window.onload =function()
{
	
 	locationTable = document.getElementById("locationResults");
	locationForm = document.getElementById("locationInput");
	topLocations();
};
