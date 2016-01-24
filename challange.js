var id = window.location.search.substring(1);
var userID = document.cookie;

console.log(id);

function pageSearch()
{
    str = "select * from Challange where id = " + id;
    result(str, createPage);
    
}

function commentGather(str)
{
    str = "select * from Comment where comment like '%" + str + "%'";
    getDiv("comments");
    result(str, displayComments);
    
}


function createPage(response)
{
    var data = response;
    var name = document.getElementById("challangeName");
    var description = document.getElementById("challangeDescriptionText");
    var image = document.getElementById("challangeImages");
    var likes = document.getElementById("like");
    var row = data.split('<br>');
    for(var i = 1; i <= row.length; i++) 
           {
               var column = row[i].split("****");
               var id = column[0].split('"');
               var tb = "Kit";
            name.innerHTML = column[2];
            image.innerHTML = "<img src="+column[5]+">";
            description.innerHTML = column[4];
            likes.innerHTML = "<input type='button' value='Likes = "+column[6]+"' > </input>";
               
           }
    
}


commentGather('');
pageSearch();
