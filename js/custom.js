/*------------------------------------------------------------------
Template Name:  N. agency - Responisve Landing Page for Agency
Version:        1.0
Last update:    12/17/2017
Author:         tabthemes
URL:            http://www.tabthemes.com/
-------------------------------------------------------------------*/

$(function () {
	'use strict';

/*--------------------------------------------------
    Stellar Parallax Animation
---------------------------------------------------*/

  $(window).stellar({
    responsive: true,
    horizontalOffset: 0,
    horizontalScrolling: false
  });


/*--------------------------------------------------
    WOW Effects Animation
---------------------------------------------------*/

  var wow = new WOW({
    boxClass:     'wow',      // animated element css class (default is wow)
    animateClass: 'animated', // animation css class (default is animated)
    offset:       100,          // distance to the element when triggering the animation (default is 0)
    mobile:       false        // trigger animations on mobile devices (true is default)
  });
  wow.init();


/*--------------------------------------------------
    Preloader Page 
---------------------------------------------------*/

  $(window).load(function () {
    $("#preloader").delay(600).fadeOut("slow");
  });


/*--------------------------------------------------
    Menu Features 
---------------------------------------------------*/

  // Sticky Navigation
  
  $(window).scroll(function(){
    if ($(window).scrollTop() > 1 && $('.navbar-toggle').is(":hidden")){
      $('.navigation-overlay, .navigation, .nav-solid').addClass("sticky");
      $('.logo-wrap').addClass("shrink");
    } else {
      $('.navigation-overlay, .navigation, .nav-solid').removeClass("sticky");
      $('.logo-wrap').removeClass("shrink");
    }
  });
  
  // Closes the Responsive Menu on Menu Item Click        
  $('.navbar-collapse ul li a').on('click',function() {
    $(".navbar-collapse").collapse('hide');
  });
  
  // Mobile Menu Resize
  $(".navbar .navbar-collapse").css("max-height", $(window).height() - $(".navbar-header").height() );


/*--------------------------------------------------
    Page Scroll Features 
---------------------------------------------------*/

  smoothScroll.init({
    speed: 2000,
    updateURL: false,
    offset: 70
  });
  

/*--------------------------------------------------
    Owl Carousel Testimonials 
---------------------------------------------------*/

  $("#owl-testimonials").owlCarousel({
    loop:true,
    margin:20,
    nav:true,
    dots: false,
    navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
    autoHeight: true,
    items:1
  });


/*--------------------------------------------------
    Owl Carousel Blog 
---------------------------------------------------*/

  $("#owl-blog").owlCarousel({
    loop:true,
    margin:20,
    nav:true,
    dots: false,
    navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'], 
    responsive:{
        0:{
            items:1
        },
        480:{
            items:2
        },
        768:{
            items:2
        },
        992:{
            items:3
        }
    }
    
  });

/*--------------------------------------------------
    Owl Carousel Clients 
---------------------------------------------------*/

  $("#owl-clients").owlCarousel({
    loop:true,
    margin:20,
    nav:false,
    dots: false,
    autoplay: true,
    autoplayTimeout: 3000,
    responsive:{
        0:{
            items:2
        },
        480:{
            items:3
        },
        768:{
            items:4
        },
        992:{
            items:4
        },
        1170:{
            items:5
        }
    }
  });


/*--------------------------------------------------
    Stat Counter
---------------------------------------------------*/
  $(".stat-item-number").appear(function() {
    var count = $(this);
    count.countTo({
        from: 0,
        to: count.html(),
        speed: 3000,
        refreshInterval: 60,
    });
  });

  

/*--------------------------------------------------
    Magnific Popup
---------------------------------------------------*/       
  $(".lightbox-image").magnificPopup({
      type: 'image',
      gallery: {
          enabled: true
      },
      mainClass: "mfp-fade"

  });

  $(".individual-gallery").magnificPopup({
      type: 'image',
      gallery: {
          enabled: true
      },
      mainClass: "mfp-fade"

  });

  $('.lightbox-video').magnificPopup({
      disableOn: 700,
      type: 'iframe',
      mainClass: 'mfp-fade',
      removalDelay: 160,
      preloader: false,
      fixedContentPos: false
  });


  /*--------------------------------------------------
    Portfolio Isotope 
---------------------------------------------------*/ 

  if ($.fn.isotope && $.fn.imagesLoaded && ($('.portfolio').length > 0)) {

      $('.portfolio-isotope').imagesLoaded(function() {

          $('.iso-button').on("click", function() {
              $('.iso-button').removeClass('iso-active');
              $(this).addClass('iso-active');

              var selector = $(this).attr('data-filter');
              container.isotope({
                  filter: selector
              });

              return false;
          });

          $(window).resize(function() {
              container.isotope({});

          });

          var container = $('.portfolio-isotope');

          container.isotope({
              itemSelector: '.pf-item',
              transitionDuration: '0.6s',
              layoutMode: 'fitRows'

          });

      });
  }


/*--------------------------------------------------
    CountTo Facts 
---------------------------------------------------*/

  $('.countup').appear(function() {
    var count_element =  $(this);
        count_element.countTo({
          from: 0,
          to: parseInt( count_element.text() , 10 ) ,
          speed: 3000
        });
  });


/* ---------------------------------------------
 Height 100%
 --------------------------------------------- */

  $(function () {
      $(".js-height-full").height($(window).height());
      $(".js-height-parent").each(function(){
          $(this).height($(this).parent().first().height());
      });
  });


/*--------------------------------------------------
  Back to Top
---------------------------------------------------*/

  if ($('#back-to-top').length) {
    var scrollTrigger = 100, // px
        backToTop = function() {
            var scrollTop = $(window).scrollTop();
            if (scrollTop > scrollTrigger) {
                $('#back-to-top').addClass('show');
            } else {
                $('#back-to-top').removeClass('show');
            }
        };
    backToTop();
    $(window).on('scroll', function() {
        backToTop();
    });
    $('#back-to-top').on('click', function(e) {
        e.preventDefault();
        $('html,body').animate({
            scrollTop: 0
        }, 700);
    });
  }

  $("[id$=_plan]").each(function(index, value) {
    var select = $(this);
    var plan = select.attr('value');
    var text = 'mailto:'+$('#company_email').html()+'?subject=FMM Website | '+plan+'&body=Hey, I\'m interested in the '+plan+'. (add observations here)';
    select.on('click', function() {
        $(location).prop('href', text);
    });
  });

  $("#ajax-form").on('submit', function() {
      $(location).prop('href', 'mailto:'+$('#company_email').html()+'?subject=FMM Website | Information&body=Hey, my name is '+$('#name').attr('value')+', I\'m from '+$('#company').attr('value')+'. '+$('#message').attr('value'));
  });

  var tpj = jQuery;

  var revapi280;
  tpj(document).ready(function() {
      if (tpj("#rev_slider_280_1").revolution == undefined) {
          revslider_showDoubleJqueryError("#rev_slider_280_1");
      } else {
          revapi280 = tpj("#rev_slider_280_1").show().revolution({
              sliderType: "standard",
              sliderLayout: "fullscreen",
              dottedOverlay: "none",
              delay: 90000,
              navigation: {
                keyboardNavigation:"off",
                keyboard_direction: "horizontal",
                mouseScrollNavigation:"off",
                onHoverStop:"off",
                touch:{
                  touchenabled:"on",
                  swipe_threshold: 75,
                  swipe_min_touches: 1,
                  swipe_direction: "horizontal",
                  drag_block_vertical: false
                }
                ,
                arrows: {
                      style: "uranus",
                      enable: true,
                      hide_onmobile: true,
                      hide_under: 496,
                      hide_onleave: true,
                      hide_delay: 200,
                      hide_delay_mobile: 1200,
                      tmp: '',
                      left: {
                          h_align: "left",
                          v_align: "center",
                          h_offset: 20,
                          v_offset: 0
                      },
                      right: {
                          h_align: "right",
                          v_align: "center",
                          h_offset: 20,
                          v_offset: 0
                      }
                  }
              },
              responsiveLevels: [1200, 991, 767, 480],
              visibilityLevels: [1200, 991, 767, 480],
              gridwidth: [1200, 991, 767, 480],
              gridheight: [868, 768, 960, 720],
              lazyType: "none",
              parallax: {
                type:"mouse+scroll",
                origo:"slidercenter",
                speed:2000,
                levels:[2,3,4,5,6,7,12,16,10,50],
                disable_onmobile:"on"
              },
              shadow: 0,
              spinner: "spinner2",
              autoHeight: "off",
              fullScreenAutoWidth: "off",
              fullScreenAlignForce: "off",
              fullScreenOffsetContainer: "",
              fullScreenOffset: "0",
              disableProgressBar: "on",
              hideThumbsOnMobile: "off",
              hideSliderAtLimit: 0,
              hideCaptionAtLimit: 0,
              hideAllCaptionAtLilmit: 0,
              debugMode: false,
              fallbacks: {
                  simplifyAll: "off",
                  disableFocusListener: false,
              }
          });
      }
  }); /*ready*/

});
