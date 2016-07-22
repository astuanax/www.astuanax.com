// main object, keep variable out of global namespace.
var a = a || {};

requirejs.config({
    paths: {
        googlemaps: '/homearound/js/bower_components/googlemaps-amd/src/googlemaps',
        async: '/homearound/js/bower_components/requirejs-plugins/src/async',
        'jquery': ['//ajax.googleapis.com/ajax/libs/jquery/2.0.3/jquery.min'],
        'bootstrap': ['//netdna.bootstrapcdn.com/bootstrap/3.0.2/js/bootstrap.min'],
        'webfont' : ['//ajax.googleapis.com/ajax/libs/webfont/1.6.16/webfont'],
        'slick' : ['/homearound/js/bower_components/slick-carousel/slick/slick.min'],
        'chosen' : ['/homearound/js/bower_components/chosen/chosen.jquery'],
        'bootstrapdatepicker' : ['/homearound/js/bower_components/bootstrap-datepicker/dist/js/bootstrap-datepicker.min'],
        'bootstrapslider': ['/homearound/js/bower_components/seiyria-bootstrap-slider/dist/bootstrap-slider.min'],
        'gmaps' : ['/homearound/js/bower_components/gmaps/gmaps.min'],
    },
    shim: {
        /* Set bootstrap dependencies (just jQuery) */
        bootstrap : ['jquery'],
        chosen : ['jquery'],
        gmaps: {
              deps: ["googlemaps"],
              exports: "GMaps"
            }
    }
});



var w = window,
    d = document,
    e = d.documentElement,
    g = d.getElementsByTagName('body')[0],
    x = w.innerWidth || e.clientWidth || g.clientWidth,
    y = w.innerHeight|| e.clientHeight|| g.clientHeight;

