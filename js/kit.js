var cookieValue = document.cookie;
var userID = cookieValue.split("=");
userID = userID[1];

console.log(userID);

var data;
var files;


	
function kitSearch(str)
{
    data = Array(str,  userID);
    result(data, "kitSearch", addToTable);    
}

// this and the other one need to be compacted into one process
function addKit()
{
     data = document.getElementById("inputs");  
	
	
	addKit2(getimgId())
	/**
	var file = document.getElementById("image");
	
	if (files == null)
		{
			//upload(file.files[0], addKit2);
			//console.log(file.files[0]);
		}
	//upload(files[0], addKit2);
	var imgdiv = document.getElementById("imgUpload");
	imgdiv.innerHTML = "<img src=img/0.png>";
	**/
}

function addKit2(str)
{
	data = Array( str, data.brand.value, data.item.value, data.model.value, data.date.value, userID);
 	addData(data,"kit");
    kitSearch('');
}
 

function addToTable(response) 

{
	var data = response;
    var table = document.getElementById("kitTable");
    table.innerHTML = "<tr><th>Image</th> <th>Type</th> <th>Brand</th> <th>Model</th> <th>Date Purchased</th><th> Delete </th> </tr>";
    var row = data.split('<br>');
    for(var i = 1; i <= row.length; i++) 
           {
               var column = row[i].split("****");
               var id = column[0].split('"');
               var tb = "Kit";
                table.innerHTML +="<td id=kitImage>" + "<img src= " + 
                    column[1]+ ">" + "</td>" + "<td>" + column[3]  + "</td>" + "<td>" + 
                        column[2] + "</td>" + "<td>" + column[4] + "</td>" + "<td>" + 
                            column[5]  + "</td>" + "<td> <input  id='delete' type='button' onclick='deleteRecord(" + id[1] +")' value='del'> </input> </td>";
           }
}


function deleteRecord(id)
{
    var del = "delete from Kit where id = " + id;
    result(del, addToTable);
    kitSearch('');  //can i delete this???? Probably y did i put it in--- Re tested of course u do you mug
    
}

window.onload = kitSearch('');
