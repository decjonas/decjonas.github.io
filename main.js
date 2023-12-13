const avatar = document.getElementById("avatar");
const header = document.getElementById("header");

window.addEventListener("scroll", () => {
  const av = 1 - window.scrollY / 250;
  const hv = window.scrollY / 100;

  if (av > .35) {
    avatar.style.scale = av;
  } else {
    avatar.style.scale = ".35";
  };

  header.style.opacity = hv;
});