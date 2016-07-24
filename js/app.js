'use strict'; 

$(function(){


	$('img').bind('click', function(){

		var initial = this.id
		if(typeof $(this).data('counter') == 'undefined'){
			$(this).data('counter', 1);
			console.log($(this).data('counter') + initial)
		} else {
			$(this).data('counter', $(this).data('counter')+1)
			console.log($(this).data('counter') + initial)
		}
	})


});










