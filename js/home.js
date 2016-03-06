var cookieValue = document.cookie;
var userID = cookieValue.split("=");
userID = userID[1];
var ord = 100;
var name;
var pic;


function commentSearch(str)
{
    //str.toString();
   
    getDiv("post");
    result(str, "comments", displayComments);    
}

function newPost()
{

    var data = document.getElementById("inputs");

    var post = Array(userID, data.comment.value, "0");
    
	addData(post, "comment");
}
    


function deleteRecord(id)
{
    var del = "delete from Kit where id = " + id;
    result(del, addToTable);
    kitSearch('');
    
}

window.onload = commentSearch('');
