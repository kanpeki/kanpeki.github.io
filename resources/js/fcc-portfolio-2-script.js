$(document).ready(function() {
  $('body').scrollspy({
    target: ".navbar",
    offset: 70
  });
});

$('.navbar-collapse a').click(function (e) {
  $('.navbar-collapse').collapse('toggle');
  $('.navbar-toggle').toggleClass('open');
});

$('.navbar-toggle').click(function (e) {
  $(this).toggleClass('open');
});

$('#contentContainer').click(function() {
  if($('.navbar-toggle').hasClass('open')) {
     $('.navbar-collapse').collapse('toggle');
    $('.navbar-toggle').toggleClass('open');
  }
});