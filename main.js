let green = $(".active-button");
let greenP;

let imgElement;

let pElement;

$(window).on("load", function () {
  $("#center-p").css("position", "absolute");

  $(".section-servises").click(function (e) {
    let target = $(e.target);

    if (!green) {
      green = target;
      $(green).removeClass("standard-color");
      $(green).addClass("active-button");
    } else if (green) {
      $(green).addClass("standard-color");
      $(green).removeClass("active-button");
      green = target;
      $(green).removeClass("standard-color");
      $(green).addClass("active-button");
    }

    if ($(".active-item")) {
      imgElement = $(".active-item")[0];
      pElement = $(".active-item")[1];
    }

    if ($(target).html()) {
      let it = [...document.querySelectorAll("[data-category]")];

      it.forEach((e) => {
        if (e.getAttribute("data-category") == $(target).html()) {
          if ($(e).hasClass("description")) {
            $(pElement).removeClass("active-item");
            $(pElement).hide();

            pElement = e;

            $(pElement).fadeIn(500);
            $(pElement).addClass("active-item");
          } else if ($(e).hasClass("img-description")) {
            $(imgElement).removeClass("active-item");
            $(imgElement).hide();

            imgElement = e;

            $(imgElement).fadeIn(500);
            $(imgElement).addClass("active-item");
          }
        }
      });
    }
  });

  $(".load-more1").click(function () {
    $(".load-elements").hide();
    $(".load-elements").slideDown(1000);
    $(".load-elements").fadeIn(500);

    $(".load-elements").show().removeClass("load-elements");
    $(".load-more1").click(function () {
      $(".load-elements-more").hide();
      $(".load-elements-more").slideDown(1000);
      $(".load-elements-more").fadeIn(500);

      $(".load-more1").remove();
      $(".load-elements-more").show().removeClass("load-elements-more");
    });
  });

  $(".section-works").on("click", "button", function (e) {
    let target = e.target;

    if (!greenP) {
      greenP = target;
      $(greenP).css("color", "#18cfab");
    } else if (greenP) {
      $(greenP).css("color", "#717171");
      greenP = target;
      $(greenP).css("color", "#18cfab");
    }

    let it = [...document.querySelectorAll(".item-desc")];

    it.forEach((e) => {
      if (e.textContent == $(target).html()) {
        $(e).closest("li").hide();
        $(e).closest("li").fadeIn(500);
        e.closest("li").classList.remove("hidden");
      } else if ($(target).html() === "All") {
        $(".grid-item").fadeIn(500);
        $(".grid-item").removeClass("hidden");
      } else {
        $(e).closest("li").hide();
        e.closest("li").classList.add("hidden");
      }
    });
  });

  $(".employee-bar").on("click", "button", function (e) {
    let target = e.target;

    let employes = [...document.querySelectorAll(".btn-employee")];

    employes.forEach((e) => {
      if ($(target).data("employee") === e.getAttribute("data-employee")) {
        $(e).next().addClass("active-employee").animate({ top: "-8px" }, 300);

        let byData = $(".search").find(
          `[data-employee='${$(e).attr("data-employee")}']`
        );

        $(byData)
          .removeClass("hidden-employee")
          .animate(
            {
              opacity: 1,
              left: byData.parent().width() / 2 - byData.width() / 2,
            },
            1000
          );

        $(".search")
          .find("#modify")
          .attr("src", `img/employees/${$(e).attr("data-employee")}.jpg`)
          .animate(
            {
              opacity: 1,
              left: byData.parent().width() / 2 - byData.width() / 2,
            },
            1000
          );

        $(".search")
          .find("#modify")
          .attr("src", `img/employees/${$(e).attr("data-employee")}.jpg`)
          .fadeIn(500);
      } else if ($(target).hasClass("right")) {
        return;
      } else if ($(target).hasClass("left")) {
        return;
      } else {
        $(e).next().removeClass("active-employee").animate({ top: "0px" }, 300);

        $(".search")
          .find(`[data-employee='${$(e).attr("data-employee")}']`)
          .addClass("hidden-employee")
          .animate({ opacity: 0, left: "0px" }, "slow");
      }
    });

    if ($(target).hasClass("right")) {
      let emp = $(".employer");

      for (let i = 0; i < emp.length; i++) {
        if ($(emp[i]).children().hasClass("active-employee")) {
          if ($(emp[i]).next().hasClass("next-btn")) {
            return;
          } else {
            $(emp[i]).find("img").removeClass("active-employee");

            let current = $(emp[i]).next().find("button");

            let last = $(emp[i]).find("button");

            let currentData = $(".search").find(
              `[data-employee='${$(current).attr("data-employee")}']`
            );

            let lastData = $(".search").find(
              `[data-employee='${$(last).attr("data-employee")}']`
            );
            $(currentData).animate(
              {
                opacity: 0,
              },
              0
            );

            $(lastData).removeClass("hidden-employee").animate(
              {
                opacity: 0,
                left: "0px",
              },
              1000
            );

            $(currentData)
              .removeClass("hidden-employee")
              .animate(
                {
                  opacity: 1,
                  left:
                    currentData.parent().width() / 2 - currentData.width() / 2,
                },
                1000
              );

            $(lastData).addClass("hidden-employee");

            $(".search")
              .find("#modify")
              .attr(
                "src",
                `img/employees/${$(current).attr("data-employee")}.jpg`
              );

            $(emp[i])
              .next()
              .find("img")
              .addClass("active-employee")
              .css({ top: "0px" })
              .animate({ top: "-8px" });

            break;
          }
        }
      }
    }
    if ($(target).hasClass("left")) {
      let emp = $(".employer");

      for (let i = 0; i < emp.length; i++) {
        if ($(emp[i]).children().hasClass("active-employee")) {
          if ($(emp[i]).prev().hasClass("next-btn")) {
            return;
          } else {
            $(emp[i]).find("img").removeClass("active-employee");

            let current = $(emp[i]).prev().find("button");

            let last = $(emp[i]).find("button");

            let currentData = $(".search").find(
              `[data-employee='${$(current).attr("data-employee")}']`
            );

            let lastData = $(".search").find(
              `[data-employee='${$(last).attr("data-employee")}']`
            );

            $(lastData).removeClass("hidden-employee").animate(
              {
                opacity: 0,
                left: "0px",
              },
              1000
            );

            $(currentData)
              .removeClass("hidden-employee")
              .animate(
                {
                  opacity: 1,
                  left:
                    currentData.parent().width() / 2 - currentData.width() / 2,
                },
                1000
              );

            $(lastData).addClass("hidden-employee");

            $(".search")
              .find("#modify")
              .attr(
                "src",
                `img/employees/${$(current).attr("data-employee")}.jpg`
              );

            $(emp[i])
              .prev()
              .find("img")
              .addClass("active-employee")
              .css({ top: "0px" })
              .animate({ top: "-8px" });

            break;
          }
        }
      }
    }
  });

  $(".load-more2").click(function () {
    $(".hidden-grid-item").removeClass();
    $(".main-posts-list").css("height", "1580px").slideDown(1000);

    // $(".load-elements").slideDown(1000);
    // $(".load-elements").fadeIn(500);
    $(".load-more2").remove();
  });
});

$(document).ready(function () {
  $(".masonry").masonry({
    itemSelector: ".masonry-item",
    columnWidth: ".masonry-sizer",
    percentPosition: true,
    gutter: 13,
  });

  $(".sub-masonry").masonry({
    itemSelector: ".sub-masonry-item",
    columnWidth: ".sub-masonry-sizer",
    percentPosition: true,
    gutter: 1,
  });
});
