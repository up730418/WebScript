function result(data, type, process1) {
    
    
    var xhr = new XMLHttpRequest();

    
    xhr.onreadystatechange = function()
    {
     
        if (xhr.readyState == 4 && xhr.status == 200)
            {
                process1(xhr.response);
                
            }
    }
        xhr.open("GET", "php/dbSearch.php?data=" + data + "&type=" + type, true);
		
		xhr.setRequestHeader("Content-type", "text/html");
	
	
        xhr.send();
    
}
