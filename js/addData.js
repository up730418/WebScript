function addData(data, type, process) {
	
  var xhr = new XMLHttpRequest();
	
	   xhr.onreadystatechange = function()
    {
     
        if (xhr.readyState == 4 && xhr.status == 200)
            {
				if(process != null)
				{
                	process(xhr.response);
				}
                
            }
    }
	   
  xhr.open('POST', "php/add2.php", true);
	
  xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	
  var str = "data="+data + "&type="+type;
	
  xhr.send(str);
}
