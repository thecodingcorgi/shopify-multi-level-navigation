// Creates open and close dropdown effect
$('.multilayer-navigation a span').click(function(event){
  // Prevents link from clicking
  event.preventDefault();
  // Creates animation
  $(this).closest('li').toggleClass('expanded'); // Necessary for reload
  $(this).toggleClass('expand');
  $(this).parent('a').next().fadeToggle('fast');
});

// If link is current url open navigation to current link
$(document).ready(function(){
  var currentUrl = window.location.pathname;
  $('.multilayer-navigation a').each(function(){
    if($(this).attr('href') == currentUrl){
      // Opens tree of links
      $(this).parents('ul').toggleClass('expand');
      $(this).parents('li').toggleClass("expanded");
      // Adds active class to navigation
      $(this).addClass("active");
    }
  });
});
