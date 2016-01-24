var name;
var pic;
var divName;
var ord = 1000;

function displayComments(response) 
{
	var data = response;
    console.log(post);
    
    //table.innerHTML = "<tr><th>Image</th> <th>Type</th> <th>Brand</th> <th>Model</th> <th>Date Purchased</th><th> Delete </th> </tr>";
    var row = data.split('<br>');
    
    for(var i = 1; i <= row.length; i++) 
           {
               var diva = document.createElement("diva");
               var column = row[i].split("****");
                var post = document.getElementById(divName);
                resultNonASync("Select username, picture from User where id ='" + column[1] + "';", namePic);
               
               console.log(name);
               // var pic = result2("Select picture from User where id ='" + column[1] + "';");
               
               var pic = "logo.jpg";
             
                diva.innerHTML ="<img src ='" + pic + "' width='20%'>" +  name  + "<p>" + column[2]  + "</p>" +
                    "<button onClick='newDiv()'> Comment </button>" + "<button> Share </button>" + "<button> Narc+" +column[3] +" </button>" ;
                 //diva.style.order= column[0];
               ord -= 1;
                diva.style.order = ord;
                 post.appendChild(diva);
               }                       
}

function namePic(str)
{
    var data = str.split("****");
     name = data[0];
     pic = data[1]; 
    
    var sam = name.split('"');
    name = sam[1]
     console.log(sam + pic);
}

function getDiv(str)
{
      divName = str;     
}