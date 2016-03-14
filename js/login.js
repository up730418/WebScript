var cookieValue = document.cookie;
var userID = cookieValue.split("=");
userID = userID[1];

function logIn()
{
    var credentials = document.getElementById("inputs");
    var password = credentials.password.value;
    var user = credentials.user.value;
    var data = Array(user, password);

    result(data, "login", completeLogIn);
}

//Checks the value of the returned value and if its > 0 creats a cookie with that number
// so the user can have personalised results
function completeLogIn(ID)
    {
		console.log(ID); // test to see what value is returned from db
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
        
        //console.log(document.cookie); // test to see if the cookie is generated
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