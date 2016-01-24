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
            
            document.cookie = foo[1];
            window.location.href = "home.html";
        }
        
        console.log(document.cookie);
    }

