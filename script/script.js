// hamburger button index

$("#hamburger").click(function() {
    $(this).toggleClass("on");
    $("#menuIndex").slideToggle();
  });

// hamburger button sign up page

$("#hamburgerSup").click(function() {
  $(this).toggleClass("on");
  $("#menuSup").slideToggle();
});

// hamburger button football club page
$("#hamburgerFc").click(function() {
  $(this).toggleClass("on");
  $("#menuFc").slideToggle();
});
