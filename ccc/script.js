document.addEventListener("DOMContentLoaded", function () {
  const boxes = document.querySelectorAll(".join-now1 .box");
  const shadows = document.querySelectorAll(".join-now1 .shadow");
  const faqItems = document.querySelectorAll(".faq-item");

  faqItems.forEach((item) => {
    item.querySelector(".faq-question").addEventListener("click", function () {
      // Close any currently open FAQ item
      faqItems.forEach((el) => {
        if (el !== item) {
          el.classList.remove("active");
          const answer = el.querySelector(".faq-answer");
          answer.style.maxHeight = "0";
          answer.style.opacity = "0";
        }
      });

      // Toggle the clicked FAQ item
      item.classList.toggle("active");
      const answer = item.querySelector(".faq-answer");
      if (item.classList.contains("active")) {
        answer.style.maxHeight = answer.scrollHeight + "px";
        answer.style.opacity = "1";
      } else {
        answer.style.maxHeight = "0";
        answer.style.opacity = "0";
      }
    });
  });
  
  boxes.forEach((box, index) => {
    box.addEventListener("mouseenter", function () {
      shadows[index].style.transform = "scale(1)";
    });

    box.addEventListener("mouseleave", function () {
      shadows[index].style.transform = "scale(0.9)";
    });
  });
});
