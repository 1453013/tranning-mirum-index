var getSlideOption=function(_slideitem,_btnnext,_btnprev,_speed,_auto,_autospeed) {


    
    var slide = $('.'+_slideitem);
    var btnnext = $('.'+_btnnext);
    var btnprev = $('.'+_btnprev);
    // console.log(slide);
    //var slide = document.getElementsByClassName(_slideitem);
    // var btnnext = document.getElementsByClassName(_btnnext);
    // var btnprev = document.getElementsByClassName(_btnprev);


    $(slide).first().addClass('activeslide');
	
	 $(slide).hide();

    $('.activeslide').show();
    
   
	$(btnnext).on('click', nextSlide);
	$(btnprev).on('click', prevSlide);

	if (_auto == true){
		setInterval (nextSlide,_autospeed);
    }

    $(btnnext).mouseup(function() {
        $( this ).css('opacity','0.5');
        })
        .mousedown(function() {
            $( this ).css('opacity','1');
        });

        
    $(btnprev).mouseup(function() {
        $( this ).css('opacity','0.5');
        })
        .mousedown(function() {
            $( this ).css('opacity','1');
        });
        

    function animate(){
        $('.oldActive').removeClass('oldActive');
	    $(slide).fadeOut(_speed);
		$('.activeslide').fadeIn(_speed);
    }



	function nextSlide(){

       $(btnnext).animate({
           
       })
		$('.activeslide').removeClass('activeslide').addClass('oldActive');
		if($('.oldActive').is(':last-child')){
			 $(slide).first().addClass('activeslide');
		}
		else {
			$('.oldActive').next().addClass('activeslide');
        }
        animate();
	}


	function prevSlide(){
        
		$('.activeslide').removeClass('activeslide').addClass('oldActive');
		if($('.oldActive').is(':first-child')){
			 $(slide).last().addClass('activeslide');
		}
		else {
			$('.oldActive').prev().addClass('activeslide');
		}
        animate();
        $(btnprev).removeClass("click");

	}

}


getSlideOption("slide","btnnext","btnprev",500,false,8000);