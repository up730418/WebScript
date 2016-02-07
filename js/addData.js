function addData(data, getter)
{
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "php/add.php?" + getter +"=" + data, true);
    xhr.setRequestHeader("Content-Type", "text/html");
    xhr.send();

}