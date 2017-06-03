$(document).ready(function() {
    $('input').keydown(function(e) {
      if (e.which == 13){
        $.post("https://quest-6684.herokuapp.com/", {password:$('input').val()}).done(function(data){
          if (data != "fail"){
            $('html, body').fadeOut('slow', function() {
              window.location = data;
          });
          }
          else{
            $('div').fadeOut("fast").delay(1600).fadeIn('fast');
            setTimeout(function(){
              $("span").fadeIn('fast').delay(600).fadeOut('fast');
              $('input').val("")
          }, 600)

          };
        });
      }
    });
  });
