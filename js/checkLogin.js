var cookieValue = document.cookie;
var userID = cookieValue.split("=");
userID = userID[1];

function checkLogin()
{
		console.log(userID);
    if (userID === undefined)
       {
		 console.log("log in fool");  
         window.location.href = "login.html";
        }
}

function logOut()
{
	document.cookie = 'userID' + '=; expires= Sat, 01 Jan 2000 00:00:01 GMT;';
	
	window.location.href = "login.html";
}

checkLogin();