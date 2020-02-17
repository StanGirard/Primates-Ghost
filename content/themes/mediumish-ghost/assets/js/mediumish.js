$(document).ready(function() {

     // hide share when no longer needed
    if ($('.hideshare').length){
      var topOfOthDiv = $(".hideshare").offset().top;
      $(window).scroll(function() {
          if($(window).scrollTop() > topOfOthDiv) {
              $(".share").hide();
          }
          else{
            $(".share").show();
          }
      });
    }

    // alertbar later
    $(document).scroll(function () {
        var y = $(this).scrollTop();
        if (y > 280) {
            $('.alertbar').fadeIn();
        } else {
            $('.alertbar').fadeOut();
        }
    });

     // masonry
    if ($('.masonrygrid').length){
      var $grid = $('.masonrygrid').masonry({
      itemSelector: '.grid-item'
      });
      $grid.imagesLoaded().progress( function() {
        $grid.masonry();
      });
    }

    // minutes to read
      if ($('.post-read').length){
        var txt = $('.article-post')[0].textContent,
        wordCount = txt.replace( /[^\w ]/g, "" ).split( /\s+/ ).length;

        var readingTimeInMinutes = Math.floor(wordCount / 250) + 1;
        var readingTimeAsString = readingTimeInMinutes + " min";
        $('.post-read').html(readingTimeAsString);
      }
    
  // Smooth scroll to an anchor
        $('a.smoothscroll[href*="#"]')
          // Remove links that don't actually link to anything
          .not('[href="#"]')
          .not('[href="#0"]')
          .click(function(event) {
            // On-page links
            if (
              location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
              &&
              location.hostname == this.hostname
            ) {
              // Figure out element to scroll to
              var target = $(this.hash);
              target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
              // Does a scroll target exist?
              if (target.length) {
                // Only prevent default if animation is actually gonna happen
                event.preventDefault();
                $('html, body').animate({
                  scrollTop: target.offset().top
                }, 1000, function() {
                  // Callback after animation
                  // Must change focus!
                  var $target = $(target);
                  $target.focus();
                  if ($target.is(":focus")) { // Checking if the target was focused
                    return false;
                  } else {
                    $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
                    $target.focus(); // Set focus again
                  };
                });
              }
            }
          });


});
