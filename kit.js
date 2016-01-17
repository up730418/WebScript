function result(str) {
    
    if (str.length==0) 
     { 
        requestKit();
    }
    var userID = '001';
    var xhr = new XMLHttpRequest();
    str = "select * from Kit where concat(image,brand,model,item,date) like '%" + str + "%' and userID =" + userID;
    
    xhr.onreadystatechange = function()
    {
        if (xhr.readyState == 4 && xhr.status == 200)
            {
                addToTable(xhr.response);            
            }
    }
        xhr.open("GET", "dbSearch.php?querry="+str, true);
        xhr.send();
    
}

function addKit()
{
    var xhr = new XMLHttpRequest();
    var kit = document.getElementById("inputs");
    
    kit = Array(kit.image.value, kit.brand.value, kit.item.value, kit.model.value, kit.date.value, '001', 'KIT');
    //window.location.href = "add.php" + kit; 
    xhr.open("GET", "add.php?kit=" + kit, true);
    xhr.setRequestHeader("Content-Type", "text/html");
    xhr.send();
}
    

function requestKit()
{
    var userID = '001';
    var xhr = new XMLHttpRequest();
    var querry = "Select * from Kit where userID =" + userID + ";"; 
    var url = "dbSearch.php?querry=" + querry;
    
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
    table.innerHTML = "<tr><th>Image</th> <th>Type</th> <th>Brand</th> <th>Model</th> <th>Date Purchased</th>        </tr>";
    var mySplitResult = id.split('<br>');
    
    for(var i = 1; i <= mySplitResult.length; i++)
           {
               var tableSplit = mySplitResult[i].split("****");
               
                table.innerHTML +="<td id=kitImage>" + "<img src= " + 
                    tableSplit[1]+ ">" + "</td>" + "<td>" + tableSplit[3]  + "</td>" + "<td>" + 
                        tableSplit[2] + "</td>" + "<td>" + tableSplit[4] + "</td>" + "<td>" + 
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
