
$(document).ready(function(){
	App.init();
})

var App = {
	init : function(){
    this.slider.init("big-slider","main-slider","slide","btnnext","btnprev","dots-nav",500,false,8000,3,1);
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


