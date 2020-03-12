window.onscroll = () => {stickyNav()};

function stickyNav() {
  let el = document.getElementById("about").offsetTop;
  let nav = document.getElementById("navbar");

  if (window.pageYOffset >= el) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

function scrollToSection(event, section) {
  event.preventDefault();
  let el = document.getElementById(section);
  el.scrollIntoView();
}
