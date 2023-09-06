"use strict";

var videos = document.querySelectorAll(".video");
videos.forEach(function (video, index) {
  video.addEventListener("ended", function () {
    video.pause();
    video.style.display = "none";
    if (index < videos.length - 1) {
      videos[index + 1].style.display = "block";
      videos[index + 1].play();
    } else {
      videos[0].style.display = "block";
      videos[0].play();
    }
  });
});
