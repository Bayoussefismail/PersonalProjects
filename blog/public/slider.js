let sliderImages = document.querySelectorAll(".slide"),
  arrowLeft = document.querySelector(".arrow1"),
  arrowRight = document.querySelector(".arrow"),
  current = sliderImages.length;


// animations closing
  function close() {
    $(".namesteven").addClass("slidedown");
    $(".namebarbara").addClass("slidedown");
    $("#bigshit2").addClass("moveleft");
    $(".specialbarb").addClass("closeanim1");
    $(".specialsteven").addClass("closeanim2");
  };
// Clear all images
function reset() {
  $(".namesteven").removeClass("slidedown");
  $(".namebarbara").removeClass("slidedown");
  $(".specialbarb").removeClass("closeanim1");
  $(".specialsteven").removeClass("closeanim2");
  for (let i = 0; i < sliderImages.length; i++) {
    sliderImages[i].style.display = "none";
  }
};
// Init slider
function startSlide() {
  reset();
  sliderImages[0].style.display = "block";
};
// Show prev
function slideLeft() {
  close();
  setTimeout(function() {
    $(".namesteven").removeClass("slidedown");
    $(".namebarbara").removeClass("slidedown");
    $(".specialbarb").removeClass("closeanim1");
    $(".specialsteven").removeClass("closeanim2");
    $(".specialbarb").removeClass("appear4");
    for (let i = 0; i < sliderImages.length; i++) {
      sliderImages[i].style.display = "none";
    };
    sliderImages[0].style.display = "block";
  }, 5000, closingdone = true);
};
// Show next
function slideRight() {
  close();
  setTimeout(function() {
    $(".namesteven").removeClass("slidedown");
    $(".namebarbara").removeClass("slidedown");
    $(".specialbarb").removeClass("closeanim1");
    $(".specialsteven").removeClass("closeanim2");
    $(".specialbarb").removeClass("appear4");
    for (let i = 0; i < sliderImages.length; i++) {
      sliderImages[i].style.display = "none";
    };
    sliderImages[1].style.display = "block";
  }, 5000, closingdone = true);
};
// Left arrow click

$(".arrow1").on("click", function() {
  if (current === 0) {
    alert('cant go further')
  } else {
    slideLeft();
  }
});
// Right arrow click
$(".arrow").on("click", function() {
  if (sliderImages.length == 1) {
    $(".arrow").unbind("click")
  } else {
    slideRight();
  }
});
startSlide();
