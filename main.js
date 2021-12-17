// keep reference to previously opened accordion
let openedAccordion = null;

document.querySelectorAll(".btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    // grap btn parent element to be able to toogle .active
    // class on it which toogles .answer`s display property
    // using the sibling selector in css
    let accordion = btn.parentElement
    // toggle active class if the same opened accordion is clicked again
    if (openedAccordion === accordion) {
      accordion.classList.toggle("active");
      return;
    }
    openedAccordion?.classList.remove("active");
    openedAccordion = accordion;
    accordion.classList.add("active");
  });
});