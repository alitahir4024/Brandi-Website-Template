$(window).on("scroll", () => {
  if ($(window).scrollTop()) {
    $("section>nav").css({
      backgroundImage:
        "linear-gradient(rgba(14, 180, 147,0.8),rgba(14, 180, 147,0.8))",
      transition: "all 0.5s",
    });
  } else {
    $("section>nav").css({
      backgroundImage:
        "linear-gradient(rgba(15, 44, 45, 0.8),rgba(15, 44, 45, 0.8))",
      transition: "all 0.5s",
    });
  }
});

$(".toggle-nav-buttons>svg:nth-child(1)").on("click", () => {
  $(".nav-links").css({
    height: "43vh",
    opacity: "1",
    visibility: "visible",
    transform: "scaleY(1)",
    transformOrigin: "top",
    zIndex: "2",
    transition: "all 0.5s",
  });
  $(".landing-page>nav").css({
    overflowY: "visible",
    borderBottom: "1px solid white",
  });
  $(".toggle-nav-buttons>svg:nth-child(1)").css({
    opacity: "0",
    visibility: "hidden",
  });
  $(".toggle-nav-buttons>svg:nth-child(2)").css({
    opacity: "1",
    visibility: "visible",
  });
});

$(".toggle-nav-buttons>svg:nth-child(2)").on("click", () => {
  $(".nav-links").css({
    height: "0vh",
    opacity: "0",
    visibility: "hidden",
    transform: "scaleY(0)",
    transformOrigin: "top",
    zIndex: "-9",
    transition: "all 0.5s",
  });
  $(".landing-page>nav").css({
    overflowY: "hidden",
    borderBottom: "none",
  });
  $(".toggle-nav-buttons>svg:nth-child(2)").css({
    opacity: "0",
    visibility: "hidden",
  });
  $(".toggle-nav-buttons>svg:nth-child(1)").css({
    opacity: "1",
    visibility: "visible",
  });
});

$(".slide-1-btn").on("click", () => {
  $(".slide-1-btn").css({
    backgroundColor: "white",
    border: "none",
  });
  $(".slide-2-btn").css({
    backgroundColor: "transparent",
    border: "1px solid white",
  });
  $(".slide-2").css({
    transform: "translateX(100%)",
  });
  $(".slide-1").css({
    transform: "translateX(0%)",
  });
});

$(".slide-2-btn").on("click", () => {
  $(".slide-2-btn").css({
    backgroundColor: "white",
    border: "none",
  });
  $(".slide-1-btn").css({
    backgroundColor: "transparent",
    border: "1px solid white",
  });
  $(".slide-1").css({
    transform: "translateX(-100%)",
  });
  $(".slide-2").css({
    transform: "translateX(0%)",
  });
});

$(".count").each(function () {
  $(this)
    .prop("Counter", 0)
    .animate(
      {
        Counter: $(this).text(),
      },
      {
        duration: 4000,
        easing: "swing",
        step: function (now) {
          $(this).text(Math.ceil(now));
        },
      }
    );
});
