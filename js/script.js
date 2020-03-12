function scrollToSection(event, section) {
  event.preventDefault();
  let el = document.getElementById(section);
  el.scrollIntoView();
}
