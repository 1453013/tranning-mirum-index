
$(document).ready(function(){
	App.init();
})

var App = {
	init : function(){
    this.slider.init("big-slider","main-slider","slide","btnnext","btnprev","dots-nav",500,false,8000,3,1);
    this.jurymorinfobtn.init();
    this.winneritemmousehold.init();
    this.begintrainingbtn.init();
    this.archivetabbedtable.init();
    this.scrollto.init();
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
  btnnext:{},
  btnprev:{},
  curslide: 1,
  maxslide: 3,
  _speed:100,
  _autospeed: 5000,
  _auto: false,
     init: function (_slider,_main_slider,_slideitem,_btnnext,_btnprev,_dotsnav,_speed,_auto,_autospeed,totalslide,firstslide) {
        var self = this;
        self._this = $('.'+_slider);
        self.main= self._this.find('.'+_main_slider);
        self.slide= self.main.find('.'+_slideitem);
        self.btnnext= self._this.find('.'+_btnnext);
        self.btnprev= self._this.find('.'+_btnprev);
        self.dotsnav=self._this.find('.'+_dotsnav);
        self.ol= self.dotsnav.find('ol');
        self.li=self.ol.find('li');
        self._speed=_speed;
        self._autospeed=_autospeed;
        self._auto=_auto;
        

        $(self.slide).first().addClass('activeslide');
	
        $(self.slide).hide();

        $('.activeslide').show();
        
        self.btnnext.on('click',self.nextSlide);
        self.btnprev.on('click',self.prevSlide);
        self.li.on('click',self.toDotsNav);


        if (_auto == true){
          setInterval (self.nextSlide,_autospeed);
        }

          
        $(self.btnnext).hover(function() {
              $( this ).css('opacity','0.2');
        }, function() {
              $( this ).css('opacity','0');
        });

        $(self.btnprev).hover(function() {
              $( this ).css('opacity','0.2');
        }, function() {
              $( this ).css('opacity','0');
        });  

        },



        nextSlide:function(){
          var self= App.slider;
          self.li.removeClass("active");
          $('.activeslide').removeClass('activeslide').addClass('oldActive');
          if($('.oldActive').is(':last-child')){
                  $(self.slide).first().addClass('activeslide');
                  self.curslide =  1;
                  self.li.eq(self.curslide-1).addClass("active");
          }
          else {
                  $('.oldActive').next().addClass('activeslide');
                  self.curslide = self.curslide + 1;
                  self.li.eq(self.curslide-1).addClass("active");
            }
          $('.oldActive').removeClass('oldActive');
          $(self.slide).fadeOut(self._speed);
          $('.activeslide').fadeIn(self._speed);
        },

        prevSlide:function(){
          var self= App.slider;
          self.li.removeClass("active");

          $('.activeslide').removeClass('activeslide').addClass('oldActive');
          if($('.oldActive').is(':first-child')){
                  $(self.slide).last().addClass('activeslide');
                  self.curslide =  self.maxslide;
                  self.li.eq(self.curslide-1).addClass("active");
          }
          else {
                  $('.oldActive').prev().addClass('activeslide');
                  self.curslide = self.curslide - 1;
                  self.li.eq(self.curslide-1).addClass("active");
          }
          $('.oldActive').removeClass('oldActive');
          $(self.slide).fadeOut(self._speed);
          $('.activeslide').fadeIn(self._speed);
        },
        
        toDotsNav: function (){
          var self= App.slider;
            var index = $(this).index() + 1;
            self.curslide = index;
            self.li.removeClass("active");
            self.li.eq(index-1).addClass("active");
            //$("#dots_"+ index).addClass("active");
            $('.activeslide').fadeOut(self._speed);
            self.slide.eq(index-1).fadeIn(self._speed);   
            //$("#slide_" + index).fadeIn(500);        
            $(".slide").removeClass("activeslide");
            self.slide.eq(index-1).addClass("activeslide");
            //$("#slide_" + index).addClass("activeslide");
        }
}


App.jurymorinfobtn = {
  _target: {},
  _target1:{},
  init: function(){
    this._target=$('.more-info');
    this._target1=$('.less-info');


    this._target.on('click',function(){

      var parent =$(this).parent();

      var viewmorebtn = parent.find('.more-info');

      var viewlessbtn = parent.find('.less-info') 

      viewmorebtn.addClass('hide');

      viewlessbtn.addClass('appear');

      var juryinfo = parent.find ('.jury-info');

      var jurydesc= juryinfo.find('.jury-desc');

      var jurydescshort= jurydesc.find('.jury-desc-short');

      var jurydescfull= jurydesc.find('.jury-desc-full');

      jurydescshort.addClass('hide');
    
      juryinfo.animate({
          top:"0"
      },1500);
        jurydescfull.addClass('appear');
    })

    this._target1.on('click',function(){

        var parent =$(this).parent();

        var viewmorebtn = parent.find('.more-info');

        var viewlessbtn = parent.find('.less-info') 

        viewmorebtn.removeClass('hide');

        viewlessbtn.removeClass('appear');

        var juryinfo = parent.find ('.jury-info');

        var jurydesc= juryinfo.find('.jury-desc');

        var jurydescshort= jurydesc.find('.jury-desc-short');

        var jurydescfull= jurydesc.find('.jury-desc-full');

        jurydescshort.removeClass('hide');
      
        juryinfo.animate({
            top:"50%"
        },1500);
          jurydescfull.removeClass('appear');

    })

  }
}


App.winneritemmousehold = {
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

App.begintrainingbtn = {
  _target:{},
  init:function(){
    this._target=$('.begintrain');
    this._target.on('click',function(){
      $(".shame-frame").fadeOut("slow");
    })
  }
}








App.scrollto = {
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

App.archivetabbedtable = {
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

