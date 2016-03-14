var id = window.location.search.substring(1);
var cookieValue = document.cookie;
var userID = cookieValue.split("=");
userID = userID[1];

console.log(userID);

// Used for getting all data needed on the page
function pageSearch()
{
    
    result( id, "challange", createPage);
	result( id, "challangeimg", addImages);
    
}

// Displays comments related to the page
function commentGather(str)
{
	//str= "select Comment.id, comment, narc, User.username, Image.url  from Comment, locationComments  join User on User.id = Comment.userID join Image on User.picture = Image.imageID where locationComments.locationID =" + id +" and locationComments.commentID = Comment.id";
    
    getDiv("comments");
    result(id, "challangeCom", displayComments);
    
}




// adds the data to the elements on the page 
function createPage(response)
{
    var data = response;
    var name = document.getElementById("challangeName");
    var description = document.getElementById("challangeDescriptionText");
   
    var likes = document.getElementById("like");
    var row = data.split('<br>');
    for(var i = 1; i <= row.length - 1; i++) 
           {
               var column = row[i].split("****");
               var id = column[0].split('"');
            name.innerHTML = column[2];
            
            description.innerHTML = column[4];
            likes.innerHTML = "<input type='button' value='Likes = "+column[6]+"' onclick='likeRecord(" +
                         id[1] +")' > </input>";
               
           }
    
}

function addImages(response){
	console.log(response);
	
	 var image = document.getElementById("challangeImages");
	
	var data = response;
	var row = data.split('<br>"');
    for(var i = 1; i <= row.length - 1; i++) 
			{
				var column = row[i].split("****");
				console.log(column[0]);
				image.innerHTML += "<img src="+column[0]+">";
			}
		
}

// likes a record
function likeRecord(id)
{
    var data = Array("Challange", id);
    addData(data, "like", pageSearch);

    
	//pageSearch();

}


function addComment()
{
	// use new post function but add an extra thing to add.php that will add stuff to the new table
	
	var data = document.getElementById("inputs");

    var post = Array(userID, data.comment.value, "0", id);

	addData(post, "chComment");
	commentGather('');
}
//console.log("HELLO");
window.onload = commentGather('');
window.onload = pageSearch();