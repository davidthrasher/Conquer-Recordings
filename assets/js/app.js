(function($){
  $(function(){

    $('.button-collapse').sideNav();
    $('#push').pushpin({ top:$('#push').height() });


    const d = new Date();
    const theYear = d.getFullYear();
    $("#footerdate").html(theYear);

  }); // end of document ready
})(jQuery); // end of jQuery name space
