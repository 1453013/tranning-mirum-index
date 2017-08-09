
$(document).ready(function(){
	App.init();
})

var App = {
	init : function(){
    this.slider.init("big-slider","main-slider","slide","btnnext","btnprev","dots-nav",500,false,8000,3,1);
    this.juryMoreInfoButton.init();
    this.winnerItemMouseHold.init();
    this.beginTrainingButton.init();
    this.archiveTabbedTable.init();
    this.scrollTo.init();
    jQuery(function(){
			jQuery("a.youtubedefault").YouTubePopUp();
			jQuery("a.youtubeauto").YouTubePopUp( { autoplay: 1 } ); 
    });
	}
}

App.slider = {
  _this: {},
  main:{},
  slide:{},
  btnNext:{},
  btnPrev:{},
  curSlide: 1,
  maxSlide: 3,
  _speed:100,
  _autoSpeed: 5000,
  _auto: false,
     init: function (_slider,_mainSlider,_slideItem,_btnNext,_btnPrev,_dotsNav,_speed,_auto,_autoSpeed,totalslide,firstslide) {
        var self = this;
        self._this = $('.'+_slider);
        self.main= self._this.find('.'+_mainSlider);
        self.slide= self.main.find('.'+_slideItem);
        self.btnNext= self._this.find('.'+_btnNext);
        self.btnPrev= self._this.find('.'+_btnPrev);
        self.dotsNav=self._this.find('.'+_dotsNav);
        self.ol= self.dotsNav.find('ol');
        self.li=self.ol.find('li');
        self._speed=_speed;
        self._autoSpeed=_autoSpeed;
        self._auto=_auto;
        

        $(self.slide).first().addClass('activeSlide');
	
        $(self.slide).hide();

        $('.activeSlide').show();
        
        self.btnNext.on('click',self.nextSlide);
        self.btnPrev.on('click',self.prevSlide);
        self.li.on('click',self.toDotsNav);


        if (_auto == true){
          setInterval (self.nextSlide,_autospeed);
        }
        },

        nextSlide:function(){
          var self= App.slider;
          self.li.removeClass("active");
          $('.activeSlide').removeClass('activeSlide').addClass('oldActive');
          if($('.oldActive').is(':last-child')){
                  $(self.slide).first().addClass('activeSlide');
                  self.curSlide =  1;
                  self.li.eq(self.curSlide-1).addClass("active");
          }
          else {
                  $('.oldActive').next().addClass('activeSlide');
                  self.curSlide = self.curSlide + 1;
                  self.li.eq(self.curslide-1).addClass("active");
            }
          $('.oldActive').removeClass('oldActive');
          $(self.slide).fadeOut(self._speed);
          $('.activeSlide').fadeIn(self._speed);
        },

        prevSlide:function(){
          var self= App.slider;
          self.li.removeClass("active");

          $('.activeSlide').removeClass('activeSlide').addClass('oldActive');
          if($('.oldActive').is(':first-child')){
                  $(self.slide).last().addClass('activeSlide');
                  self.curSlide =  self.maxSlide;
                  self.li.eq(self.curslide-1).addClass("active");
          }
          else {
                  $('.oldActive').prev().addClass('activeSlide');
                  self.curSlide = self.curSlide - 1;
                  self.li.eq(self.curslide-1).addClass("active");
          }
          $('.oldActive').removeClass('oldActive');
          $(self.slide).fadeOut(self._speed);
          $('.activeSlide').fadeIn(self._speed);
        },
        
        toDotsNav: function (){
          var self= App.slider;
            var index = $(this).index() + 1;
            self.curSlide = index;
            self.li.removeClass("active");
            self.li.eq(index-1).addClass("active");
            //$("#dots_"+ index).addClass("active");
            $('.activeSlide').fadeOut(self._speed);
            self.slide.eq(index-1).fadeIn(self._speed);   
            //$("#slide_" + index).fadeIn(500);        
            $(".slide").removeClass("activeSlide");
            self.slide.eq(index-1).addClass("activeSlide");
            //$("#slide_" + index).addClass("activeslide");
        }
}


