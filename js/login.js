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

function completeLogIn(foo)
    {
        var test = document.getElementById("post");
        
        
        if(foo == 0)
            {
                test.innerHTML = "error unknown user";
               
            }
        
        else
        {
           test.innerHTML =  "hello" + foo;
            foo = foo.replace("<br>", '');
            foo = foo.replace("****", '');
            foo = foo.split('"');
            
            document.cookie = "userID=" +foo[1];
            window.location.href = "home.html";
        }
        
        console.log(document.cookie);
    }

function status()
{
	console.log("harow");
	 if (userID === undefined)
       {
		 
        }
	else{
		console.log("log in fool");  
         window.location.href = "home.html";
	}
	
}

status();