$(document).ready(function(){

  $('#dropdown').on('click', function() {
      $('.twitter-timeline').slideToggle(1000);
  });

  $('.quote').fadeIn(4000)
  $('nav').fadeIn(4000)
  $('iframe').fadeIn(4000)
  $('footer').fadeIn(4000)

  $('a[href^="#"]').on('click',function (e) {
      e.preventDefault();

      var target = this.hash;
      var $target = $(target);

      $('html, body').stop().animate({
             'scrollTop': $target.offset().top
        }, 1500, 'swing');
  });
});

!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+"://platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");