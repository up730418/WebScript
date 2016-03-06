var cookieValue = document.cookie;
var userID = cookieValue.split("=");
userID = userID[1];


function logSearch(str)
{
    str = Array(str, userID);
				
    result(str, "logSearch",  addToTable);    
}






function addLog()
{

    var data = document.getElementById("inputs");
    
    data = Array(data.dive_no.value, data.date.value, data.depth.value, data.timeIn.value,
                data.duration.value, data.visibility.value, data.pg.value, data.location.value,
                    data.buddy.value, data.description.value, data.profile.value, userID, 'LOGS');
	addData(data, "log");
	
    logSearch('');
}
    
function addToTable(response) 

{
	var data = response;
    var table = document.getElementById("logTable");
    table.innerHTML = "<tr> <th>Dive NO</th> <th>Date</th> <th>Depth</th> <th>Time In</th> " +
         "<th>Duration</th> <th>Visibility</th> <th>PG</th> <th>Location</th>" +
             "<th>Kit</th> <th>Buddy</th> <th>Description</th> <th>Profile</th> </tr>";
    var row = data.split('<br>');
    
    for(var i = 1; i <= row.length; i++) 
           {
               var column = row[i].split("****");
               
                table.innerHTML += "<td>" + column[1] + "</td>" + "<td>" + 
                    column[2] + "</td>" + "<td>" + column[3] + "</td>" + "<td>" + 
                    column[4]  + "</td>" + "<td>" + column[5] + "Mins"  + 
                    "</td>" + "<td>" + column[6]  + "</td>" + "<td>" + column[7]  + 
                    "</td>" + "<td>" + column[8]  + "</td>" + "<td>" + "NA"  + 
                    "</td>" + "<td>" + column[9]  + "</td>" + "<td>" + 
                    column[10]  + "</td>" + "<td id=kitImage>" + "<img src=" + 
                    column[11] + ">" + "</td>";
           }
}

window.onload = logSearch('');