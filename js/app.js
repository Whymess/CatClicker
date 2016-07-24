'use strict'; 

(function(){
	function getImage(){
		var catImage = document.getElementById('cat');
		var counter = 0;
		catImage.addEventListener('click', function(){
			counter++;
  			document.getElementById('counter').innerHTML = counter
  		}, false);
	}


	getImage()
})()