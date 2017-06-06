$(document).ready(function() {
    $('input').delay(700).focus().keydown(function(e) {
      if (e.which == 13){
        $.post("https://quest-6684.herokuapp.com/", {password:$('input').val().toLowerCase()}).done(function(data){
            if(data != "Hello world!"){
              if (data == "hint"){
                $('div').fadeOut("fast").delay(2000).fadeIn('fast');
                setTimeout(function(){
                  $("a").fadeIn('fast').delay(1000).fadeOut('fast');
                  $('input').val("").delay(600).focus()
                }, 600)
              }
              else if (data == "fail"){
                $('div').fadeOut("fast").delay(1600).fadeIn('fast');
                setTimeout(function(){
                  $(".wr_pass").fadeIn('fast').delay(600).fadeOut('fast');
                  $('input').val("").delay(600).focus()
                }, 600)
              }
              else{
                $('html, body').fadeOut('slow', function() {
                  window.location = data;
              });
              }
          };
        }).fail(function() {
            $('div').fadeOut("fast").delay(1600).fadeIn('fast');
                setTimeout(function(){
                  $(".fail").fadeIn('fast').delay(600).fadeOut('fast');
                  $('input').val("").delay(600).focus()
                }, 600)
        });
      }
    });
  });
