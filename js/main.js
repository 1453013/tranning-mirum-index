
$(document).ready(function(){

  // this is for tabbed-table
    $(".nav-tabs a").click(function(){
        $(this).tab('show');
    });

});

// config for youtubepopup
jQuery(function(){
			jQuery("a.youtubedefault").YouTubePopUp();
			jQuery("a.youtubeauto").YouTubePopUp( { autoplay: 1 } ); 
    });
    

// //config for slick-slider
// $('.portfolio-item-slider').on('init', function(event, slick, currentSlide){
//   var nrCurrentSlide = slick.currentSlide + 1, // din cauza ca e array si incepe de la 0
//       totalSlidesPerPage = nrCurrentSlide + 4; // daca ai 5 thumb-uri pe pagina pui + 4
//   $('.controls').html(nrCurrentSlide + " - " + totalSlidesPerPage + " of " + slick.slideCount);
// });

// $('.portfolio-thumb-slider').slick({
//   slidesToShow: 5,
//   slidesToScroll: 1,
//   asNavFor: '.portfolio-item-slider',
//   arrows: false,
//   focusOnSelect: true,
//   infinite: false,
//   //prevArrow: $('.slick-prev'),
//   //nextArrow: $('.next'),
//   prevArrow:"<img class='a-left control-c prev slick-prev' src='../traning/js/left-arrow.png'>",
//   nextArrow:"<img class='a-right control-c next slick-next' src='../traning/js/right-arrow.png'>"
// });

// $('.portfolio-item-slider').slick({
//   slidesToShow: 1,
//   slidesToScroll: 1,
//   arrows: true,
//   asNavFor: '.portfolio-thumb-slider',
//   infinite: false,
//   prevArrow:"<img class='a-left control-c prev slick-prev' src='../traning/js/left-arrow.png'>",
//   nextArrow:"<img class='a-right control-c next slick-next' src='../traning/js/right-arrow.png'>"
// });

// var current = 0; // current slider dupa refresh
// $('.portfolio-thumb-slider .slick-slide:not(.slick-cloned)').eq(current).addClass('slick-current');
// $('.portfolio-item-slider').on('afterChange', function(event, slick, currentSlide, nextSlide){
//   current = currentSlide;
//   $('.portfolio-thumb-slider .slick-slide').removeClass('slick-current');
//   $('.portfolio-thumb-slider .slick-slide:not(.slick-cloned)').eq(current).addClass('slick-current');
//   var nrCurrentSlide = slick.currentSlide + 1, // din cauza ca e array si incepe de la 0
//       totalSlidesPerPage = nrCurrentSlide + 4; // daca ai 5 thumb-uri pe pagina pui + 4

//   if(totalSlidesPerPage > slick.slideCount) {
//     $('.controls').html(nrCurrentSlide + " - " + slick.slideCount + " of " + slick.slideCount);
//   } else {
//     $('.controls').html(nrCurrentSlide + " - " + totalSlidesPerPage + " of " + slick.slideCount);
//   }

//   console.log(current);
//   console.log(totalSlidesPerPage);

// });



//  $('.slider-for').slick({
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     arrows: false,
//     fade: true,
//     speed: 50,
//      cssEase: 'linear',
//     dots: true,
//     centerMode: true,
//     asNavFor: '.slider-nav'
// });
// $('.slider-nav').slick({
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     asNavFor: '.slider-for',
//     arrows: false,
//     dots: false,
//     centerMode: true,
//     focusOnSelect: true,
//     variableWidth: true,
//     //autoplay: true,
// });

// $('.slick-fade').slick({
//     dots: false,
// 		arrows: false,
// 		autoplay: true,
// 		autoplaySpeed: 2500,
// 		infinite: true,
// 		fade: true,
// 		//speed: 100,
// 		cssEase: 'linear'
// });


//config for animation on scroll

AOS.init({
  duration: 1500,
})



//jury moreinfo btn


$(".more-info").click(function(e){
  //var id= $(this).parent().attr('id');

  var parent =$(this).parent();

  //var id = parent.attr('id');

  var viewmorebtn = parent.find('.more-info');

  var viewlessbtn = parent.find('.less-info') 

  viewmorebtn.addClass('hide');

  viewlessbtn.addClass('appear');

  var juryinfo = parent.find ('.jury-info');

  var jurydesc= juryinfo.find('.jury-desc');

  var jurydescshort= jurydesc.find('.jury-desc-short');

  var jurydescfull= jurydesc.find('.jury-desc-full');
  console.log (juryinfo);

  jurydescshort.addClass('hide');
 
  juryinfo.animate({
      top:"0"
  },1500);
     jurydescfull.addClass('appear');

     
});


