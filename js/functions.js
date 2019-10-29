
/* --------------------------------------------------------	
	 Flex Initialize
   --------------------------------------------------------	*/	

$(window).load(function() {
  $('.slider1').flexslider({ 
    animation: "slide",
    start: function(slider){
      $('body').removeClass('loading');
    }, 
  });

  $('.slider2').flexslider({
    animation: "slide",
    slideshow: false,
    animationLoop: false    
  });
});

