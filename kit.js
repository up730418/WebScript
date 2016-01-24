 var userID = document.cookie;

function kitSearch(str)
{
    //str.toString();
    str = "select * from Kit where concat(image,brand,model,item,date) like '%" + str + "%' and userID =" + userID;
    result(str, addToTable);    
}

function addKit()
{
    var xhr = new XMLHttpRequest();
    var kit = document.getElementById("inputs");
    
    kit = Array(kit.image.value, kit.brand.value, kit.item.value, kit.model.value, kit.date.value, userID, 'KIT');
    xhr.open("GET", "add.php?kit=" + kit, true);
    xhr.setRequestHeader("Content-Type", "text/html");
    xhr.send();
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
    kitSearch('');
    
}

window.onload = kitSearch('');