(function () {
  var app = app || {};

  var spBreak = 767.98;
  var offsetY = window.pageYOffset;
  var newsFeedUrl = 'https://www.bar-e-passione.com/fcblog/feed/';

  app.init = function () {
    app.detectBrowsers();
    app.tabletViewport();
    app.smoothScroll();
    app.initWow();
    app.navigation();
    app.buttonMenuSticky();
    app.changeText();
    app.modalLightbox();
    app.goTop();
    app.showNav();
  };

  app.isMobile = function () {
    return window.matchMedia('(max-width: ' + spBreak + 'px)').matches;
  };

  app.detectBrowsers = function () {
    var html = $('html');
    var ua = navigator.userAgent.toLowerCase();
    if (ua.indexOf('mac') >= 0) {
      html.addClass('is-mac');
    }
    if (ua.indexOf('safari') != -1) {
      if (ua.indexOf('chrome') > -1) {
        html.addClass('is-chrome');
      } else {
        html.addClass('is-safari');
      }
    }
    if (ua.indexOf('msie ') > -1 || ua.indexOf('trident/') > -1) {
      html.addClass('is-ie');
    }
    if (ua.indexOf('firefox') > -1) {
      html.addClass('is-firefox');
    }
    if (ua.indexOf('android') > -1) {
      html.addClass('is-android');
    }
    if (ua.match(/(iphone|ipod|ipad)/)) {
      html.addClass('is-ios');
    }
    if (ua.indexOf('edg/') > -1) {
      html.removeClass('is-chrome');
      html.addClass('is-chromium');
    }
  };

  app.tabletViewport = function () {
    var viewport = document.getElementById('viewport');
    var viewportSet = function () {
      var portrait = window.matchMedia('(orientation: portrait)').matches;
      if (screen.width < 375 && portrait) {
        viewport.setAttribute('content', 'width=375, user-scalable=0');
      } else if (
        (screen.width >= 768 && screen.width <= 1199) ||
        (screen.width < 768 && screen.height >= 768 && !portrait)
      ) {
        viewport.setAttribute('content', 'width=1300, user-scalable=0');
        var ua = navigator.userAgent.toLowerCase();
        if (
          (/macintosh/i.test(ua) &&
            navigator.maxTouchPoints &&
            navigator.maxTouchPoints > 1) ||
          (ua.match(/(iphone|ipod|ipad)/) && !app.isMobile()) ||
          (ua.indexOf('android') > -1 && !app.isMobile())
        ) {
          $('html').addClass('is-tablet');
        }
      } else {
        viewport.setAttribute(
          'content',
          'width=device-width, initial-scale=1, shrink-to-fit=no, user-scalable=0'
        );
        $('html').removeClass('is-tablet');
      }
    };
    viewportSet();
    window.onload = function () {
      viewportSet();
    };
    window.onresize = function () {
      viewportSet();
    };
  };

  app.smoothScroll = function () {
    var anchors = $('a[href*="#"]:not([href="#"])');
    var headerHeight = 0;
    var speed = 1000;
    var timeDelay = 0;
    var triggerScroll = function (context) {
      var href =
        typeof context == 'string'
          ? context
          : '#' +
          $(context)
            .attr('href')
            .split('#')[1];
      if ($(context).hasClass('no-scroll')) return;
      if (!$(href).length) return;
      if ($('body').hasClass('has-menu')) {
        app.closeMenu();
        timeDelay = 300;
      }
      setTimeout(function () {
        var position = $(href).offset().top - headerHeight;
        $('body, html').animate({ scrollTop: position }, speed, 'swing');
      }, timeDelay);
      return false;
    };
    setTimeout(function () {
      scroll(0, 0);
      $('html')
        .removeClass('is-loading')
        .addClass('is-visible');
    }, 1);
    if (window.location.hash) {
      scroll(0, 0);
      var timeout = 500;
      if (
        navigator.userAgent.indexOf('MSIE ') > -1 ||
        navigator.userAgent.indexOf('Trident/') > -1
      ) {
        timeout = 0;
      }
      setTimeout(function () {
        triggerScroll(window.location.hash);
      }, timeout);
    }
    anchors.on('click', function () {
      return triggerScroll(this);
    });
  };

  app.initWow = function () {
    if ($('.wow').length) {
      new WOW().init();
    }
    if ($('.js-offset').length) {
      $('.js-offset').each(function () {
        $(this).attr('data-wow-offset', $(this).innerHeight() / 2);
      });
    }
  };

  app.modalLightbox = function () {
    var lightbox = $('.js-lightbox-popup'),
      button = $('.js-open-lightbox');
    var init = function () {
      button.click(function () {
        open($(this).attr('data-lightbox'));
      });
      lightbox.find('.js-popup-close').click(function () {
        close($(this).parents('.js-lightbox-popup'));
      });
      lightbox.on('click', function (e) {
        if ($(e.target).parents('.lightbox-window').length == 0) {
          close($(this));
        }
      });
    };
    var open = function (lightboxID) {
      if ($('.js-button-menu').hasClass('is-active')) {
        $('.js-button-close').click();
        $('.modal-common-overlay').show();
      }
      $('.js-lightbox-popup[data-lightbox="' + lightboxID + '"]').fadeIn(
        'fast',
        function () {
          offsetY = window.pageYOffset;
          $('body').css({
            position: 'fixed',
            top: -offsetY + 'px',
            width: '100%',
            overflowY: 'scroll'
          });
          $('body').css(
            'cssText',
            'position: fixed !important; width: 100%; overflow-y: scroll; top: ' +
            -offsetY +
            'px !important;'
          );
          $(document).on('touchmove', function (e) {
            if ($(e.target).parents('.window').length == 0) return false;
          });
        }
      );
    };
    var close = function (target) {
      $('.modal-common-overlay').hide();
      $('body, .container').removeAttr('style');
      $(window).scrollTop(offsetY);
      target.fadeOut('fast');
      $(document).off('touchmove');
    };
    if (lightbox.length) init();
  };

  app.openMenu = function () {
    offsetY = window.pageYOffset;
    $('.js-button-menu').addClass('is-active');
    $('body')
      .css({
        top: -offsetY + 'px'
      })
      .addClass('has-menu');
    $('.js-navigation').fadeIn();
  };

  app.closeMenu = function () {
    $('.js-button-menu').removeClass('is-active');
    $('body')
      .css({
        top: 'auto'
      })
      .removeClass('has-menu');
    $(window).scrollTop(offsetY);
    $('.js-navigation').fadeOut();
  };

  app.navigation = function () {
    $(document).on('click', '.js-button-menu', function () {
      if ($('.js-button-menu').hasClass('is-active')) {
        app.closeMenu();
      } else {
        app.openMenu();
      }
      return false;
    });

    $(document).on('click', '.js-button-close', function () {
      app.closeMenu();
      return false;
    });

    var heightNavigation = function () {
      if ($('.js-navigation').length) {
        $('.js-navigation').css({
          height: $(window).innerHeight()
        });
      }
    };

    heightNavigation();
    $(window).on('load resize', heightNavigation);
  };

  app.buttonMenuSticky = function () {
    var menuSticky = function () {
      var hasFixed = $(window).scrollTop() > $('.js-keyvisual').innerHeight();
      if (hasFixed) {
        $('.js-button-menu').fadeIn(100);
      } else {
        $('.js-button-menu').fadeOut(100);
      }
    };
    menuSticky();
    $(window).on('load scroll resize', menuSticky);
  };

  app.socialMedia = function () {
    if (!$('#fb-root').length) return;

    var fbRoot = $('#fb-root');
    var fbScript = $('<script>'),
      fbScriptContent = '',
      fbVersion = fbRoot.data('version') || 'v2.12',
      fbLanguage = fbRoot.data('language') || 'ja_JP';

    fbVersion =
      fbVersion.substr(0, 1).toLowerCase() == 'v'
        ? fbVersion.substr(1)
        : fbVersion;

    fbScriptContent += '(function(d, s, id) {';
    fbScriptContent += 'var js, fjs = d.getElementsByTagName(s)[0];';
    fbScriptContent += 'if (d.getElementById(id)) return;';
    fbScriptContent += 'js = d.createElement(s);';
    fbScriptContent += 'js.id = id;';
    fbScriptContent += 'js.async = true;';
    fbScriptContent +=
      'js.src = "https://connect.facebook.net/' +
      fbLanguage +
      '/sdk.js#xfbml=1&version=v' +
      fbVersion +
      '";';
    fbScriptContent += 'fjs.parentNode.insertBefore(js, fjs);';
    fbScriptContent += '}(document, "script", "facebook-jssdk"));';

    $(fbScript).append(fbScriptContent);
    $('body').append(fbScript);
  };

  app.footerSocial = function () {
    if (!$('.js-footer-social').length) return;

    var socialsHTML = '',
      socialsLang =
        $('html').attr('lang') !== undefined &&
          $.trim($('html').attr('lang')).length == 2
          ? $.trim($('html').attr('lang')).toLowerCase()
          : 'ja',
      $socialsLine = '',
      $socialsTwitter = '',
      $socialsFacebook = '',
      locationURL = window.location.href || location.href;

    $socialsTwitter += '<div class="social-twitter">';
    $socialsTwitter +=
      '<a href="https://twitter.com/share" class="twitter-share-button">Tweet</a>';
    $socialsTwitter +=
      '<script type="text/javascript">!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src="https://platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");</script>';
    $socialsTwitter += '</div>';

    $socialsFacebook += '<div class="social-facebook">';
    $socialsFacebook +=
      '<div class="fb-like" data-layout="button_count" data-action="like" data-show-faces="false" data-share="false"></div>';
    $socialsFacebook += '</div>';

    $socialsLine += '<div class="social-line">';
    $socialsLine +=
      '<div class="line-it-button" data-lang="' +
      socialsLang +
      '" data-type="like" data-url="' +
      locationURL +
      '" data-share="true" style="display: none;">';
    $socialsLine +=
      '<script src="https://d.line-scdn.net/r/web/social-plugin/js/thirdparty/loader.min.js" async="async" defer="defer"></script>';
    $socialsLine += '</div>';
    $socialsLine += '</div>';

    var socialsOrder =
      typeof $('.js-footer-social').attr('data') != 'undefined'
        ? $('.js-footer-social')
          .attr('data')
          .split('')
        : false;

    if (typeof socialsOrder == 'object' && socialsOrder.length) {
      for (var socialsType in socialsOrder) {
        if ($.trim(socialsType).length > 0) {
          socialsType = socialsType.toLowerCase();
          if (socialsOrder[socialsType].toLocaleLowerCase() === 'f')
            socialsHTML += $socialsFacebook;
          else if (socialsOrder[socialsType].toLocaleLowerCase() === 't')
            socialsHTML += $socialsTwitter;
          else if (socialsOrder[socialsType].toLocaleLowerCase() === 'l')
            socialsHTML += $socialsLine;
        }
      }
    } else {
      socialsHTML += $socialsTwitter;
      socialsHTML += $socialsFacebook;
      socialsHTML += $socialsLine;
    }

    $('.js-footer-social').html(socialsHTML);
  };

  app.sliderKeyvisual = function () {
    if (!$('.js-swiper-keyvisual').length) return;
    new Swiper('.js-swiper-keyvisual', {
      loop: true,
      speed: 1000,
      effect: 'fade',
      fadeEffect: {
        crossFade: true
      },
      allowTouchMove: false,
      autoplay: {
        delay: 4000,
        disableOnInteraction: false
      }
    });
  };

  app.showNav = function () {
    if (!$('.js-show-nav').length) return;
    $(window).on('scroll', function () {
      $('body').toggleClass(
        'has-nav',
        $(window).scrollTop() > $('.js-show-nav').offset().top
      );
    });
  };

  app.goTop = function () {
    if (!$('.js-button-common-top').length) return;

    var lastScrollTop = 0;

    $(window).scroll(function () {
      var currentScrollTop = $(this).scrollTop();
      if (lastScrollTop != 0) {
        if (currentScrollTop < lastScrollTop) {
          $('.js-button-common-top').addClass('visible');
          if (currentScrollTop < 10) {
            $('.js-button-common-top').removeClass('visible');
          }
        } else if (currentScrollTop > lastScrollTop) {
          $('.js-button-common-top').removeClass('visible');
        }
      }
      lastScrollTop = currentScrollTop;
    });

    $('body').on('click', '.js-button-common-top', function () {
      if (!$(this).hasClass('in-scroll')) {
        $(this).addClass('in-scroll');
        var scrollDuration =
          $.inArray($(this).attr('data-duration'), [
            'slow',
            'normal',
            'fast'
          ]) >= 0 || parseInt($(this).attr('data-duration')) > 0
            ? $(this).attr('data-duration')
            : 'slow';
        $('html, body')
          .stop()
          .animate(
            {
              scrollTop: 0
            },
            scrollDuration,
            function () {
              $('.button-common-top').removeClass('in-scroll');
            }
          );
      }
    });
  };

  app.sliderAbout = function () {
    if (!$('.js-swiper-about').length) return;
    new Swiper('.js-swiper-about', {
      loop: true,
      speed: 400,
      effect: 'fade',
      allowTouchMove: false,
      autoplay: {
        delay: 4000
      },
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true
      }
    });
  };

  app.sliderFloor = function () {
    if (!$('.js-swiper-floor').length) return;
    new Swiper('.js-swiper-floor', {
      loop: true,
      speed: 400,
      effect: 'fade',
      allowTouchMove: false,
      autoplay: {
        delay: 4000
      },
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true
      }
    });
  };

  app.sliderDish = function () {
    if (!$('.js-slider-dish').length) return;
    var sliderSetting = {
      loop: true,
      freeMode: true,
      spaceBetween: 0,
      grabCursor: true,
      slidesPerView: 'auto',
      autoplay: {
        delay: 1,
        disableOnInteraction: true
      },
      speed: 5000,
      freeModeMomentum: false,
      allowTouchMove: false
    };
    var sliderQuery = null;
    var isInit = false;
    $(window).on('load resize', function () {
      if (app.isMobile()) {
        if (!isInit) {
          isInit = true;
          sliderQuery = new Swiper('.js-slider-dish', sliderSetting);
        }
      } else if (isInit) {
        sliderQuery.destroy();
        sliderQuery = null;
        isInit = false;
      }
    });
  };

  app.changeText = function () {
    $('.js-change-text').click(function () {
      var thisText = $(this).data('replace-text');
      $(this)
        .addClass('is-changed')
        .find('span')
        .text(thisText);
    });
  };

  $(window).on('load', function () {
    var isScrolled = false;
    $(window).on('scroll', function () {
      if (!isScrolled && $(window).scrollTop() > 10) {
        isScrolled = true;
        loadLazyScripts();
        // loadNews();
        loadNewsJson();
      }
    });
    var loadLazyScripts = function () {
      if ($('.js-lazy-map').length) {
        $('.js-lazy-map').each(function () {
          $(this).attr('src', $(this).data('src'));
        });
      }
      app.sliderAbout();
      app.sliderFloor();
      app.sliderDish();
      app.socialMedia();
      app.footerSocial();
    };

    var formatDate = function (dateString) {
      var date = new Date(dateString);
      if (isNaN(date.getTime())) {
        return dateString;
      }

      var year = date.getFullYear();
      var month = ('0' + (date.getMonth() + 1)).slice(-2);
      var day = ('0' + date.getDate()).slice(-2);

      return year + '-' + month + '-' + day;
    };

    var sanitizeText = function (text) {
      var div = document.createElement('div');
      div.textContent = text;
      return div.innerHTML;
    };

    var createNewsItem = function (item) {
      var categoryContent = sanitizeText(item.find('category').text());
      var linkContent = sanitizeText(item.find('link').text());
      var dateContent = formatDate(item.find('pubDate').text());

      return '<li class="news-item">' +
        '<time class="item-date" datetime="' + dateContent + '">' + dateContent + '</time>' +
        '<a class="item-link" href="' + linkContent + '" target="_blank" rel="noopener">' + categoryContent + '</a>' +
        '</li>';
    };

    var processNewsSuccess = function (response) {
      var items = $($.parseXML(response)).find('item');
      var newsList = $('.js-news-list');
      if (!items.length || !newsList.length) return;

      var newsHtml = items.map(function () {
        return createNewsItem($(this));
      }).get().join('');

      newsList.html(newsHtml);
    };


    var processNewsError = function () {
      alert('Error fetching news. Please try again later.');
    };

    var loadNews = function () {
      $.get({
        url: newsFeedUrl,
        dataType: 'html'
      })
        .done(processNewsSuccess)
        .fail(processNewsError);
    };

    var loadNewsJson = function () {
      $.getJSON('news.json', function (response) {
        var categoryContent = response.rss.channel.item[0].category;
        var linkContent = response.rss.channel.item[0].link;
        var dateContent = formatDate(response.rss.channel.item[0].pubDate);

        var newsHtml = '<li class="news-item">' +
          '<time class="item-date" datetime="' + dateContent + '">' + dateContent + '</time>' +
          '<a class="item-link" href="' + linkContent + '" target="_blank" rel="noopener">' + categoryContent + '</a>' +
          '</li>';

        var newsList = $('.js-news-list');
        newsList.html(newsHtml);
      }).fail(processNewsError);
    };
  });

  $(window).on('load', function () {

    window.WebFontConfig = {
      google: {
        families: [
          'Amiri:400,700',
          'Cinzel:400,500',
          'Zen Old Mincho&display=swap'
        ]
      }
    };
    (function () {
      var wf = document.createElement('script');
      wf.src =
        'https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js';
      wf.type = 'text/javascript';
      wf.async = 'true';
      var s = document.getElementsByTagName('script')[0];
      s.parentNode.insertBefore(wf, s);
    })();

    app.sliderKeyvisual();

  });

  $(function () {
    app.init();
  });
})();
