const videos = document.querySelectorAll(".video");

videos.forEach((video, index) => {
  video.addEventListener("ended", () => {
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
