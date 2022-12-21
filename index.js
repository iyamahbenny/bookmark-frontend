const mobilenav = () => {
  const nav = document.getElementById("mobilenav");
  if (!nav.style.opacity || nav.style.opacity == 0) {
    nav.style.opacity = 1;
  } else {
    nav.style.opacity = 0;
  }
};

const tabFunc = (number) => {
  const tabPanes = document.getElementsByClassName("tab-pane");
  const navLinks = document.getElementsByClassName("nav-link");
  for (let el of navLinks) {
    el.classList.remove("tabActive");
    el.classList.remove("active");
  }
  for (let el2 of tabPanes) {
    el2.classList.remove("active");
  }
  navLinks[number - 1].classList.add("tabActive");
  navLinks[number - 1].classList.add("active");
  tabPanes[number - 1].classList.add("active");
};

const checkinput = () => {
  const input = document.getElementById("email");
  if (!input.value) {
    input.style.borderColor = "hsl(0, 94%, 66%)";
    document.getElementsByClassName("erroricon")[0].style.display = "block";
  }
};
