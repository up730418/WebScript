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
                //result("Select username, url from User join Image on User.picture = Image.imageid where id ='" + column[1] + "';", namePic);
               
               //console.log(pic);
               // var pic = result2("Select picture from User where id ='" + column[1] + "';");
               
              
             
                diva.innerHTML ="<img src ='" + column[4]  + "' width='20%'>" +  column[3]   + "<p>" + column[1]  + "</p>" +
                    "<button onClick='newDiv()'> Comment </button>" + "<button> Share </button>" + "<button> Narc+" +column[2] +" </button>" ;
                 //diva.style.order= column[0];
               ord -= 1;
                diva.style.order = ord;
                 post.appendChild(diva);
               }                       
}



function getDiv(str)
{
      divName = str;     
}