App.juryMoreInfoButton = {
  _target: {},
  _target1:{},
  self: {},
  init: function(){
    this._target=$('.more-info');
    this._target1=$('.less-info');

    var parent = $(this) ;
    

    this._target.on('click',function(){

      parent =$(this).parent();

      var viewmorebtn = parent.find('.more-info');
      var viewlessbtn = parent.find('.less-info'); 
      viewmorebtn.addClass('hide');

      viewlessbtn.addClass('appear');

      var juryinfo = parent.find ('.jury-info');

      var jurydescshort= juryinfo.find('.jury-desc').find('.jury-desc-short');

      var jurydescfull= juryinfo.find('.jury-desc').find('.jury-desc-full');

      jurydescshort.addClass('hide');
    
      juryinfo.animate({
          top:"0"
      },1500);
        jurydescfull.addClass('appear');
    })

    this._target1.on('click',function(){

        parent =$(this).parent();
        var viewmorebtn = parent.find('.more-info');
        var viewlessbtn = parent.find('.less-info'); 
        viewmorebtn.removeClass('hide');

        viewlessbtn.removeClass('appear');

        var juryinfo = parent.find ('.jury-info');

        var jurydescshort= juryinfo.find('.jury-desc').find('.jury-desc-short');

        var jurydescfull= juryinfo.find('.jury-desc').find('.jury-desc-full');

        jurydescshort.removeClass('hide');
      
        juryinfo.animate({
            top:"50%"
        },1500);
          jurydescfull.removeClass('appear');

    })
  }
}


App.winnerItemMouseHold = {
  _target:{},
  init:function(){
    this._target=$('.winner-item');
    this._target.mouseup(function(){
      $( this ).css('opacity','1');
    })
    .mousedown(function(){
      $( this ).css('opacity','0.5');
    })
  }
}

App.beginTrainingButton = {
  _target:{},
  init:function(){
    this._target=$('.begintrain');
    this._target.on('click',function(){
      $(".shame-frame").fadeOut("slow");
    })
  }
}

App.scrollTo = {
  _target: {},
  init: function() {
    this._target = $('a.scrollTo');

    this._target.on('click', function() {

      var scrollTo = $(this).attr('data-scrollTo');

      $("body, html").animate({ 
        scrollTop: $('#'+scrollTo).offset().top
      }, 800);
      return false;
    })
  }
}

App.archiveTabbedTable = {
   _target: {},
   init:function(){
     this.target= $('.tab_content');
     this.target.hide();
     this.target.first().show();
     $("ul.tabs li").click(function() {
		
      $(".tab_content").hide();
      var activeTab = $(this).attr("rel"); 
      $("#"+activeTab).fadeIn();		
		
      $("ul.tabs li").removeClass("active");
      $(this).addClass("active");

	  $(".tab_drawer_heading").removeClass("d_active");
	  $(".tab_drawer_heading[rel^='"+activeTab+"']").addClass("d_active");
	  
    });
   }
}

/*****************************************/
//animate on scroll

var $animation_elements = $('.animation-element');
var $window = $(window);

function check_if_in_view() {
  var window_height = $window.height();
  var window_top_position = $window.scrollTop();
  var window_bottom_position = (window_top_position + window_height);
 
  $.each($animation_elements, function() {
    var $element = $(this);
    var element_height = $element.outerHeight();
    var element_top_position = $element.offset().top;
    var element_bottom_position = (element_top_position + element_height);
 
    //check to see if this current container is within viewport
    if ((element_bottom_position >= window_top_position) &&
        (element_top_position <= window_bottom_position)) {
      $element.addClass('in-view');
    } else {
      $element.removeClass('in-view');
    }
  });
}

$window.on('scroll resize', check_if_in_view);
$window.trigger('scroll');


/*****************************************/

