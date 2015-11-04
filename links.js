/*
window.onload = function(event){ 
    
document.getElementById("one").onclick = newDiv;

}

*/

var ord = 1;
window.addEventListener(
    'submit', 
    function(event)
    {
        newDiv();
        event.preventDefault();
    }
);
    
window.addEventListener(
    'newDiv',
    function(event)
    {
        newDiv();
    }
);

window.addEventListener(
    'addKit',
    function(event)
    {
        addKit();
    }
);

window.addEventListener(
    'addDive',
    function(event)
    {
        addDive();
    }
);


var name = "Jhon Wayn";
var image = "logo.jpg";




/**

function showPage() {
    
    var a = document.getElementById("home");
    var b = document.getElementById("Friend")
    var c = document.getElementById("text");
    
    if (f.addEventListener(case checked))
        {
        
        }
    
}
**/
function addDive()
{
    var log = document.getElementById("inputs");
    var table = document.getElementById("logTable");
    table.innerHTML= table.innerHTML + "<td>" + log.dive_no.value + "</td>" + "<td>" + log.date.value + "</td>" + "<td>" + log.depth.value + "</td>" + "<td>" + log.time.value  + "</td>" + "<td>" + log.visibility.value  + "</td>" + "<td>" + log.pg.value  + "</td>" + "<td>" + log.location.value  + "</td>" + "<td>" + log.kit.value  + "</td>" + "<td>" + log.buddy.value  + "</td>" + "<td>" + log.description.value  + "</td>" + "<td id=kitImage>" + "<img src=" + log.profile.value + ">" + "</td>";
}


function addKit()
{
    var kit = document.getElementById("inputs");
    var table = document.getElementById("kitTable");
    table.innerHTML= table.innerHTML + "<td id=kitImage>" + "<img src=" + kit.image.value + ">" + "</td>" + "<td>" + kit.item.value  + "</td>" + "<td>" + kit.brand.value + "</td>" + "<td>" + kit.model.value + "</td>" + "<td>" + kit.date.value  + "</td>";
}

function comment()
{
    
    
}

function newDiv()
{
   //var name = "Jhon";
    ord -= 1;
    //alert(ord);
    var post = document.getElementById("post");
    var diva = document.createElement("diva");
    
    var text = document.getElementById("inputs");
    diva.innerHTML = "<img src ='logo.jpg' width='20%'>" +  name   + "<p>" + text.test.value  + "</p>" + "<button onClick='newDiv()'> Comment </button>" + "<button> Share </button>" + "<button> Narc </button>" ;
   
    diva.style.order= ord;
    post.appendChild(diva);
    
    
    
    //alert("Done");
}

function readFile(){
                var file = File.open(info.txt);
                
                
                } 


