var cookieValue = document.cookie;
var userID = cookieValue.split("=");
userID = userID[1];
var ord = 100;
var name;
var pic;

function checkLogin()
{
    if (document.cookie.indexOf("userID") === null)
       {
         window.location.href = "login.html";
        }
}

function commentSearch(str)
{
    //str.toString();
    str = "select * from Comment where comment like '%" + str + "%'";
    getDiv("post");
    result(str, displayComments);    
}

function newPost()
{

    var post = document.getElementById("inputs");

    post = Array(userID, post.comment.value, "0", "COMMENT");
    
	addData(post, "comment");
}
    


function deleteRecord(id)
{
    var del = "delete from Kit where id = " + id;
    result(del, addToTable);
    kitSearch('');
    
}

window.onload = checkLogin();
window.onload = commentSearch('');
