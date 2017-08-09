var YOSP = {
  init: function() {
    // this.headAnimate.init();
    this.bannerHome.init();
    this.waypoint.init();
    this.inview.init();
    this.fnBtnMenuMb.init();
    this.activeMenu.init();
    this.jury.init();
    this.linktoposition.init();
    this.popup.init();
    this.hoverGif.init();
    this.popupImg.init();

    new tabFn('.group-archive');
    new tabFn('.winner-tab');

    $('.inview-gif').on('inview', function(event, isInView) {
      var url = $(this).data('url');
          loop = $(this).data('loop');

      $(this).find('img').attr('src', url);

      setTimeout(function() {
        $('.inview-gif').find('img').attr('src', loop);
      }, 4600)
    })

    $('.grid').masonry({
      itemSelector: '.grid > *',
      columnWidth: '.grid-sizer',
      percentPosition: true
    });

    $('.slick-slide').slick({
      slidesToShow: 5,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 4000,
      arrows: false,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2
          }
        }
      ]
    })
  },

  winSize: function () {
    WIN_WIDTH = $(window).width();
    WIN_HEIGHT = $(window).height();
  },
}