$(document).ready(function(){
	//Navigation Scroll
	$('a[href*=\\#]').on('click', function(event){     
	    event.preventDefault();
	    $('html,body').animate({scrollTop:$(this.hash).offset().top}, 500);
	});


	//Animation
	var $animation_elements = $('.animation-element');
	var $window = $(window);

	$.each($animation_elements, function(){
		$element = $(this);
		$element.addClass('not-in-view');
	});

	function check_if_in_view() {
	  var window_height = $window.height();
	  var window_top_position = $window.scrollTop();
	  var window_bottom_position = (window_top_position + window_height);

	  $.each($animation_elements, function() {
	    var $element = $(this);
	    var element_height = $element.outerHeight();
	    var element_top_position = $element.offset().top;
	    var element_bottom_position = (element_top_position + element_height);

	    //check to see if this current container is within viewport
	    if ((element_bottom_position >= window_top_position) &&
	      (element_top_position <= window_bottom_position)) {
	      $element.addClass('in-view');
	  	  $element.removeClass('not-in-view');
	    } else {
	      $element.removeClass('in-view');
	      $element.addClass('not-in-view');
	    }
	  });
	}

	$window.on('scroll resize', check_if_in_view);
	$window.trigger('scroll');


	//Form
	$("#mailingListForm").submit(function(e){
		e.preventDefault();

		$.ajax({
	        type: "POST",
	        url: "https://ancient-taiga-59857.herokuapp.com/add-email",
	        data: $("#mailingListForm").serialize(),
	        success: function(result){
	            console.log(result);
	        }
	    });

		$('.result').removeClass('hidden');
	    $('#mailingListForm').addClass('hidden');
	    $(".mailingListInput").val("");
	});
});