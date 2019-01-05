$(document).scroll(function() {
  var w = $(window).width();
  var x = 768;
  var scroll = $(window).scrollTop();
	// 1以上
  if (scroll >= 1 || $(`.navbar-burger`).hasClass('is-active')) {
    $("#navbar").removeClass("topHeader");
    $("#navbar").addClass("scrollHeader");
    $('img[src="./assets/images/babel_logo_white.png"]').attr('src', './assets/images/babel_logo.png');
		// desktop
    if (w > x) {
        $('.navbar-item').css('color', '#4A4A4A');
				$('.navbar').css('border-bottom', '1px solid #9B9B9B');
		// mobile
    } else {
        $('.logo').css('display', 'inline');
				$('.navbar-brand').css('border-bottom', '1px solid #9B9B9B');
    }
	// 0以下
  } else {
    $("#navbar").removeClass("scrollHeader");
    $("#navbar").addClass("topHeader");
    $('img[src="./assets/images/babel_logo.png"]').attr('src', './assets/images/babel_logo_white.png');
		$('.navbar-brand').css('border-bottom', 'none');
		$('.navbar').css('border-bottom', 'none');

		// desktop
    if (w > x) {
		    $('.navbar-item').css('color', 'white');
		// mobile
		} else {
				if ($(`.navbar-burger`).hasClass('is-active')){
					$('.logo').css('display', 'block');
					console.log('test')
				}else{
					$('.logo').css('display', 'none');
				}
    }
  }
});

document.addEventListener('DOMContentLoaded', function() {
  // Get all "navbar-burger" elements
  var $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
  // Check if there are any navbar burgers
  if ($navbarBurgers.length > 0) {
    // Add a click event on each of them
    $navbarBurgers.forEach(function($el) {
      $el.addEventListener('click', function() {
          // Get the target from the "data-target" attribute
          var target = $el.dataset.target;
          var $target = document.getElementById(target);
          // Toggle the class on both the "navbar-burger" and the "navbar-menu"
          $el.classList.toggle('is-active');
          $target.classList.toggle('is-active');
      });
    });
  }
});


$(function() {
  $('a[href^="#"]').click(function() {
		var speed = 400; // ミリ秒
		var href= $(this).attr("href");
		var target = $(href == "#" || href == "" ? 'html' : href);
		var position = target.offset().top;
		// スムーススクロール
		$('body,html').animate({scrollTop:position}, speed, 'swing');
		$(`.navbar-menu`).removeClass('is-active');
		$(`.navbar-burger`).removeClass('is-active');
		return false;
  });

	$('.navbar-burger').on('click', function(e) {
		var scroll = $(window).scrollTop();
		if (scroll <= 0 && $(`.navbar-burger`).hasClass('is-active')){
			$('img[src="./assets/images/babel_logo_white.png"]').attr('src', './assets/images/babel_logo.png');
			$('.logo').css('display', 'block');
			$("#navbar").removeClass("topHeader");
			$("#navbar").addClass("scrollHeader");
		}
	});
});
