$(document).ready(function() {

/*0000視差滾動0000000*/
  $('.parallax-window01').parallax({imageSrc:'images/bg.jpg'});
  $('.parallax-window02').parallax({imageSrc:'images/bg02.jpg'});
  $('.parallax-window03').parallax({imageSrc:'images/bg.jpg'});

/*滑動到下個區塊*/
/*  $('.indexmenu').on('click', 'a', function(event){
    event.preventDefault();
  var _href = $(this).attr('href');
  console.log(this);
    $('html, body').animate({
        scrollTop: $( _href ).offset().top
    }, 800);
  });*/

/*modal*/
  $("#demo01").animatedModal();
  $("#demo02").animatedModal({modalTarget:'modal-02'});
  $("#demo03").animatedModal({modalTarget:'modal-03'});
  $("#demo04").animatedModal({modalTarget:'modal-04'});
  $("#demo05").animatedModal({modalTarget:'modal-05'});
  $("#demo06").animatedModal({modalTarget:'modal-06'});
  $("#demo07").animatedModal({modalTarget:'modal-07'});
  $("#demo08").animatedModal({modalTarget:'modal-08'});
  $("#demo09").animatedModal({modalTarget:'modal-09'});

// Cache selectors
var lastId,
    topMenu = $(".indexmenu"),
    topMenuHeight = topMenu.outerHeight(),
    // All list items
    menuItems = topMenu.find("a"),
    // Anchors corresponding to menu items
    scrollItems = menuItems.map(function(){
      var item = $($(this).attr("href"));
      if (item.length) { return item; }
    });

// Bind click handler to menu items
// so we can get a fancy scroll animation
menuItems.click(function(e){
  var href = $(this).attr("href"),
      offsetTop = href === "#" ? 0 : $(href).offset().top-topMenuHeight+1;
  $('html, body').stop().animate({ 
      scrollTop: offsetTop
  }, 800);
  e.preventDefault();
});

// Bind to scroll
$(window).scroll(function(){
   // Get container scroll position
   var fromTop = $(this).scrollTop()+topMenuHeight;
   
   // Get id of current scroll item
   var cur = scrollItems.map(function(){
     if ($(this).offset().top < fromTop)
       return this;
   });
   // Get the id of the current element
   cur = cur[cur.length-1];
   var id = cur && cur.length ? cur[0].id : "";
   
   if (lastId !== id) {
       lastId = id;
       // Set/remove active class
       menuItems
         .parent().removeClass("active")
         .end().filter("[href='#"+id+"']").parent().addClass("active");
   }                   
});

});