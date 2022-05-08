$(function(){
  function displayMenu(){
    const $navigation = $(".navigation");
    const $hamburgerLine = $(".line");

    function animationHamburger(){
      $hamburgerLine.toggleClass("is-active");
    }

    function displayNavigation(){
      $navigation.toggleClass("is-open");
    }

    function closeNavigation(){
      $hamburgerLine.removeClass("is-active");
      $navigation.removeClass("is-open");
    }

    function setEvent(){
      animationHamburger();
      displayNavigation();
    }

    function init(){
      const $hamburger = $(".hamburger-menu");
      const $link = $(".link");
      $hamburger.on("click",setEvent);
      $link.on("click",closeNavigation);
    }

    init();
  }

  function fadeAnimation(){
    function fadeUpAnime(){
      const $fadeUpTrigger = $('.fadeUpTrigger');
      $fadeUpTrigger.each(function(){
      let elementPosition = $(this).offset().top-50;
      let scrollIncrement = $(window).scrollTop();
      let windowHeight = $(window).height();
        if(scrollIncrement >= elementPosition - windowHeight){
          $(this).addClass('fadeUp');
        }else{
          $(this).removeClass('fadeUp');
        }
      });
    }

    function scrollEvent(){
      $(window).scroll(function(){
        fadeUpAnime();
      });
    }

    function loadEvent(){
      setTimeout(function(){
        fadeUpAnime();
      },1000);
    }

    function init(){
      loadEvent();
      scrollEvent();
    }

    init();
  }

  function init(){
    displayMenu();
    fadeAnimation();
  }

  init();
});