$(function () {
  "use strict";
  $(".our-work ul li").click(function () {
    $(this).addClass("active").siblings().removeClass("active");
    if ($(this).data("class") === "All") {
      $(".row .box").show();
    } else {
      $(".row .box").hide();
      $($(this).data("class")).show();
    }
  });
});
