var id = window.location.search.substring(1);
var cookieValue = document.cookie;
var userID = cookieValue.split("=");
userID = userID[1];

console.log(userID);

// Used for getting all data needed on the page
function pageSearch()
{
    str = "select id, userID, name, date_added, description, url , likes from Challange join Image on Challange.image = Image.imageID where id = " + id;
    result(str, createPage);
    
}


// Displays comments related to the page
function commentGather(str)
{
	//str= "select Comment.id, comment, narc, User.username, Image.url  from Comment, locationComments  join User on User.id = Comment.userID join Image on User.picture = Image.imageID where locationComments.locationID =" + id +" and locationComments.commentID = Comment.id";
    str = "select Comment.id, comment, narc, User.username, Image.url  from Comment join challangeComments on  challangeComments.challangeID = " + id +" and challangeComments.commentID = Comment.id join User on User.id = Comment.userID join Image on User.picture = Image.imageID order by Comment.id desc;";
    getDiv("comments");
    result(str, displayComments);
    
}

// adds the data to the elements on the page 
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
            name.innerHTML = column[2];
            image.innerHTML = "<img src="+column[5]+">";
            description.innerHTML = column[4];
            likes.innerHTML = "<input type='button' value='Likes = "+column[6]+"' onclick='likeRecord(" +
                         id[1] +")' > </input>";
               
           }
    
}

// likes a record
function likeRecord(id)
{
    var like = "update Challange set likes = likes %2B 1 where id =" + id + ";";
    result(like, null);
    pageSearch();

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