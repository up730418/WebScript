window.addEventListener(
    'fuckKit',
    function(event)
    {
        fuckKit();
    }
);

function fuckKit()
{
    var xhr = new XMLHttpRequest();
    var kit = document.getElementById("inputs");
    window.location.href = "add.php" + kit; 
    xhr.open("GET", "add.php?paramname=" + kit, true);
}
    

function requestKit()
{
    var xhr = new XMLHttpRequest();
    var url = "dbSearch.php"
    
    xhr.open("GET", url, true);
    //xhr.onload = alert('hi');
    xhr.setRequestHeader("Content-Type", "text/html");
    xhr.addEventListener("readystatechange", process, false);
    xhr.send();
    //alert("sent");
    
        
}

function process(e)
{
    var currentReadyState = e.target.readyState;
	var currentStatus = e.target.status;

	if(currentReadyState == 4 && currentStatus == 200) {
	   addToTable(e.target.responseText);
       // alert("got");
	}
}

function addToTable(response) {
	var data = response;
	
	var id = data;
    var table = document.getElementById("kitTable");
    //id.split('"');
    //table.innerHTML = id.split('"');
    mySplitResult = id.split('<br>');
    
    for(i = 0; i <= mySplitResult.length; i++)
           {
               tableSplit = mySplitResult[i+1].split("****");
               
                table.innerHTML +="<td id=kitImage>" + "<img src= " + 
                    tableSplit[1]+ ">" + "</td>" + "<td>" + tableSplit[2]  + "</td>" + "<td>" + 
                        tableSplit[3] + "</td>" + "<td>" + tableSplit[4] + "</td>" + "<td>" + 
                            tableSplit[5]  + "</td>";
    
           }
	/**old shit copied of internet probably never used but keeping for some reason
    var minute = time.tm_min;
	
	if (minute < 10) {
		minute = "0" + minute;
	}
	
	myText.textContent = hour + ":" + minute;
    **/
    
}
requestKit();
