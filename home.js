var userID = document.cookie;
var ord = 100;
var name;
var pic;

function checkLogin()
{
    if (document.cookie === null)
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
    var xhr = new XMLHttpRequest();
    var post = document.getElementById("inputs");

    
    var data = Array(userID, post.comment.value, "0", "COMMENT");
    
    xhr.open("GET", "add.php?kit=" + data, true);
    xhr.setRequestHeader("Content-Type", "text/html");
    xhr.send();
   /// kitSearch('');
}
    


function deleteRecord(id)
{
    var del = "delete from Kit where id = " + id;
    result(del, addToTable);
    kitSearch('');
    
}

window.onload = checkLogin();
window.onload = commentSearch('');
