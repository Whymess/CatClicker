'use strict'; 

(function(){
	function getImage(){
		var catImage = document.getElementById('Cat');
		var counter = 0;
		catImage.addEventListener('click', function(){
			counter++;
  			document.getElementById('counter').innerHTML = counter
  		}, false);
	}


	getImage()
})()