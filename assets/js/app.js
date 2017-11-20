(function($){
  $(function(){
    //Materialize Functionality=====================//
    $('.button-collapse').sideNav();
    $('#textarea1').trigger('autoresize');



    //Dyamic Footer Date Functionality=====================//
    const d = new Date();
    const theYear = d.getFullYear();
    $("#footerdate").html(theYear);

    //Waypoint Functionality=======================//

    $(".links-about").on('click', function(){
        //jQuery function which triggers when developers link clicked
        $("#about").css("display", "block");       //displays the previously hidden container class block
        lastElementTop = $('#about').position().top - 130 ; //finds the position of the container class and assigns to variable
        $('html, body').animate({scrollTop: lastElementTop}, 'slow'); //scrolls to the position found in last line
    });

    $(".links-gear").on('click', function(){
        //jQuery function which triggers when developers link clicked
        $("#gear").css("display", "block");       //displays the previously hidden container class block
        lastElementTop = $('#gearsection').position().top - 130 ; //finds the position of the container class and assigns to variable
        $('html, body').animate({scrollTop: lastElementTop}, 'slow'); //scrolls to the position found in last line
    });

    $(".links-contact").on('click', function(){
        //jQuery function which triggers when developers link clicked
        $("#contact").css("display", "block");       //displays the previously hidden container class block
        lastElementTop = $('#contact').position().top - 130 ; //finds the position of the container class and assigns to variable
        $('html, body').animate({scrollTop: lastElementTop}, 'slow'); //scrolls to the position found in last line
    });

    $('#conquerlogo').on('click', function(){                  //jQuery function which triggers when camp icon is clicked
        $('html, body').animate({ scrollTop: 0 }, 'slow'); //scrolls to position 0 (top of page)
    });
    $('.home').on('click', function(){                  //jQuery function which triggers when camp icon is clicked
        $('html, body').animate({ scrollTop: 0 }, 'slow'); //scrolls to position 0 (top of page)
    });

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

      //Contact Form SMTP===========================//
      $("#contactsubmit").on("click", function(event) {
        event.preventDefault();

        var name = $("#name").val();
        var email = $("#email").val();
        var subject = $("#subject").val();
        var message = $("#message").val();
        var body = "(Client Name): " + name + " (Client Email): " + email + " (Message): " + message;
        console.log(body);

        Email.send("contact@conquerrecordings.com",
          "conquerrecordings@gmail.com",
            subject,
            body,
          {token: "36d44dd0-9319-407d-85b0-62e5ea94cffa"});

          //SMTP TOKEN 36d44dd0-9319-407d-85b0-62e5ea94cffa//

        $("#thankyou").append("<p>Thank you for contacting Conquer Recordings. Chris will get back to you as soon as possible!</p>");

        setTimeout(function(){
          $('#thankyou').empty();
          document.getElementById('name').value = "";
          document.getElementById('email').value = "";
          document.getElementById('subject').value = "";
          document.getElementById('message').value = "";
        }, 3000);
      });





  }); // end of document ready
})(jQuery); // end of jQuery name space
