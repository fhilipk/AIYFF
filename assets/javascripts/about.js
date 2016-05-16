$( document ).ready(function() {
  console.log('ready!');


  // open and close patron list with animation
  $('#patrons-header').on('click', function(event) {
    console.log("toggle clicked");
  	// event.preventDefault();

  	// create menu variables
  	var patronsMenu = $('#list-of-patrons');
    var patronArrow = $('.patron-arrow');

  	// toggle open class
  	patronsMenu.toggleClass("closed");
  	patronArrow.toggleClass("closed");

// slide transition NOT WORKING!!!!!!!!!!
    // $('#patrons-header').click(function(){
    //   console.log("Slide aniamation started");
    //   $("#list-of-patrons").slideToggle("slow");
    // });

  });



  // open and close board list with animation
  $('#board-header').on('click', function(event) {
      console.log("toggle clicked");
    	// event.preventDefault();

    	// create menu variables
    	var boardMenu = $('#list-of-board');
      var boardArrow = $('.board-arrow');

    	// toggle open class
      boardMenu.toggleClass("opened");
    	boardArrow.toggleClass("opened");
    	boardMenu.toggleClass("closed");
    	boardArrow.toggleClass("closed");
    });

// slide transition NOT WORKING!!!!!!!!!!
      // $('#board-header').click(function(){
      //   console.log("Slide aniamation started");
      //   $("#list-of-board").fadeIn("slow");
      //   $('#board-header').click(function(){
      //     $("#list-of-board").fadeOut("slow");
      //   });
      // });

});

// board hover text-decoration

//$(window).load wait until the images are loaded
$(window).load(function(){
  var mediaquery = window.matchMedia( "(min-width: 980px)" );
    if (mediaquery.matches) {

    //for each description div...
    $('div.description').each(function(){
        //...set the opacity to 0...
        $(this).css('opacity', 0);
        //..set width same as the image...
        // $(this).css('width', $(this).siblings('img').width());
        //..set width to 185px...
        $(this).css('width', 185);
        //...get the parent (the wrapper) and set it's width same as the image width... '
        $(this).parent().css('width', $(this).siblings('img').width());
        //...set the display to block
        $(this).css('display', 'block');
    });

    $('div.wrapper').hover(function(){
        //when mouse hover over the wrapper div
        //get it's children elements with class description '
        //and show it using fadeTo
        $(this).children('.description').stop().fadeTo(500, 0.7);
    },function(){
        //when mouse out of the wrapper div
        //use fadeTo to hide the div
        $(this).children('.description').stop().fadeTo(500, 0);
    });
  }

  else {
    $('div.wrapper').each(function(){
      $(this).css('display', 'flex');
    });
  }

});
