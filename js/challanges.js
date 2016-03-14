var cookieValue = document.cookie;
var userID = cookieValue.split("=");
userID = userID[1];

//var table; // The table for the data to be put into

function myChallangeSearch(str)
{
    //str.toString();
    str = Array(str, userID);
	
	result(str, "myChall", addToTable);    
}

function popularChallangeSearch(str)
{
	 
	
     result(str, "popChall", addToTable2);    
}

function addChallange()
{
    var data = document.getElementById("inputs");
    
    data = Array(userID, data.name.value, data.date.value, data.description.value, getimgId());
	
	addData(data, "challange");
	
    myChallangeSearch('');
    popularChallangeSearch('');
}
    
function addToTable(response) 

{
	var data = response;
	var table = document.getElementById("myChallangesTable");
	
    table.innerHTML = "<tr> <th>Name</th> <th>Date Added</th> <th>Description</th> <th>images</th> <th>like</th> </tr>";
    var row = data.split('<br>');
    
	
    for(var i = 1; i <= row.length - 1; i++) 
           {
               var column = row[i].split("****");
               var id = column[0].split('"');
			   
                table.innerHTML += "<td> <a href='challange.html?" + id[1] + "'>" + column[2]  + " </a> </td>" + "<td>" + 
                 column[3] + "</td>" + "<td>" + column[4] + "</td>" + "<td id=kitImage>" 
                    + "<img src= " +  column[5] + ">" + "</td>" 
                        + "<td> <input  id='like' type='button' onclick='likeRecord(" 
                        + id[1] +")' value='likes = "+column[6] +"'> </input> </td>";
           }
}

function addToTable2(response) 

{
	var data = response;
    var table = document.getElementById("PopularChallangesTable");
    
	table.innerHTML = "<tr> <th>Name</th> <th>Date Added</th> <th>Description</th> <th>images</th> <th>like</th> </tr>";
    var row = data.split('<br>');
    
    for(var i = 1; i <= row.length - 1; i++) 
           {
               var column = row[i].split("****");
               var id = column[0].split('"');

                table.innerHTML += "<td> <a href='challange.html?" + id[1] + "'>" + column[2]  + " </a> </td>" + "<td>" + 
                 column[3] + "</td>" + "<td>" + column[4] + "</td>" + "<td id=kitImage>" 
                    + "<img src= " +  column[5] + ">" + "</td>" 
                        + "<td> <input  id='like' type='button' onclick='likeRecord(" 
                        + id[1] +")' value='likes = "+column[6] +"'> </input> </td>";
           }
}


function likeRecord(id)
{
    var data = Array("Challange", id);
    addData(data, "like", pageSearch);
    myChallangeSearch('');
    popularChallangeSearch('');
    
}

function fake(str){
    //console.log(str);
    
}

window.onload = myChallangeSearch('');
window.onload = popularChallangeSearch('');