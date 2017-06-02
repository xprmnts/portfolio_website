/*
When the hamburger icon gets clicked animate the icon
and display the nav elements with animation
*/
$('#hamburger').click(function(){
	$('#hamburger').toggleClass('change');
    $('li').toggleClass('responsive');
    $('nav').toggleClass('show');

});
/*
When a nav element gets clicked within the expanded menu
animate the icon back to its original state
remove the responsive class from the elements to hide them
*/
$(document).ready(function() {
    // run test on initial page load
    checkSize();

    // run test on resize of the window
    $(window).resize(checkSize);
});

function checkSize(){
  if ($(window).width() <= 480){
    if($('li').hasClass('responsive')){
      $('li').removeClass('responsive');
    }
   $('.navlist-item').click(function(){
	    $('#hamburger').toggleClass('change');
	    $('li').toggleClass('responsive');
	    $('nav').toggleClass('show');
	});
  }
  if ($(window).width() > 480){
    if(!$('li').hasClass('responsive')){
      $('li').addClass('responsive');
    }
	}
}

/*
Based on the nav link clicked smooth scroll to its
div position
*/


$('.btn').click(function(evt){
    evt.preventDefault();
    $('.btn').css('color','rgba(180,180,180,0.5)');
    $('.btn').val('Sent');
});

$( '#a' ).click( function( evt ) {
    $('html, body').animate({
        scrollTop: $('#thoughts').offset().top
    }, 1000);
});

$( '#b' ).click( function( evt ) {
    $('html, body').animate({
        scrollTop: $('#resources').offset().top
    }, 1000);
});

$( '#c' ).click( function( evt ) {
    $('html, body').animate({
        scrollTop: $('#projects').offset().top
    }, 1000);
});

$( '#d' ).click( function( evt ) {
    $('html, body').animate({
        scrollTop: $('#contact').offset().top
    }, 1000);
});