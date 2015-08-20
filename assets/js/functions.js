$( document ).ready(function() {

  $.stellar();

  $(window).scroll(function () {

      var scrollTop = $(window).scrollTop();

      if (scrollTop > 1) {
        $('.header--navbar').addClass('scroll');
      } else {
        $('.header--navbar').removeClass('scroll');
      }

    });

  $('.section--heading').arctext({radius : 2000});

  $(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: (target.offset().top - 58 + "px")
        }, 1000);
        return false;
      }
    }
  });
});

$('.sidebar .toggle').click(function(){

  var screenWidth = $(window).width();

  $('.sidebar').toggleClass("open");

  if (screenWidth < 600) {
  $('.header--navbar--logo').toggle();
}
});

$('.sidebar a').click(function(){
  $('.sidebar').removeClass("open");
});

// ANIMATIONS ON SCROLL


});