$(".less-info").click(function(e){
  //var id= $(this).parent().attr('id');

  var parent =$(this).parent();

  //var id = parent.attr('id');

  var viewmorebtn = parent.find('.more-info');

  var viewlessbtn = parent.find('.less-info') 

  viewmorebtn.removeClass('hide');

  viewlessbtn.removeClass('appear');

  var juryinfo = parent.find ('.jury-info');

  var jurydesc= juryinfo.find('.jury-desc');

  var jurydescshort= jurydesc.find('.jury-desc-short');

  var jurydescfull= jurydesc.find('.jury-desc-full');
  console.log (juryinfo);

  jurydescshort.removeClass('hide');
 
  juryinfo.animate({
      top:"50%"
  },1500);
     jurydescfull.removeClass('appear');

     
});



// hovereffect for 4 things section

$('.four-thing-item').hover(function() {
    //var parent = $(this).parent();
    var pngimg = $(this).find('.png-img');
    var gifimg = $(this).find('.gif-img');
    pngimg.addClass('hide'); 
    gifimg.addClass('appear');
    }, function() {
    //var parent = $(this).parent();
    var pngimg = $(this).find('.png-img');
    var gifimg = $(this).find('.gif-img');
    pngimg.removeClass('hide'); 
    gifimg.removeClass('appear');
});

// hovereffect for winner section


$( ".winner-item" )
  .mouseup(function() {
    $( this ).css('opacity','1');
  })
  .mousedown(function() {
    $( this ).css('opacity','0.5');
  });

$(".begintrain").click(function(e){
  $(".shame-frame").fadeOut("slow");
  //$("#fame-frame").addClass('appear');
});

//hover effect for extra info

$('.mile-item').hover(function() {
    //var parent = $(this).parent();
    var extrainfo = $(this).find('.extra-info');
    extrainfo.addClass('appear');
    }, function() {
    //var parent = $(this).parent();
    var extrainfo = $(this).find('.extra-info');
    extrainfo.removeClass('appear');
});

//hover effect for partner item

$('.partner-item').hover(function() {
    //var parent = $(this).parent();
  
   var partnerpos= $(this).find('.partner-pos');
    partnerpos.addClass('appear');
    }, function() {
    //var parent = $(this).parent();
    var partnerpos= $(this).find('.partner-pos');
    partnerpos.removeClass('appear');
});


$('.youtubeauto').hover(function() {
    //var parent = $(this).parent();
    var normal = $(this).find('.normal');
    var hover = $(this).find('.hover');
    normal.addClass('hide');
    hover.addClass('appear');
    }, function() {
    //var parent = $(this).parent();
     var normal = $(this).find('.normal');
    var hover = $(this).find('.hover');
    normal.removeClass('hide');
    hover.removeClass('appear');
});



 // tabbed content
    $(".tab_content").hide();
    $(".tab_content:first").show();

  /* if in tab mode */
    $("ul.tabs li").click(function() {
		
      $(".tab_content").hide();
      var activeTab = $(this).attr("rel"); 
      $("#"+activeTab).fadeIn();		
		
      $("ul.tabs li").removeClass("active");
      $(this).addClass("active");

	  $(".tab_drawer_heading").removeClass("d_active");
	  $(".tab_drawer_heading[rel^='"+activeTab+"']").addClass("d_active");
	  
    });
	/* if in drawer mode */
	$(".tab_drawer_heading").click(function() {
      
      $(".tab_content").hide();
      var d_activeTab = $(this).attr("rel"); 
      $("#"+d_activeTab).fadeIn();
	  
	  $(".tab_drawer_heading").removeClass("d_active");
      $(this).addClass("d_active");
	  
	  $("ul.tabs li").removeClass("active");
	  $("ul.tabs li[rel^='"+d_activeTab+"']").addClass("active");
    });
	
  
    



//scroll to effect


  
  // on click event on all anchors with a class of scrollTo
$('a.scrollTo').on('click', function(){
  
  // data-scrollTo = section scrolling to name
  var scrollTo = $(this).attr('data-scrollTo');
  
   
  
  // animate and scroll to the sectin 
  $('body, html').animate({
    
    // the magic - scroll to section
    "scrollTop": $('#'+scrollTo).offset().top
  }, 1000 );
  return false;
  
})
 






