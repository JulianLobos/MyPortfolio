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


// script table

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

// script goles

$("#partidoFecha1").click(function() {
  $(this).toggleClass("on");
  $("#goles").slideToggle();
});

// tippy
tippy('#html', {
  content: 'HTML',
  placement: 'top',
});

tippy('#css', {
  content: 'CSS',
  placement: 'top',
});

tippy('#js', {
  content: 'JavaScript',
  placement: 'top',
});

tippy('#npm', {
  content: 'npm',
  placement: 'top',
});

tippy('#sass', {
  content: 'Sass',
  placement: 'top',
});

tippy('#git', {
  content: 'Git',
  placement: 'top',
});

tippy('#github', {
  content: 'GitHub',
  placement: 'top',
});

tippy('#bootstrap', {
  content: 'Bootstrap',
  placement: 'top',
});

tippy('#figma', {
  content: 'Figma',
  placement: 'top',
});

tippy('#material', {
  content: 'Material UI',
  placement: 'top',
});

tippy('#reactjs', {
  content: 'ReactJS',
  placement: 'top',
});


