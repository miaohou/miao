$(document).ready(function() {

/*0000視差滾動0000000*/
  $('.parallax-window01').parallax({imageSrc:'images/bg.jpg'});
  $('.parallax-window02').parallax({imageSrc:'images/bg02.jpg'});
  $('.parallax-window03').parallax({imageSrc:'images/bg.jpg'});

/*滑動到下個區塊*/
  $('.indexmenu').on('click', 'a', function(event){
    event.preventDefault();
  var _href = $(this).attr('href');
  console.log(this);
    $('html, body').animate({
        scrollTop: $( _href ).offset().top
    }, 800);
  });

/*modal*/
  $("#demo01,#demo02").animatedModal();


});