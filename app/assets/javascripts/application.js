// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require_tree .

$(document).ready(function() {
  $('body').append("");



  $('form').on('submit', function(e) {
    e.preventDefault();
    var todo =$('#todo').val();

//    console.log(todo);

    $('#todo-form').append("<div id='pop'>"+ todo + "<button id='complete'>"+ 'complete' +'</button>' + "<button id='remove'>"+ 'delete' +'</button>' +'</div>');

    if ( $( "input:first" ).val() != "" ) {
      $( '#alert' ).append('<div class="created-alert">'+ 'Todo Created' + '</div>').show().fadeOut( 3000 );
      return;
    }

  });




  $(document).on("click", "#pop", function() {
    $(this).empty().hide();
  });


  $("#hide").click(function(){
    $("#alert").hide();
  });




//  + "<button id='hide'>"+ 'delete' +'</button>'

});





