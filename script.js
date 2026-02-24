let slides = [
  {
    image: "./images/newsimage20.png",
    btnText: "FOOTBALL",
    PText:
      "Tourmnait canceled because COVID-19, and indonisa stay safed and health",
  },
  {
    image: "./images/newsimage1.png",
    btnText: "SPORTS",
    PText:
      "Team Sedanj Melakukan sesi Foto untuck majalah dan.",
  },
];
let index = 0;
function nextSlide() {
  index++;

  if (index >= slides.length) {
    index = 0;
  }

  document.querySelector(".main-content-header").style.backgroundImage =
    "url('" + slides[index].image + "')";
  document.querySelector(".main-p").innerHTML = slides[index].PText;
  document.querySelector(".m-btn").innerHTML = slides[index].btnText;
}
setInterval(nextSlide, 1000);
function prevSlide() {
  index--;

  if (index < 0) {
    index = slides.length - 1;
  }

  document.querySelector(".main-content-header").style.backgroundImage =
    "url('" + slides[index].image + "')";
  document.querySelector(".main-p").innerHTML = slides[index].PText;
}

