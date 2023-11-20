/*!
 * ScriptName: shared.js
 *
 * FoodConnection
 * http://foodconnection.jp/
 * http://foodconnection.vn/
 *
 */
let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', vh+'px');

$(document).ready(function () {
  $('.slick-auto').on('touchstart', function (e) {
    $(this).slick('slickPlay');
  });
	

});

//var UA = navigator.userAgent;
//		if(navigator.userAgent.match(/Trident\/7\./)) {
//		  $('body').on("mousewheel", function () {
//			  event.preventDefault();
//			  var wd = event.wheelDelta;
//			  var csp = window.pageYOffset;
//			  window.scrollTo(0, csp - wd);
//		  });
//		}


$(document).ready(function () {
  'use strict';
  $('.scroll_box').slideUp(0);
  $('.btn-acc').click(function () {
    if ($(this).hasClass('close')) {
      $(this).next().slideDown(1000);
      $(this).removeClass('close').addClass('open');
    } else {
      $(this).next().slideUp(500);
      $(this).removeClass('open').addClass('close');
    }

  });

	
});


$(function () {
  'use strict';


});




$(function () {
  $('body').removeClass('navOpen');
  $(".hamburger,.brand_ham").click(function () {
    if ($('body').hasClass('navOpen')) {
      $('body').addClass('navClose');
      $('body').removeClass('navOpen');
     // $('body').css('position', 'static');
      //$(window).scrollTop(offsetZ);
      $(".hamburger,.brand_ham").removeClass('is-active');
		
    } else {
      $('body').addClass('navOpen');
      $('body').removeClass('navClose');
    /* offsetZ = window.pageYOffset;
	 
      $('body').css({
        position: 'fixed',
        width: '100%',
        'top': -offsetZ + 'px'
      });
	  */
      $(".hamburger,.brand_ham").addClass('is-active');
      return false;
    }
  });



   $("#navigation  a, .btn-close,#navigation  .tel a,#navigation .soc a,#brandlist_menu a").click(function () {
    $('body').removeClass('navOpen');
    $('body').addClass('navClose');
    $(".hamburger,.brand_ham").removeClass('is-active');
   // $('body').css('position', 'static');
  });
  
  
		
	
$(".btn-copy").click(function () {
    
	$(".btn-copy").addClass('hs-copie')
  });
	

	
});

$(document).ready(function () {

  
  
  $(window).scroll(function () {
  
var TargetPos = $("section").offset().top;
    var ScrollPos = $(window).scrollTop();

    if (ScrollPos > TargetPos) {


      $("body").addClass('has-nav');

    } else {


      $("body").removeClass('has-nav');

    }


  });


});

function objectFitPolyfill() {
  // Internet Explorer 6-11
  var isIE = /*@cc_on!@*/ false || !!document.documentMode;
  // Edge 20+
  var isEdge = !isIE && !!window.StyleMedia;
  if (isIE === true || isEdge === true) {
    $('.object-fit-cover').each(function (index, element) {
      let src = $(element).attr('data-src');
      if (src === undefined) {
        src = $(element).attr('src')
      }
      $(element).css('display', 'none');
      $(element).parent().css({
        'background-image': "url('" + src + "')",
        'background-repear': 'no-repeat',
        'background-size': 'cover',
        'background-position': 'center center'
      });
    });
  }
}
$(document).ready(function () {
  objectFitPolyfill()
})


