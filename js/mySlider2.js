$(document).ready(function(){
	var speed= 500;
	var autoswitch = false;
	var autoswitch_speed = 8000;


	$('.slide').first().addClass('activeslide');
	
	$('.slide').hide();

	$('.activeslide').show();

	$('.btnnext').on('click', nextSlide);
	$('.btnprev').on('click', prevSlide);

	if (autoswitch == true){
		setInterval (nextSlide,autoswitch_speed);
	}
	function nextSlide(){
		$('.activeslide').removeClass('activeslide').addClass('oldActive');
		if($('.oldActive').is(':last-child')){
			$('.slide').first().addClass('activeslide');
		}
		else {
			$('.oldActive').next().addClass('activeslide');
		}
		$('.oldActive').removeClass('oldActive');
		$('.slide').fadeOut(speed);
		$('.activeslide').fadeIn(speed);
	}

	function prevSlide(){

		$('.activeslide').removeClass('activeslide').addClass('oldActive');
		if($('.oldActive').is(':first-child')){
			$('.slide').last().addClass('activeslide');
		}
		else {
			$('.oldActive').prev().addClass('activeslide');
		}
		$('.oldActive').removeClass('oldActive');
		$('.slide').fadeOut(speed);
		$('.activeslide').fadeIn(speed);

	}

});




