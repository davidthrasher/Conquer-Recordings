(function($){
  $(function(){
    //Materialize Functionality=====================//
    $('.button-collapse').sideNav();
    $('#push').pushpin({ top:$('#push').height() });


    //Dyamic Footer Date Functionality=====================//
    const d = new Date();
    const theYear = d.getFullYear();
    $("#footerdate").html(theYear);


    //Slide Show Functionality=====================//
    let slideIndex = 0;
    carousel();

      function carousel() {
          let i;
          let x = document.getElementsByClassName("mySlides");
          for (i = 0; i < x.length; i++) {
            x[i].style.display = "none";
          }
          slideIndex++;
          if (slideIndex > x.length) {slideIndex = 1}
          x[slideIndex-1].style.display = "block";
          setTimeout(carousel, 5000); // Change image every 5 seconds
      }

    //Waypoint Functionality=======================//
    // $(".button").on('click', function(){
    //     $("#services").css("display", "block");       //displays the previously hidden container class block
    //     lastElementTop = $('#services').position().top ; //finds the position of the container class and assigns to variable
    //     $('html, body').animate({scrollTop: lastElementTop}, 'slow'); //scrolls to the position found in last line
    // });

    // $(".links-home").on('click', function(){
    //     //jQuery function which triggers when developers link clicked
    //     $("#home").css("display", "block");       //displays the previously hidden container class block
    //     lastElementTop = $('#home').position().top ; //finds the position of the container class and assigns to variable
    //     $('html, body').animate({scrollTop: lastElementTop}, 'slow'); //scrolls to the position found in last line
    // });

    $(".links-about").on('click', function(){
        //jQuery function which triggers when developers link clicked
        $("#about").css("display", "block");       //displays the previously hidden container class block
        lastElementTop = $('#about').position().top ; //finds the position of the container class and assigns to variable
        $('html, body').animate({scrollTop: lastElementTop}, 'slow'); //scrolls to the position found in last line
    });

    $(".links-contact").on('click', function(){
        //jQuery function which triggers when developers link clicked
        $(".about-me").css("display", "block");       //displays the previously hidden container class block
        lastElementTop = $('.about-me').position().top ; //finds the position of the container class and assigns to variable
        $('html, body').animate({scrollTop: lastElementTop}, 'slow'); //scrolls to the position found in last line
    });

    $('#conquerlogo').on('click', function(){                  //jQuery function which triggers when camp icon is clicked
        $('html, body').animate({ scrollTop: 0 }, 'slow'); //scrolls to position 0 (top of page)
    });
    $('#home').on('click', function(){                  //jQuery function which triggers when camp icon is clicked
        $('html, body').animate({ scrollTop: 0 }, 'slow'); //scrolls to position 0 (top of page)
    });



  }); // end of document ready
})(jQuery); // end of jQuery name space