/*
$(document).ready(function() {
	if($('.nav-fixed[scroll-active]').length && $('.nav-fixed').attr('scroll-active') === "true")
		$(document).on('scroll', onScroll)
	$('.nav-fixed a[href*="#"]').on('click', function(){
		var e = $(this).attr('href')
		var h = $('.nav-fixed').outerHeight()
		var b = $(e).length ? $(e).offset().top : 0
		$('html, body').animate({
			scrollTop: (b + 1 - h)
		}, 500)
	})
});

function onScroll(){
	var scroll = $(window).scrollTop()
	var header = $('.nav-fixed').outerHeight()
	$('.nav-fixed a[href^="#"]').each(function () {
		var el = $(this).attr('href')
		var offset = $(el).length ? $(el).offset().top : 0
		if($(this).find('img').length){
			var _src_ = $(this).find('img').attr("src");
			_src_ = _src_.replace(/^(.*?)_on\.(.*)$/, "$1.$2");
			$(this).find('img').attr("src", _src_)
		}
		if ((scroll + header + 3) >= offset && ($(el).outerHeight() + offset) > (scroll + header)) {
			$('.nav-fixed a[href^="#"]').removeClass('active')
			$(this).addClass('active')
				if($(this).find('img').length){
				$('.nav-fixed a[href^="#"] img').addClass('btn')
				$(this).find('img').removeClass('btn')
				$('.nav-fixed a[href^="#"] img').each(function(){
					var src = $(this).attr('src')
					var newSrc = src.replace('_on', '')
					$(this).attr('src', newSrc)
				})

				$(this).find('img').attr("src").match(/^(.*)(\.{1}.*)/g);
				var newSrc = RegExp.$1 + "_on" + RegExp.$2;

				$(this).find('img').attr("src", newSrc); // update src
			}
			// $(this).find('img').trigger('mouseout').trigger('mouseover')
		}
	})
}
var lastScrollTop = 0;
*/

$(document).ready(function () {
  if ($('.nav-fixedd[scroll-active]').length && $('.nav-fixedd').attr('scroll-active') === "true")
    $(document).on('scroll', onScroll)
  $('.nav-fixedd a[href*="#"]').on('click', function () {
    var e = $(this).attr('href')
    var h = 0
    var b = $(e).length ? $(e).offset().top : 0
    $('html, body').animate({
      scrollTop: (b + 1 - h)
    }, 500)
  })
});

function onScroll() {
  var scroll = $(window).scrollTop()
  var header = $('.nav-fixed').outerHeight()
  $('.nav-fixedd a[href^="#"]').each(function () {
    var el = $(this).attr('href')
    var offset = $(el).length ? $(el).offset().top : 0
    /*if($(this).find('img').length){
			var _src_ = $(this).find('img').attr("src");
			_src_ = _src_.replace(/^(.*?)_on\.(.*)$/, "$1.$2");
			$(this).find('img').attr("src", _src_)
		}
    */
    if ((scroll + header + 3) >= offset && ($(el).outerHeight() + offset) > (scroll + header)) {
      $('.nav-fixedd a[href^="#"]').removeClass('active')
      $(this).addClass('active')
      /*if($(this).find('img').length){
				$('.nav-fixedd a[href^="#"] img').addClass('btn')
				$(this).find('img').removeClass('btn')
				$('.nav-fixedd a[href^="#"] img').each(function(){
					var src = $(this).attr('src')
					var newSrc = src.replace('_on', '')
					$(this).attr('src', newSrc)
				})

				$(this).find('img').attr("src").match(/^(.*)(\.{1}.*)/g);
				var newSrc = RegExp.$1 + "_on" + RegExp.$2;

				$(this).find('img').attr("src", newSrc); // update src
			}
      */
      // $(this).find('img').trigger('mouseout').trigger('mouseover')
    }
  })
}
var lastScrollTop = 0;




//fix scroll ios
var overflowIsHidden = function(node) {
    var style = getComputedStyle(node);
    return style.overflow === "hidden" || style.overflowX === "hidden" || style.overflowY === "hidden";
}
var isItScrollableWithoutVisibleScrollbars = function(el) {
    if (el === null) return false;
    var isScrollable = false,
        hasScrollbars = false;
    isScrollable = el.scrollHeight > el.offsetHeight ? true : false; // first, lets find out if it has scrollable content
    // isScrollable = el.scrollHeight + 1 > el.clientHeight ? true : false; // first, lets find out if it has scrollable content
    if (isScrollable) hasScrollbars = (el.offsetWidth > el.scrollWidth) ? true : false; // if it's scrollable, let's see if it likely has scrollbars
    // if (isScrollable) hasScrollbars = (el.offsetWidth > el.scrollWidth - 1) ? true : false; // if it's scrollable, let's see if it likely has scrollbars
    if (isScrollable && !hasScrollbars && !overflowIsHidden(el)) return true;
    else return false;
};
document.addEventListener("touchmove", function(e) {
    if (document.body.classList.contains("navOpen") && !isItScrollableWithoutVisibleScrollbars(document.getElementById("navigation"))) e.preventDefault();
}, {
    passive: false
});