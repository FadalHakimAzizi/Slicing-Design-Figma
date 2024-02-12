window.addEventListener("resize", function () {
  let screenWidth = window.innerWidth;
  let teks1 = document.getElementById("teks1");
  if (screenWidth <= 576) {
    teks1.textContent = "Visual Designer";
  } else {
    teks1.textContent = "My awesome portfolio";
  }
});

window.addEventListener("resize", function () {
  let screenWidth = window.innerWidth;
  let teks2 = document.getElementById("teks2");
  if (screenWidth <= 576) {
    teks2.textContent = "This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com";
  } else {
    teks2.textContent = "And I made it myself! Yes. In Figma with Anima";
  }
});
