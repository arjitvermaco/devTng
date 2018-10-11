new WOW().init();

$('.bxslider').bxSlider();



$('.bxslider').bxSlider({
  infiniteLoop: true,
mode: 'fade',
speed: 1200,
auto: true,
  hideControlOnEnd: true,
  minSlides: 1,
  maxSlides: 1,
  slideMargin: 0
  });			

$(document).ready(function(){
  $('.bxslider').bxSlider();

  $(".navbar-nav li a").click(function(event) {
    $(".navbar-collapse").collapse('hide');
  });



// Configure/customize these variables.
var showChar =0;  // How many characters are shown by default
var ellipsestext = "";
var moretext = "<img src='../images/show-more.png'>";
var lesstext = "<img src='../images/show-less.png'>";


$('.more').each(function() {
var content = $(this).html();

if(content.length > showChar) {

var c = content.substr(0, showChar);
var h = content.substr(showChar, content.length - showChar);

var html = c + '<span class="moreellipses">' + ellipsestext+ '&nbsp;</span><span class="morecontent"><span>' + h + '</span>&nbsp;&nbsp;<a href="" class="morelink">' + moretext + '</a></span>';

$(this).html(html);
}

});

$(".morelink").click(function(){
if($(this).hasClass("less")) {
$(this).removeClass("less");
$(this).html(moretext);
} else {
$(this).addClass("less");
$(this).html(lesstext);
}
$(this).parent().prev().fadeToggle();
$(this).prev().fadeToggle();
return false;
});
});
