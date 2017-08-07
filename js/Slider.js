var getSlideOption=function(_slideitem,_btnnext,_btnprev,_dotsnav,_speed,_auto,_autospeed,totalslide,firstslide) {


    
    var slide = $('.'+_slideitem);
    var btnnext = $('.'+_btnnext);
    var btnprev = $('.'+_btnprev);
    var dotsnav= $('.'+_dotsnav);



    var ol=dotsnav.find('ol');
    
    var li=ol.find('li');

    //var dotsli= document.getElementsByClassName(_dotsnav).getElementsByTagName("li");


    // console.log(slide);
    //var slide = document.getElementsByClassName(_slideitem);
    // var btnnext = document.getElementsByClassName(_btnnext);
    // var btnprev = document.getElementsByClassName(_btnprev);


    $(slide).first().addClass('activeslide');
	
	 $(slide).hide();

    $('.activeslide').show();
    
    $(li).on('click',toDotsNav);
   
	$(btnnext).on('click', nextSlide);
	$(btnprev).on('click', prevSlide);

	if (_auto == true){
		setInterval (nextSlide,_autospeed);
    }

    $(btnnext).hover(function() {
    //var parent = $(this).parent();
        $( this ).css('opacity','0.2');
    }, function() {
    //var parent = $(this).parent();
        $( this ).css('opacity','0');
    });

     $(btnprev).hover(function() {
    //var parent = $(this).parent();
        $( this ).css('opacity','0.2');
    }, function() {
    //var parent = $(this).parent();
        $( this ).css('opacity','0');
    });

    // $(dotsnav > ul > li).bind('click', dotsnav);
    

    //var curslide = 1;
    //var maxslide = 3;
    var curslide = firstslide;
    var maxslide = totalslide;


    function animate(){
        $('.oldActive').removeClass('oldActive');
	    $(slide).fadeOut(_speed);
		$('.activeslide').fadeIn(_speed);
    }



	function nextSlide(){
        $(li).removeClass("active");

		$('.activeslide').removeClass('activeslide').addClass('oldActive');
		if($('.oldActive').is(':last-child')){
             $(slide).first().addClass('activeslide');
            curslide =  1;
            $("#dots_"+ curslide).addClass("active");
		}
		else {
            $('.oldActive').next().addClass('activeslide');
            curslide = curslide + 1;
            $("#dots_"+ curslide).addClass("active");
        }
        animate();

	}


	function prevSlide(){
        $(li).removeClass("active");

		$('.activeslide').removeClass('activeslide').addClass('oldActive');
		if($('.oldActive').is(':first-child')){
             $(slide).last().addClass('activeslide');
            curslide =  maxslide;
            $("#dots_"+ curslide).addClass("active");
		}
		else {
            $('.oldActive').prev().addClass('activeslide');
            curslide = curslide - 1;
            $("#dots_"+ curslide).addClass("active");
		}
        animate();

    }
     
    function toDotsNav(){
        var index = $(this).index() + 1;
        curslide = index;
        $(li).removeClass("active");
        $("#dots_"+ index).addClass("active");
        $('.activeslide').fadeOut(300);
        $("#slide_" + index).fadeIn(300);        
        $(".slide").removeClass("activeslide");
        $("#slide_" + index).addClass("activeslide");
    }

}


getSlideOption("slide","btnnext","btnprev","dots-nav",500,true,8000,3,1);