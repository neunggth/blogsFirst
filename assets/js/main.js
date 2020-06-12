


// progressive bar 
//* When the user scrolls the page, execute myFunction 
window.onscroll = function () {
  myFunction()
};

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}

// ? dots, nav, 
$(document).ready(function () {
  $('.owl-carousel').owlCarousel({
    loop: true,
    nav:false,
    dots:true,
    // responsiveClass: true,
    nav:false,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 2
      },
      1000: {
        items: 3
      }
    }
  });
});