if (x < 600){
/*require*/
    require(['webfont', 'jquery', 'bootstrap', 'slick', 'chosen', 'bootstrapslider','googlemaps!', 'gmaps'], function(webfont, jquery, bootstrap, slick, chosen, bootstrapslider, googlemaps, GMaps){
        webfont.load({
           google: {
             families: ['Open Sans','Cinzel',]
           }
         });
     
         $(document).ready(function(){
            $('.ha-carousel').on('init', function(){
               $('.slick-current p').removeClass('invisible').addClass('animated fadeInUp');
               $('.slick-current h1').removeClass('invisible').addClass('animated fadeInDown');
           })
           $('.ha-carousel').slick({
               dots: false,
               infinite: true,
               speed: 600,
               // cssEase: 'cubic-bezier(0.830, -0.040, 0.310, 1.355',
               useTransform: true,
               autoplay: true,
               autoplaySpeed: 3500,
               fade: true,
           }).on('afterChange', function(event, slick, currentSlide, nextSlide){
               $('.slick-current p').removeClass('invisible').addClass('animated fadeInUp');
               $('.slick-current h1').removeClass('invisible').addClass('animated fadeInDown');
              console.log($('.slick-current p'));
           }).on('beforeChange', function(event, slick, currentSlide, nextSlide){
               $('.slick-current p').addClass('invisible').removeClass('animated fadeInUp');
               $('.slick-current h1').addClass('invisible').removeClass('animated fadeInDown');
           })
         });         
         $('select').chosen();
         $('.daterange').find('.actual_range').attr('type', 'date');
         
         map = new GMaps({
                 div: '#gmap',
                 lat: -8.679680,
                 lng: 115.170058,
                 scrollwheel:  false
               });
               map.addMarker({
                     lat: -8.679680,
                     lng: 115.170058,
                      icon: "/homearound/img/ha-marker.png"
               });
         
         
    });
/*require*/
}
else{

/*require*/
    require(['webfont', 'jquery', 'bootstrap', 'slick', 'chosen', 'bootstrapdatepicker', 'bootstrapslider', 'googlemaps!', 'gmaps'], function(webfont, jquery, bootstrap, slick, chosen, bootstrapdatepicker, bootstrapslider, googlemaps, GMaps){
        webfont.load({
           google: {
             families: ['Open Sans','Cinzel',]
           }
         });
     
         $(document).ready(function(){
            $('.ha-carousel').on('init', function(){
               $('.slick-current p').removeClass('invisible').addClass('animated fadeInUp');
               $('.slick-current h1').removeClass('invisible').addClass('animated fadeInDown');
           })
           $('.ha-carousel').slick({
               dots: false,
               infinite: true,
               speed: 600,
               // cssEase: 'cubic-bezier(0.830, -0.040, 0.310, 1.355',
               useTransform: true,
               autoplay: true,
               autoplaySpeed: 3500,
               fade: true,
           }).on('afterChange', function(event, slick, currentSlide, nextSlide){
               $('.slick-current p').removeClass('invisible').addClass('animated fadeInUp');
               $('.slick-current h1').removeClass('invisible').addClass('animated fadeInDown');
              console.log($('.slick-current p'));
           }).on('beforeChange', function(event, slick, currentSlide, nextSlide){
               $('.slick-current p').addClass('invisible').removeClass('animated fadeInUp');
               $('.slick-current h1').addClass('invisible').removeClass('animated fadeInDown');
           })
         });
         $('.ha-carousel-review').slick({
             dots: true,
             infinite: true,
             speed: 600,
             cssEase: 'cubic-bezier(0.830, -0.040, 0.310, 1.355',
             useTransform: true,
             autoplay: true,
             prevArrow: false,
             nextArrow: false
         })
         
         $(".nav-tabs").tab();
         
         $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
                      var previous = $(e.relatedTarget).attr("href"); // activated tab
                      console.log(previous)
                      $(previous + " .ha-carousel-property" ).slick('unslick');
             
                      var target = $(e.target).attr("href"); // activated tab
                      console.log($(e.target).attr("href"), $(target +  " .ha-carousel-property"));
                      $(target +  " .ha-carousel-property").slick({
                          dots: true,
                          infinite: true,
                          speed: 600,
                          cssEase: 'linear',
                          useTransform: true,
                          slidesToShow: 3,
                      });
                  })
         
         
   // Cache selectors outside callback for performance. 
     var $window = $(window),
         $stickyEl = $('#ha_panel_form');
         if($stickyEl.length){
             elTop = $stickyEl.offset().top - 64 ;
             $window.scroll(function() {
                  $stickyEl.toggleClass('ha-form-fixed', $window.scrollTop() > elTop);
              });
             
         } 
         
         $('.active .                <div class="col-xs-2 col-sm-4 col-md-2">').slick({
             dots: true,
             infinite: true,
             speed: 600,
             cssEase: 'linear',
             useTransform: true,
             slidesToShow: 3,
         })
         $('.ha-property .ha-carousel-property').slick({
             dots: true,
             infinite: true,
             speed: 600,
             cssEase: 'linear',
             useTransform: true,
             slidesToShow: 3,
             responsive: [
                 {
                   breakpoint: 768,
                   settings: {
                     slidesToShow: 1,
                   }
                 },
                 {
                   breakpoint: 992,
                   settings: {
                     slidesToShow: 2,
                   }
                 },992
             ]
         })
         
         
         $("select").chosen();
     
         $('.daterange').datepicker({
                 keepEmptyValues: true,
                 language : 'fr',
                 format: 'dd.mm.yyyy',
                 immediateUpdates : false,
                 inputs: $('.actual_range'),
                 autoclose : true,
             }).on('changeDate', function(e){
                 that = $(this)
                 from = e.date.getTime()
                 to = e.date.getTime()
             });

         $("#ex2").slider({});

         map = new GMaps({
                 div: '#gmap',
                 lat: -8.679680,
                 lng: 115.170058,
                 scrollwheel:  false
               });
               map.addMarker({
                     lat: -8.679680,
                     lng: 115.170058,
                      icon: "/homearound/img/ha-marker.png"
               });

    });
/*require*/
}


