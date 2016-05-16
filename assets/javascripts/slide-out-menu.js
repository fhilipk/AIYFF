$(document).ready(function () {
    $('.toggle-menu').on('click', function(event){
      console.log("toggle menu clicked");
    	event.preventDefault();
    	// create menu variables
    	var slideoutMenu = $('.slideout-menu');
      var menuIcon = $('#menu-icon');
    	var slideoutMenuWidth = $('.slideout-menu').width();

    	// toggle open class
      // menuIcon.toggleClass("open")
    	slideoutMenu.toggleClass("open");

    	// slide menu
    	if (slideoutMenu.hasClass("open")) {
	    	slideoutMenu.animate({
		    	right: "0px"
	    	});
    	} else {
	    	slideoutMenu.animate({
		    	right: slideoutMenuWidth
	    	}, 250);
    	}
    });
});
