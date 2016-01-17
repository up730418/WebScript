function result(str) {
    
    if (str.length==0) 
     { 
        document.getElementById("search").innerHTML="";
        document.getElementById("search").style.border="0px";
        return;
    }
    
    var xhr = new XMLHttpRequest();
    str = "select * from Kit where concat(image,brand,model,item) like '%" + str + "%'";
    xhr.onreadystatechange = function()
    {
        if (xhr.readyState == 4 && xhr.status == 200)
            {
                document.getElementById("search").innerHTML = xhr.responseText;
                document.getElementById("search").style.border = "1px solid #A5ACB2";
                
            }
    }
        xhr.open("GET", "dbSearch.php?querry="+str, true);
        xhr.send();
    
}
