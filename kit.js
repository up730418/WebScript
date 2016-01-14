window.addEventListener(
    'addKit',
    function(event)
    {
        addKit();
    }
);



function addKit()
{
    var xhr = new XMLHttpRequest();
    var url = "db3.php"
    var kit = document.getElementById("inputs");
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
    mySplitResult = id.split('""');
    
    for(i = 0; i <= mySplitResult.length; i++)
           {
               tableSplit = mySplitResult[i].split(" ");
               
                table.innerHTML +="<td id=kitImage>" + "<img src= " + 
                    tableSplit[1]+ ">" + "</td>" + "<td>" + tableSplit[2]  + "</td>" + "<td>" + 
                        tableSplit[3] + "</td>" + "<td>" + tableSplit[4] + "</td>" + "<td>" + 
                            tableSplit[5]  + "</td>";
    
           }
	/**
    var minute = time.tm_min;
	
	if (minute < 10) {
		minute = "0" + minute;
	}
	
	myText.textContent = hour + ":" + minute;
    **/
    
}
addKit();
