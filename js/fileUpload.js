var imgID = Array();

// connects to the php file and sends it the data
function upload(file) {
    
    console.log(file);
    var xhr = new XMLHttpRequest();
	
	var fd = new FormData();
	fd.append("file", file);
	fd.append("ua", navigator.userAgent);
	
	   xhr.onreadystatechange = function()
    {
		   
     	// successful upload
        if (xhr.readyState == 4 && xhr.status == 200)
            {
				console.log(xhr.responseText);
               responseHandler(xhr.responseText);
                
            }
		   
		 else // Error has occured during upload
		 {
			 errorHandler(xhr.responseText);
		 }
    };
	
	// gets the upload state and calls the progress function
	xhr.upload.addEventListener("progress", function(e){progress(e);});
	
		
		xhr.open("POST", "php/upload.php", true);
	    //xhr.setRequestHeader("Content-Type", "multipart/form-data");
        xhr.send(fd);
}

// shows the progress of the upload to the user
function progress(e)
{
	var progresion = parseInt((e.loaded / e.total * 100));
	
	var message = document.getElementById("message");
	message.innerHTML ="<p> Upload Progress: " +  progresion + "%</p>";
}

//if a succesful upload has happend this will be called
// and it will set the id of the image and call for
// it to be placed on screen

function responseHandler(str)
{
	var str2 = str.split(" ");
	imageDisplay(str2[0]);
	imgID.push(str2[1]);	
	//console.log(str2[1]);
	
}

// if the load fails this is called
// to set the error message
function errorHandler(str)
{
	var message = document.getElementById("message");
	message.innerHTML  = "<p>" + str + "</p>";	
}

// When this is called it will call the upload process 
// could be used to handle multiple files in the future
function fileHandler(files)
{		
	//files = (e.dataTransfer.files);
	//console.log(files);
	//console.log(files.length)
	
	for(var i = 0; i <= (files.length - 1); i++)
		{
			upload(files[i]);
			//console.log(files[i]); // Testing log
		}
	
	//imageDisplay(files[0].name);
}

// Used to display an image within a div
function imageDisplay(image)
{
		var message = document.getElementById("message");
			message.innerHTML  = "<p> Image(s) Succefully Uploaded</p>";	
		var imgdiv = document.getElementById("imgUpload");
	imgdiv.innerHTML +=  "<img src=img/"+ image +">";	
	console.log(imgID);
}

// function for other files to call so they can get  the id of the 
// image so it can be used in their tables
function getimgId()
{
	return imgID;
}

// called when the chose file button is pressed on the page
function loadFile(e)
{
	fileHandler(e.srcElement.files);
}


// Event listeners to discover when a file is being passed to the browser.
window.addEventListener("dragover",
		function(e) { e.preventDefault(); }
	);
window.addEventListener("drop",
		function(e) {
			e.preventDefault();
			fileHandler(e.dataTransfer.files);
		}
	);
