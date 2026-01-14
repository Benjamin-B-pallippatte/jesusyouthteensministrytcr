
  (function ($) {
  
  "use strict";

    // AOS ANIMATIONS
    AOS.init();

    // HERO VIDEO AUTOPLAY
    $(document).ready(function() {
      var heroVideo = document.querySelector('.custom-video');
      if (heroVideo) {
        // Add error handling
        heroVideo.addEventListener('error', function(e) {
          console.error('Video failed to load:', e);
          console.log('Video src:', heroVideo.querySelector('source').src);
        });

        heroVideo.addEventListener('loadeddata', function() {
          console.log('Video loaded successfully');
        });

        heroVideo.addEventListener('play', function() {
          console.log('Video started playing');
        });

        // Try to play with better error handling
        var playPromise = heroVideo.play();
        if (playPromise !== undefined) {
          playPromise.then(function() {
            console.log('Video autoplay started');
          }).catch(function(error) {
            console.log('Video autoplay failed:', error);
            // Fallback: show controls if autoplay fails
            heroVideo.setAttribute('controls', '');
          });
        }
      }

      // Handle about section video
      var aboutVideo = document.querySelector('.about-image');
      if (aboutVideo && aboutVideo.tagName === 'VIDEO') {
        aboutVideo.addEventListener('error', function(e) {
          console.error('About video failed to load:', e);
        });

        aboutVideo.play().catch(function(error) {
          console.log('About video autoplay failed:', error);
        });
      }
    });

    // MOBILE MENU IMPROVEMENTS
    $('.navbar-toggler').on('click', function() {
      $(this).toggleClass('active');
    });

    // SMOOTH SCROLLING WITH OFFSET FOR MOBILE
    function getScrollOffset() {
      return window.innerWidth < 992 ? 60 : 76;
    }

    $('a[href*="#"]').click(function (event) {
      if (
        location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
          event.preventDefault();
          var offset = getScrollOffset();
          $('html, body').animate({
            scrollTop: target.offset().top - offset
          }, 1000, 'easeInOutExpo');
        }
      }
    });

    // INTERACTIVE ELEMENTS
    $('.portfolio-thumb, .news-thumb').on('mouseenter', function() {
      $(this).addClass('hover-effect');
    }).on('mouseleave', function() {
      $(this).removeClass('hover-effect');
    });

    // BACK TO TOP BUTTON
    $(window).scroll(function() {
      if ($(this).scrollTop() > 300) {
        $('.back-to-top').addClass('show');
      } else {
        $('.back-to-top').removeClass('show');
      }
    });

    // RESPONSIVE NAVIGATION ENHANCEMENT
    $(window).resize(function() {
      if ($(window).width() < 992) {
        $('.navbar-collapse').removeClass('show');
        $('.navbar-toggler').removeClass('active');
      }
    });

    // THEME TOGGLE
    $(document).ready(function() {
      const themeToggle = $('#theme-toggle');
      const body = $('body');
      
      // Check for saved theme preference or default to light
      const currentTheme = localStorage.getItem('theme') || 'light';
      if (currentTheme === 'dark') {
        body.addClass('dark-theme');
        themeToggle.find('i').removeClass('bi-sun').addClass('bi-moon');
        themeToggle.removeClass('btn-outline-dark').addClass('btn-outline-light');
      }
      
      themeToggle.on('click', function() {
        body.toggleClass('dark-theme');
        const isDark = body.hasClass('dark-theme');
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
        themeToggle.find('i').toggleClass('bi-sun bi-moon');
        themeToggle.toggleClass('btn-outline-dark btn-outline-light');
      });

      // SMOOTH SCROLLING FOR NAVIGATION
      $('a[href^="#"]').on('click', function(event) {
        var target = $($(this).attr('href'));
        if (target.length) {
          event.preventDefault();
          $('html, body').scrollTop(target.offset().top - 100);
          // Close mobile menu
          $('.navbar-collapse').collapse('hide');
        }
      });

      // NAVBAR SCROLL EFFECT
      $(window).scroll(function() {
        if ($(this).scrollTop() > 50) {
          $('.navbar').addClass('navbar-scrolled');
        } else {
          $('.navbar').removeClass('navbar-scrolled');
        }
      });
    });

    // NAVBAR
    
  })(window.jQuery);

  
