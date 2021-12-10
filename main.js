// keep reference to previously opened accordion
let openedAccordion = null;

document.querySelectorAll(".question").forEach((question) => {
  question.addEventListener("click", () => {
    // toggle active class if the same opened accordion is clicked again
    if (openedAccordion === question) {
      question.classList.toggle("active");
      return;
    }
    openedAccordion?.classList.remove("active");
    openedAccordion = question;
    question.classList.add("active");
  });
});