// Note:
// You don't need to do on the document.onload nonsense from a few weeks ago
// It turns out that's not a problem anymore (unless you're using Internet
// Explorer). You just need to make sure your <script> styles exist right before
// the </body> tag

// -----------------------------------------------------------------------------
// Navbar
// When user scrolls, the background turns from transparent to grey
// -----------------------------------------------------------------------------
$(window).scroll(function() {
  if ($(window).scrollTop() > 0) {
    $("#navbar").css("background-color", "black");
  } else {
    $("#navbar").css("background-color", "grey");
  }
});

// -----------------------------------------------------------------------------
// Accordian
// When user clicks on questions, answers appear
// -----------------------------------------------------------------------------
$(".question").each(function() {
  // console.log($(this));
  $(this).click(function() {
    // alert('clicked');

    // Toggle between having and not having the "active class"
    $(this).toggleClass("active");

    // Toggle between hiding and showing the answer

    $(this).next().slideToggle(200);
  });
});

// -----------------------------------------------------------------------------
// Tabs
// When user clicks on tab, content changes
// -----------------------------------------------------------------------------

// Look at teach element that has .tablink class
$(".tablinks").each(function() {
  $(this).click(function() {

    // Hide all tabcontents
    $(".tabcontent").each(function() {
      $(this).css("display", "none");
    });

    // Make all buttons inactive
    $(".tablinks").each(function() {
      $(this).removeClass("active");
    });

    // Open the tab
    const tabToOpen = $(this).attr("tab");
    $("#" + tabToOpen).toggle();

    // Make current tab active
    $(this).addClass("active");
  });
});

// Show a tab by default
$("#defaultOpen").click();
