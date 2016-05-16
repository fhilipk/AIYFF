$( document ).ready(function() {

  var mediaquery = window.matchMedia( "(min-width: 980px)" );
    if (mediaquery.matches) {

    $(".enter").hover(function() {
    // on hover expand enter
      $(this).stop().animate({
        width: "40rem",
      }).css({'z-index':'3'});
    // on hover enter shrink participate
      $(".participate").stop().animate({
        width: "20rem",
      }).css({'z-index':'1'});
    // on stop hover return to normal
    }, function() {
      $(".enter").stop().animate({
        width: "30rem",
      }).css({'z-index':'1'});
      $(".participate").stop().animate({
        width: "30rem",
      }).css({'z-index':'1'});
    });

    $(".participate").hover(function() {
    // on hover expand particiapte
      $(this).stop().animate({
        width: "40rem",
      }).css({'z-index':'3'});
    // on hover participate shrink enter
      $(".enter").stop().animate({
        width: "20rem",
      }).css({'z-index':'1'});
    // on stop hover return to normal
    }, function() {
      $(".participate").stop().animate({
        width: "30rem",
      }).css({'z-index':'1'});
      $(".enter").stop().animate({
        width: "30rem",
      }).css({'z-index':'1'});
    });
  }

  else {
    $('.enter').each(function(){
    });

    $('.participate').each(function(){
    });
  }

})
