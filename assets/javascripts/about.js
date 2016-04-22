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
