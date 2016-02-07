var cookieValue = document.cookie;
var userID = cookieValue.split("=");
userID = userID[1];

function myChallangeSearch(str)
{
    //str.toString();
    str = "select * from Challange where concat(name,date_added,description,image) like '%" + str + "%' and userID =" + userID;
    result(str, addToTable);    
}

function popularChallangeSearch(str)
{
    //str.toString();
    str = "select * from Challange where concat(name,date_added,description,image) like '%" + str + "%' order by likes desc limit 10;";
    result(str, addToTable2);    
}

function addChallange()
{
    var data = document.getElementById("inputs");
    
    data = Array(userID, data.name.value, data.date.value, data.description.value, data.image.value, 'CHALLANGE');
	
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
    
    for(var i = 1; i <= row.length; i++) 
           {
               var column = row[i].split("****");
               var id = column[0].split('"');
               var tb = "Kit";
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
    
    for(var i = 1; i <= row.length; i++) 
           {
               var column = row[i].split("****");
               var id = column[0].split('"');
               var tb = "Kit";
                table.innerHTML += "<td> <a href='challange.html?" + id[1] + "'>" + column[2]  + " </a> </td>" + "<td>" + 
                 column[3] + "</td>" + "<td>" + column[4] + "</td>" + "<td id=kitImage>" 
                    + "<img src= " +  column[5] + ">" + "</td>" 
                        + "<td> <input  id='like' type='button' onclick='likeRecord(" 
                        + id[1] +")' value='likes = "+column[6] +"'> </input> </td>";
           }
}


function likeRecord(id)
{
    var like = "update Challange set likes = likes %2B 1 where id =" + id + ";";
    result(like, fake);
    myChallangeSearch('');
    popularChallangeSearch('');
    
}

function fake(str){
    //console.log(str);
    
}

window.onload = myChallangeSearch('');
window.onload = popularChallangeSearch('');