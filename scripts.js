$( window ).on ("load",function() {
	
	$.fn.moveIt = function(){
	  var $window = $(window);
	  var instances = [];
  
	  $(this).each(function(){
	    instances.push(new moveItItem($(this)));
	  });
  
	  window.addEventListener('scroll', function(){
	    var scrollTop = $window.scrollTop();
	    instances.forEach(function(inst){
	      inst.update(scrollTop);
	    });
	  }, {passive: true});
	}

	var moveItItem = function(el){
	  this.el = $(el);
	  this.speed = parseInt(this.el.attr('data-scroll-speed'));
	};

	moveItItem.prototype.update = function(scrollTop){
	  this.el.css('transform', 'translateX(' + -(scrollTop / this.speed) + 'px)');
	};

	// Initialization

  if ($(window).width() >= 760){ 
		$(function(){
		  $('[data-scroll-speed]').moveIt();
		});
  }
	
  if ($(window).width() >= 760){ 
	var iconRotate = $('.outro img, .logo img');
	if (iconRotate.length != 0) {
		$(window).scroll(function () {
			var scroll = $(window).scrollTop(),
			maxScroll = $(document).height()-$(window).height();
			iconRotate.css({transform: 'rotate(-' + (180 * scroll/maxScroll) + 'deg)'});
		});
	}
}
	
	
	window.onunload = function () {
	  window.scrollTo(0, 0);
	}

	if ($(window).width() >= 1000){ 
  $(".mod a, .outro a").on('click',function() {
		$('.modal-container').addClass('visible');
    window.setTimeout(function() {
			$('.scrim').addClass('show-scrim');
			$('.modal').addClass('show-modal');
			$('body, html').addClass('fixed');
    }, 100);
	});

  $(".scrim").on('click',function() {
		$('.scrim').removeClass('show-scrim');
		$('.modal').removeClass('show-modal');
		$('body, html').removeClass('fixed');
    window.setTimeout(function() {
			$('.modal-container').removeClass('visible');
    }, 200);
	});
}
	
});