function upload(file, process) {
    
    console.log(file);
    var xhr = new XMLHttpRequest();
	
	var fd = new FormData();
	fd.append("file", file);
	fd.append("ua", navigator.userAgent);
	
	   xhr.onreadystatechange = function()
    {
     
        if (xhr.readyState == 4 && xhr.status == 200)
            {
               process(xhr.response);
                
            }
    };
	
		xhr.open("POST", "php/upload.php", true);
	    //xhr.setRequestHeader("Content-Type", "multipart/form-data");
        xhr.send(fd);
	
	
    
}