$(document).ready(function () {
  "use strict";

  var window_width = $(window).width(),
    window_height = window.innerHeight,
    header_height = $(".default-header").height(),
    header_height_static = $(".site-header.static").outerHeight(),
    fitscreen = window_height - header_height;

  $(".fullscreen").css("height", window_height);
  $(".fitscreen").css("height", fitscreen);

  //-------- Active Sticky Js ----------//
  $(".default-header").sticky({ topSpacing: 0 });

  if (document.getElementById("default-select")) {
    $("select").niceSelect();
  }

  $(".img-pop-up").magnificPopup({
    type: "image",
    gallery: {
      enabled: true,
    },
  });

  $(".play-btn").magnificPopup({
    type: "iframe",
    mainClass: "mfp-fade",
    removalDelay: 160,
    preloader: false,
    fixedContentPos: false,
  });

  // Select all links with hashes
  $('.main-button a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .on("click", function (event) {
      // On-page links
      if (
        location.pathname.replace(/^\//, "") ==
          this.pathname.replace(/^\//, "") &&
        location.hostname == this.hostname
      ) {
        // Figure out element to scroll to
        var target = $(this.hash);
        target = target.length
          ? target
          : $("[name=" + this.hash.slice(1) + "]");
        // Does a scroll target exist?
        if (target.length) {
          // Only prevent default if animation is actually gonna happen
          event.preventDefault();
          $("html, body").animate(
            {
              scrollTop: target.offset().top - 50,
            },
            1000,
            function () {
              // Callback after animation
              // Must change focus!
              var $target = $(target);
              $target.focus();
              if ($target.is(":focus")) {
                // Checking if the target was focused
                return false;
              } else {
                $target.attr("tabindex", "-1"); // Adding tabindex for elements not focusable
                $target.focus(); // Set focus again
              }
            }
          );
        }
      }
    });

  $(document).ready(function () {
    $("html, body").hide();

    if (window.location.hash) {
      setTimeout(function () {
        $("html, body").scrollTop(0).show();

        $("html, body").animate(
          {
            scrollTop: $(window.location.hash).offset().top,
          },
          1000
        );
      }, 0);
    } else {
      $("html, body").show();
    }
  });

  $(document).ready(function () {
    $("#mc_embed_signup").find("form").ajaxChimp();
  });

  $(".filters ul li").click(function () {
    $(".filters ul li").removeClass("active");
    $(this).addClass("active");

    var data = $(this).attr("data-filter");
    $grid.isotope({
      filter: data,
    });
  });

  if (document.getElementById("portfolio")) {
    var $grid = $(".grid").isotope({
      itemSelector: ".all",
      percentPosition: true,
      masonry: {
        columnWidth: ".all",
      },
    });
  }
});

$(document).ready(function () {
  // Hide the modal on page load
  $(".modal").hide();

  // Find all the div elements with "chui" class name
  $(
    "#burana, #kol-kogur, #kegetinskiy-vodopad, #sulayman-too, #pik-lenina, #vodopad-abshir-ata , #ozero-son-kol, #ozero-kol-suu, #tash-rabat ,#ozero-besh-tash, #manas-ordo,#ushelye-karavshan,  #ushelye-geti-oguz, #ushelye-karakol, #kanyon-skazka, #zapovednik-sary-chelek, #ozero-toktogul"
  ).click(function () {
    // Get the content of the clicked div
    var content = $(this).html();

    // Create a jQuery object from the obtained content
    var $content = $(content);
    // Find the element you want to modify by its selector
    var $description = $content.find("#description");
    // Modify its CSS properties
    $description.css("display", "inline-block");

    $content.find("img").css("width", "50%");
    $content.find("img").css("height", "50%");
    $content.find("img").css("margin-bottom", "35px");
    // Insert the content into the modal body
    $(".modal-body").html($content);

    // Display the modal
    $(".modal").show();
  });

  // Close the modal when the user clicks on the close button
  $(".close").click(function () {
    $(".modal").hide();
  });
});
