var APP = APP || {};

APP.common = APP.common || (function () {

	'use strict';
  
  var $menuToggle,
	    $menu,
      $body,
      menuToggleClass,
      menuOpenedClass,
      options;
      
	function init() {
    $menuToggle = $('#navigation-toggle');
		$menu = $('#navigation-primary > ul');
    $body = $('body');
    menuToggleClass = 'expanded';
    menuOpenedClass = 'mobile-navigation-opened';
		options = {
			speed: 250
    }

		// show / hide top level mobile nav
		$menuToggle.on('click', toggleMenuExpand);
  }
  
  function menuOpen($el, speed) {
		var duration = options.speed;
		if (typeof speed === 'number') {
			duration = speed;
		}
		$menu.slideDown(duration);
		$el.addClass(menuToggleClass);
    $body.addClass(menuOpenedClass);
	}

	function menuClose($el, speed) {
		var duration = options.speed;
		if (typeof speed === 'number') {
			duration = speed;
		}
		$menu.slideUp(duration);
		$el.removeClass(menuToggleClass);
    $body.removeClass(menuOpenedClass);
	}


	function toggleMenuExpand(evt) {
		/* jshint validthis: true */
		var $this;

		evt.preventDefault();

		$this = $(this);
		if ($this.hasClass(menuToggleClass)) {
			menuClose($this);
		} else {
			menuOpen($this);
		}
	}
  
  return {
    init: init
  };
  
}());


$(document).ready(function () {
	'use strict';
  
  APP.common.init();
});





var sliderheight = $('.slide').height();
$('.big-slider').css("height", sliderheight); 
$('.btnnext').css("height", sliderheight); 
$('.btnprev').css("height", sliderheight); 

console.log(sliderheight);

var frameheight = $('.shame-frame').height();
$('.join-us').css("height",frameheight);
$('.frame').css("height",frameheight);
$('.join-us-state').css("height",frameheight);




jQuery(document).ready(function ($) {

	var slideCount = $('.archive-item-container-mobile ul li').length;
	var slideWidth = window.innerWidth || document.body.clientWidth;

	var slideHeight = $('.archive-item-container-mobile ul li').height();
	var sliderUlWidth = slideCount * slideWidth;

	$('.archive-item-container-mobile').css({ width: slideWidth, height: slideHeight });
	
	$('.archive-item-container-mobile ul').css({ width: sliderUlWidth, marginLeft: - slideWidth });
	
	$('.archive-item-container-mobile ul li:last-child').prependTo('.archive-item-container-mobile ul');


    function moveLeft() {
		
        $('.archive-item-container-mobile ul').animate({
            left: + slideWidth
        }, 1000, function () {
            $('.archive-item-container-mobile ul li:last-child').prependTo('.archive-item-container-mobile ul');
						$('.archive-item-container-mobile ul').css('left', '');
						
        });
    };

    function moveRight() {

        $('.archive-item-container-mobile ul').animate({
            left: - slideWidth
        }, 1000, function () {
            $('.archive-item-container-mobile ul li:first-child').appendTo('.archive-item-container-mobile ul');
						$('.archive-item-container-mobile ul').css('left', '');
        });
    };

    $('.btnprevmarchive').click(function () {
				moveLeft();
    });

    $('.btnnextmarchive').click(function () {
				moveRight();
    });
});











jQuery(document).ready(function ($) {

//   $('#checkbox').change(function(){
//     setInterval(function () {
//         moveRight();
//     }, 3000);
//   });
		


  var slideCount = $('.mySlider ul li').length;
	var slideWidth = window.innerWidth || document.body.clientWidth;

	var slideHeight = $('.mySlider ul li').height();
	var sliderUlWidth = slideCount * slideWidth;


    //console.log (slideCount,slideWidth,slideHeight,sliderUlWidth);

    $('.mySlider').css({ width: slideWidth, height: slideHeight });
	
		$('.mySlider ul').css({ width: sliderUlWidth, marginLeft: - slideWidth });
	
    $('.mySlider ul li:last-child').prependTo('.mySlider ul');

		var curMile= 0;
		var maxMile=5;
		$('.btnprevm').css({'opacity':'0.5', 'pointer-events':'none'})
		console.log(curMile);



		function checkcurMile() {
		if(curMile == 0) {
			$('.btnprevm').css({'opacity':'0.5', 'pointer-events':'none'})
		}
		else if(curMile == maxMile) {
				$('.btnnextm').css({'opacity':'0.5', 'pointer-events':'none'})
		}
			else {
				$('.btnprevm').css({'opacity':'1', 'pointer-events':'auto'})
				$('.btnnextm').css({'opacity':'1', 'pointer-events':'auto'})
			}
		};


		  // $(document).mouseup(function(e) 
			// {
			// 	var container = $(".extra-info");
			// 	if (!container.is(e.target) && container.has(e.target).length === 0) 
			// 	{
			// 			$(".extra-info").remove();
			// 	}
			// })


    function moveLeft() {
		
				curMile = curMile -1 ;
				console.log(curMile);
				hideextrainfo();
				checkcurMile();
				$('.btnmoreinfo').css('opacity','0.7');
        $('.mySlider ul').animate({
            left: + slideWidth
        }, 1000, function () {
            $('.mySlider ul li:last-child').prependTo('.mySlider ul');
						$('.mySlider ul').css('left', '');
						
        });
    };

    function moveRight() {

				curMile = curMile + 1 ;
				console.log(curMile);
				hideextrainfo();
				$('.btnmoreinfo').css('opacity','0.7');
				checkcurMile();
        $('.mySlider ul').animate({
            left: - slideWidth
        }, 1000, function () {
            $('.mySlider ul li:first-child').appendTo('.mySlider ul');
						$('.mySlider ul').css('left', '');
        });
    };

		function showextrainfo() {
			var curMilediv = $('.mySlider ul li').eq(1);
			var extrainfo =  curMilediv.find(".extra-info");
			extrainfo.addClass('appear');
		}

		function hideextrainfo() {
			var curMilediv = $('.mySlider ul li').eq(1);
			var extrainfo =  curMilediv.find(".extra-info");
				extrainfo.removeClass('appear');
		}

    $('.btnprevm').click(function () {
				moveLeft();
    });

    $('.btnnextm').click(function () {
				moveRight();
    });

		$('.btnmoreinfo').click(function(){
			if ($(".extra-info").hasClass('appear')){
				$('.btnmoreinfo').css('opacity','0.6');
				hideextrainfo();
			}
			else {
				$('.btnmoreinfo').css('opacity','1.0');
				showextrainfo();
			} 
		});

});
