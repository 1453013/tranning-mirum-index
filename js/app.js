
$(document).ready(function(){
	App.init();
})

var App = {
	init : function(){
    this.slider.init("big-slider","main-slider","slide","btnnext","btnprev",500,false,8000,3,1);
    this.juryMoreInfoButton.init();
    this.winnerItemMouseHold.init();
    this.beginTrainingButton.init();
    this.archiveTabbedTable.init();
    this.scrollTo.init();
    this.youTuBePopUp.init(1);
    //_slider,_btnNext,_btnPrev,_speed,_auto,_autoSpeed,totalslider,loop
    this.sliderarchive.init("archive-item-container-mobile","btnnextmarchive","btnprevmarchive",1000,false,1000,4,true);
    this.slidermilestone.init("mile-stone-line-mobile","btnnextm","btnprevm","btnmoreinfo",1000,false,1000,6,false);
    //1 =  autoplay, 0 = none;
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
     init: function (_slider,_mainSlider,_slideItem,_btnNext,_btnPrev,_speed,_auto,_autoSpeed,totalslide,firstslide) {
        var self = this;
        self._this = $('.'+_slider);
        self.main= self._this.find('.'+_mainSlider);
        self.slide= self.main.find('.'+_slideItem);
        self.btnNext= self._this.find('.'+_btnNext);
        self.btnPrev= self._this.find('.'+_btnPrev);
        self.dotsNav=self._this.find('ol');
        self.li=self.dotsNav.find('li');
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
          console.log(self);
          self.li.removeClass("active");
          $('.activeSlide').removeClass('activeSlide').addClass('oldActive');
          if($('.oldActive').is(':last-child')){
                  $(self.slide).first().addClass('activeSlide');
                  self.curSlide =  1;
                  
          }
          else {
                  $('.oldActive').next().addClass('activeSlide');
                  self.curSlide = self.curSlide + 1;
            }
          self.li.eq(self.curSlide-1).addClass("active");
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
          }
          else {
                  $('.oldActive').prev().addClass('activeSlide');
                  self.curSlide = self.curSlide - 1;
          }
          self.li.eq(self.curSlide-1).addClass("active");
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


// App.juryMoreInfoButton = {
//   _plusbutton: {},
//   _minusbutton:{},
//   self: {},
//   init: function(){
//     this._plusbutton=$('.more-info');
//     this._minusbutton=$('.less-info');

//     var parent;
//     var viewMoreBtn;
//     var viewLessBtn;
//     var juryInfo;
//     var juryDescShort;
//     var juryDescFull;


//     this._plusbutton.on('click',function(){

//       parent =$(this).parent();

//       viewMoreBtn = parent.find('.more-info');
//       viewLessBtn = parent.find('.less-info'); 

//       viewMoreBtn.addClass('hide');

//       viewLessBtn.addClass('appear');

//       juryInfo = parent.find ('.jury-info');

//       juryDescShort= juryInfo.find('.jury-desc').find('.jury-desc-short');

//       juryDescFull= juryInfo.find('.jury-desc').find('.jury-desc-full');

//       juryDescShort.addClass('hide');
    
//       juryInfo.animate({
//           top:"0"
//       },1500);
//         juryDescFull.addClass('appear');
//     })

//     this._minusbutton.on('click',function(){

//         parent =$(this).parent();
//         viewMoreBtn = parent.find('.more-info');
//         viewLessBtn = parent.find('.less-info'); 
//         viewMoreBtn.removeClass('hide');

//         viewLessBtn.removeClass('appear');

//         juryInfo = parent.find ('.jury-info');

//         juryDescShort= juryInfo.find('.jury-desc').find('.jury-desc-short');

//         juryDescFull= juryInfo.find('.jury-desc').find('.jury-desc-full');

//         juryDescShort.removeClass('hide');
      
//         juryInfo.animate({
//             top:"50%"
//         },1500);
//           juryDescFull.removeClass('appear');

//     })
//   }
// }



App.juryMoreInfoButton = {
    init: function(){


      var viewMoreBtn;
      var viewLessBtn;
      var juryInfo;
      var juryDescShort;
      var juryDescFull;

      $(".jury-item").hover(
      function() {
        viewMoreBtn = $(this).find('.more-info');
        viewLessBtn = $(this).find('.less-info'); 
        viewMoreBtn.addClass('hide');
        viewLessBtn.addClass('appear');
        juryInfo = $(this).find ('.jury-info');
        juryDescShort= juryInfo.find('.jury-desc').find('.jury-desc-short');
        juryDescFull= juryInfo.find('.jury-desc').find('.jury-desc-full');
        //juryDescShort.addClass('hide');  
           
        juryInfo.animate({
            top:"0",
            height:"100%",
        },1500);
          //juryDescFull.addClass('appear');

          juryDescFull.fadeIn(1500, function() {
          juryDescFull.addClass('show');
        });




      }, 
      function() {
        viewMoreBtn = $(this).find('.more-info');
        viewLessBtn = $(this).find('.less-info'); 
        viewMoreBtn.removeClass('hide');

        viewLessBtn.removeClass('appear');

        juryInfo = $(this).find ('.jury-info');

        juryDescShort= juryInfo.find('.jury-desc').find('.jury-desc-short');

        juryDescFull= juryInfo.find('.jury-desc').find('.jury-desc-full');

        juryInfo.animate({
            top:"50%",
            height:"320px",
        },1500);

        juryDescFull.fadeOut(1500, function() {
          juryDescFull.addClass('hide');
        });
      }
);


    }
}

App.winnerItemMouseHold = {
  init:function(){
    $('.winner-item').mouseup(function(){
      $( this ).css('opacity','1');
    })
    .mousedown(function(){
      $( this ).css('opacity','0.5');
    })
  }
}

App.beginTrainingButton = {
  init:function(){
    $('.begintrain').on('click',function(){
      $(".shame-frame").fadeOut("slow");
    })
  }
}

App.scrollTo = {
  init: function() {
    $('a.scrollTo').on('click', function() {
      var scrollTo = $(this).attr('data-scrollTo');
      if ($(window).width()<900) {
        scrollTo = scrollTo + "-mobile";
      }
      $("body, html").animate({ 
        scrollTop: $('#'+scrollTo).offset().top - 50
      }, 800);
      return false;
    })
  }
}

App.archiveTabbedTable = {
   init:function(){
     $('.tab_content').hide();
     $('.tab_content').first().show();
     $("ul.tabs li").click(function() {
		
      $(".tab_content").hide();
      var activeTab = $(this).attr("data-rel"); 
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


App.youTuBePopUp = {
  init:function(_state){
    $("a.youtubepopup").on('click',function(){
    var link= $(this).attr('data-youtube');
    $("body").append(
      $('<div/>',{'class':'popup_overlay'}).append (
        $('<div/>',{'class':'popup'}).append (
          $("<a />", {
            href: "#",
            "class": "popup_close",
          }),
          $("<iframe/>",{
            src: link + "?autoplay=" + _state,
            frameborder: 0,
            //allowfullscreen:0,
          })
      )
    ));
      $("a.popup_close").on('click',function(){
      $(".popup_overlay").remove();
    });
  })
  $(document).mouseup(function(e) 
  {
    var container = $(".popup");
    if (!container.is(e.target) && container.has(e.target).length === 0) 
    {
        $(".popup_overlay").remove();
    }
  })
  },
    toggleVideo:function(){
      var div = document.getElementById("popupVid");
      var iframe = div.getElementsByTagName("iframe")[0].contentWindow;
      //div.style.display = state == 'hide' ? 'none' : '';
      func = state == 'hide' ? 'pauseVideo' : 'playVideo';
      iframe.postMessage('{"event":"command","func":"' + func + '","args":""}', '*');
    },   
}



App.sliderarchive = {
  _this: {},
  _speed:100,
  _autoSpeed: 5000,
  _auto: false,
  init: function (_slider,_btnNext,_btnPrev,_speed,_auto,_autoSpeed,totalslider,loop){
    var self = this;
    self._this= $('.'+_slider);
    self.ul=self._this.find('ul');
    self.li = self._this.find('li');
    self.btnNext=self._this.find('.'+_btnNext);
    self.btnPrev= self._this.find('.'+_btnPrev);
    self._speed=_speed;
    self._autoSpeed=_autoSpeed;
    self._auto=_auto;
    self._slider = _slider;
    var slideCount = self.li .length;
    var slideWidth = window.innerWidth || document.body.clientWidth;
    var slideHeight = self.li.height();
    var sliderUlWidth = slideCount * slideWidth;
    self.slideWidth = slideWidth;
    self._this.css({ width: slideWidth, height: slideHeight });
    self.ul.css({ width: sliderUlWidth, marginLeft: - slideWidth });
    $('.'+self._slider+ ' ul li:last-child').prependTo(self.ul);


    self.btnPrev.on('click',self.moveLeft);
    self.btnNext.on('click',self.moveRight);
    
    if(_auto == true){
      setInterval(self.moveRight,_autoSpeed);
    }

  },
  moveLeft:function(){
      var self=App.sliderarchive;
      self.ul.animate({
          left: + self.slideWidth
        }, self._speed, function () {
          $('.'+self._slider+ ' ul li:last-child').prependTo(self.ul);
          self.ul.css('left','');
      });
    },
  
  moveRight:function(){
      var self=App.sliderarchive;
      self.ul.animate({
          left: - self.slideWidth
        }, self._speed, function () {
          $('.'+self._slider+' ul li:first-child').appendTo(self.ul);
          self.ul.css('left','');
          
      });
    },
    
  }

App.slidermilestone = {
  _this: {},
  _speed:100,
  _autoSpeed: 5000,
  _auto: false,
  curSlide:0,
  _maxSlide:99,
  init: function (_slider,_btnNext,_btnPrev,_btnMore,_speed,_auto,_autoSpeed,totalslide,loop){
  var self = this;
    self._this= $('.'+_slider);
    self.ul=self._this.find('ul');
    self.li = self._this.find('li');
    self.btnNext=self._this.find('.'+_btnNext);
    self.btnPrev= self._this.find('.'+_btnPrev);
    self.btnMore = self._this.find('.'+_btnMore);
    self._speed=_speed;
    self._autoSpeed=_autoSpeed;
    self._auto=_auto;
    self._slider = _slider;
    var slideCount = self.li .length;
    var slideWidth = window.innerWidth || document.body.clientWidth;
    var slideHeight = self.li.height();
    var sliderUlWidth = slideCount * slideWidth;
    self.slideWidth = slideWidth;
    self._this.css({ width: slideWidth, height: slideHeight });
    self.ul.css({ width: sliderUlWidth, marginLeft: - slideWidth });
    $('.'+self._slider+ ' ul li:last-child').prependTo(self.ul);
    self.maxSlide = totalslide - 1;
    self.btnPrev.css({'opacity':'0.5', 'pointer-events':'none'});
    //self.curSlide = _curSlide;
    
    $('.extra-info').hide();

    self.btnNext.on('click',self.moveRight);
    self.btnPrev.on('click',self.moveLeft);
    // self.btnMore.click(function(){
		// if ($(".extra-info").hasClass('appear')){
		// 		self.btnMore.css('opacity','0.6');
		// 		self.hideextrainfo;
		// 	}
		// 	else {
		// 		self.btnMore.css('opacity','1.0');
		// 		self.showextrainfo;
		// 	} 
    // });
    self.btnMore.on('click',self.moreinfo);
    
  },
  // showextrainfo:function(){
  //     var self=App.slidermilestone;
  //     var curMilediv = self.li.eq(1);
	// 		var extrainfo =  curMilediv.find(".extra-info");
  //     extrainfo.addClass('appear');
  // },
  // hideextrainfo:function(){
  //     var self=App.slidermilestone;
  //     var curMilediv = self.li.eq(1);
	// 		var extrainfo =  curMilediv.find(".extra-info");
	// 		extrainfo.removeClass('appear');
  // },
  // checkcurMile:function(){
  //     var self=App.slidermilestone;
  //     if(self.curSlide == 0) {
  //       self.btnPrev.css({'opacity':'0.5', 'pointer-events':'none'})
  //     }
	// 	  else if(self.curSlide == self.maxSlide) {
	// 			self.btnNext.css({'opacity':'0.5', 'pointer-events':'none'})
  //     }
  //     else {
  //       self.btnNext.css({'opacity':'1', 'pointer-events':'auto'})
  //       self.btnPrev.css({'opacity':'1', 'pointer-events':'auto'})
  //     }
  // },
  moveLeft:function(){
        var self=App.slidermilestone;

        function showextrainfo(){
          var curMilediv = $('.'+self._slider+ ' ul li').eq(1);
			    var extrainfo =  curMilediv.find(".extra-info");
          extrainfo.show();
        }
        function hideextrainfo(){
          var curMilediv = $('.'+self._slider+ ' ul li').eq(1);
			    var extrainfo =  curMilediv.find(".extra-info");
			    extrainfo.hide();
        }
        function checkcurMile(){
          if(self.curSlide == 0) {
          self.btnPrev.css({'opacity':'0.5', 'pointer-events':'none'})
        }
        else if(self.curSlide == self.maxSlide) {
          self.btnNext.css({'opacity':'0.5', 'pointer-events':'none'})
        }
        else {
          self.btnNext.css({'opacity':'1', 'pointer-events':'auto'})
          self.btnPrev.css({'opacity':'1', 'pointer-events':'auto'})
          }
        }


        self.curSlide = self.curSlide -1 ;
        console.log(self.curSlide,self.maxSlide);
				hideextrainfo();
				checkcurMile();
				self.btnMore.css('opacity','0.7');
        self.ul.animate({
            left: + self.slideWidth
        }, 1000, function () {
            $('.'+self._slider+' ul li:last-child').prependTo(self.ul);
						self.ul.css('left', '');
						
        });
        console.log(self.curSlide);
    },
  moveRight:function(){

        var self=App.slidermilestone;
        //console.log($('.'+self._slider+ ' ul li').eq(1));
        function showextrainfo(){
          var curMilediv = $('.'+self._slider+ ' ul li').eq(1);
			    var extrainfo =  curMilediv.find(".extra-info");
          extrainfo.show();
        }
        function hideextrainfo(){
          var curMilediv = $('.'+self._slider+ ' ul li').eq(1);
			    var extrainfo =  curMilediv.find(".extra-info");
			    extrainfo.hide();
        }
        function checkcurMile(){
          console.log(self.curSlide, self.maxSlide);
          if(self.curSlide == 0) {
          self.btnPrev.css({'opacity':'0.5', 'pointer-events':'none'})
        }
        else if(self.curSlide == self.maxSlide) {
          self.btnNext.css({'opacity':'0.5', 'pointer-events':'none'})
        }
        else {
          self.btnNext.css({'opacity':'1', 'pointer-events':'auto'})
          self.btnPrev.css({'opacity':'1', 'pointer-events':'auto'})
          }
        }
        self.curSlide = self.curSlide + 1;
        checkcurMile();
				self.btnMore.css('opacity','0.7');		
        self.ul.animate({
            left: - self.slideWidth
        }, 1000, function () {
            $('.'+self._slider+' ul li:first-child').appendTo(self.ul);
						self.ul.css('left', '');
        });
        hideextrainfo();
        console.log(self.curSlide);
  },
    moreinfo:function(){
        var self=App.slidermilestone;
        function showextrainfo(){
          var curMilediv = $('.'+self._slider+ ' ul li').eq(1);
			    var extrainfo =  curMilediv.find(".extra-info");
          extrainfo.show();
          console.log("b");
        }
        function hideextrainfo(){
          var curMilediv = $('.'+self._slider+ ' ul li').eq(1);
			    var extrainfo =  curMilediv.find(".extra-info");
			    extrainfo.hide();
        }
        if ($(".extra-info").is(":visible")){
          $('.btnmoreinfo').css('opacity','0.6');
          hideextrainfo();
        }
        else {
          $('.btnmoreinfo').css('opacity','1.0');
          showextrainfo();
        } 
        console.log(self.curSlide);
    }
  
}
    


  










