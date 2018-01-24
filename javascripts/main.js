//Mobile Sidebar
$('.header-menu-icon').click(function() {
  $('aside.sidebar, .sidebar-overlay').toggleClass('expand');
});
$('.sidebar-overlay').click(function() {
  $('aside.sidebar, .sidebar-overlay').removeClass('expand');
});

//Side-Menus in Sidebar
$('.sidebar-submenu-expand').click(function(){
  $(this).next('.sidebar-submenu').addClass('expand');
});
$('.sidebar-submenu-close').click(function(){
  $(this).parent('.sidebar-submenu').removeClass('expand');
});

//Accordions in Sidebar
$('.sidebar-acordion-toggle').click(function() {
  var accordion = $(this).next('.sidebar-accordion');
  var height = accordion.height();
  var realHeight = accordion.prop('scrollHeight');
  if (height) {
    accordion.css("max-height", "0");
    $(this).toggleClass('minus');
  }
  else {
    accordion.css("max-height", realHeight);
    $(this).toggleClass('minus');
  }
})