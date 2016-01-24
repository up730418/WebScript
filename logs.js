 var userID = document.cookie;

function logSearch(str)
{
    str = "select * from Logs where concat(diveNo, date, depth, timeIn" + 
        ", duration, visibility, PG, location, buddy, comments, diveProfile) like '%" + 
        str + "%' and userID =" + userID + " order by diveNo";
    result(str, addToTable);    
}






function addLog()
{
    var xhr = new XMLHttpRequest();
    var log = document.getElementById("inputs");
    
    log = Array(log.dive_no.value, log.date.value, log.depth.value, log.timeIn.value,
                log.duration.value, log.visibility.value, log.pg.value, log.location.value,
                    log.buddy.value, log.description.value, log.profile.value, userID, 'LOGS');
    xhr.open("GET", "add.php?kit=" + log, true);
    xhr.setRequestHeader("Content-Type", "text/html");
    xhr.send();
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