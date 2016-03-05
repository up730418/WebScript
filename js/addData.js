function addData(data, type) {
	
  var xhr = new XMLHttpRequest();

  xhr.open('POST', "php/add2.php", true);
	
  xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	
  var str = "data="+data + "&type="+type;
	
  xhr.send(str);
}


function addDataOLD(data, getter)
{
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "php/add.php?" + getter +"=" + data, true);
    xhr.setRequestHeader("Content-Type", "text/html");
    xhr.send();

}