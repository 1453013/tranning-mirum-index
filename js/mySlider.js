// 






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

    function moveLeft() {
        $('.mySlider ul').animate({
            left: + slideWidth
        }, 1000, function () {
            $('.mySlider ul li:last-child').prependTo('.mySlider ul');
            $('.mySlider ul').css('left', '');
        });
    };

    function moveRight() {
        $('.mySlider ul').animate({
            left: - slideWidth
        }, 1000, function () {
            $('.mySlider ul li:first-child').appendTo('.mySlider ul');
            $('.mySlider ul').css('left', '');
        });
    };

    $('.btnprev').click(function () {
        moveLeft();
    });

    $('.btnnext').click(function () {
        moveRight();
    });

});