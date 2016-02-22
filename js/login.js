var cookieValue = document.cookie;
var userID = cookieValue.split("=");
userID = userID[1];

function logIn()
{
    var credentials = document.getElementById("inputs");
    var password = credentials.password.value;
    var user = credentials.user.value;
    var str = "select id from User where username = '" + user + "' and password = '" + password + "'";
    
    result(str, completeLogIn);
}

function completeLogIn(ID)
    {
        var errormsg = document.getElementById("post");
        
        
        if(ID == 0)
            {
                errormsg.innerHTML = "error unknown user";
               
            }
        
        else
        {
          
            ID = ID.replace("<br>", '');
            ID = ID.replace("****", '');
            ID = ID.split('"');
            
            document.cookie = "userID=" +ID[1];
            window.location.href = "home.html";
        }
        
        console.log(document.cookie);
    }

function status()
{
	
	 if (userID === undefined)
       {
		 
        }
	else{
		console.log("log in fool");  
         window.location.href = "home.html";
	}
	
}

status();