$(document).ready(function($){
  // add the open class when the user clicks the title
    $('h4').click(function(){
       $(this).parent().toggleClass('open');
    });
});