$(document).ready(function() {
  $(".navbar_elements").mouseover(function() {
    // $(".navbar_elements")
    //   .not(this)
    //   .addClass("navbar_elementsHover");
    $(".nav_elements_container").css("width", "100%");
    // $("#navbar").addClass("navbar_elementsHover");

    // $(this).css("color", "red");
    // console.log("ASDASD");
  });
  $(".navbar_elements").mouseleave(function() {
    $(".navbar_elements")
      .not(this)
      .toggleClass("navbar_elementsHover");
  });
});
