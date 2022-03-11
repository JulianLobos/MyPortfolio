// smooth scrolling 
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});

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

/* if (window.innerWidth < 576) {

  $("#news").click(function() {
    $("#hamburgerFc").toggleClass("on");
    $("#menuFc").slideUp();
  });

  $("#results").click(function() {
    $("#hamburgerFc").toggleClass("on");
    $("#menuFc").slideUp();
  });

  $("#nextMatches").click(function() {
    $("#hamburgerFc").toggleClass("on");
    $("#menuFc").slideUp();
  });

  $("#gallery").click(function() {
    $("#hamburgerFc").toggleClass("on");
    $("#menuFc").slideUp();
  });

  $("#theClub").click(function() {
    $("#hamburgerFc").toggleClass("on");
    $("#menuFc").slideUp();
  });

  $("#homeBtn").click(function() {
    if ($("#menuFc").is(":visible")){
      $("#menuFc").slideUp();
      $("#hamburgerFc").toggleClass("on");
    }
  });
}
*/

const mq = window.matchMedia( "(max-width: 576px)" );

if (mq.matches) {
  $("#news").click(function() {
    $("#hamburgerFc").toggleClass("on");
    $("#menuFc").slideUp();
  });

  $("#results").click(function() {
    $("#hamburgerFc").toggleClass("on");
    $("#menuFc").slideUp();
  });

  $("#nextMatches").click(function() {
    $("#hamburgerFc").toggleClass("on");
    $("#menuFc").slideUp();
  });

  $("#gallery").click(function() {
    $("#hamburgerFc").toggleClass("on");
    $("#menuFc").slideUp();
  });

  $("#theClub").click(function() {
    $("#hamburgerFc").toggleClass("on");
    $("#menuFc").slideUp();
  });

  $("#homeBtn").click(function() {
    if ($("#menuFc").is(":visible")){
      $("#menuFc").slideUp();
      $("#hamburgerFc").toggleClass("on");
    }
  });
} else {
  $("#menuFc").show();
}

$(document).ready(function(){
  $("select").change(function(){
      $(this).find("option:selected").each(function(){
          var optionValue = $(this).attr("value");
          if(optionValue){
              $(".tabla").not("." + optionValue).hide();
              $("." + optionValue).show();
          } else{
              $(".tabla").hide();
          }
      });
  }).change();
});