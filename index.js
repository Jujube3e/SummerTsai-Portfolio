function openNav() {
  document.getElementById("myNav").style.height = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.height = "0%";
}

const fadeInElements = document.querySelectorAll(".fade-in-text");

const appearOptions = {
  root: null,
  rootMargin: "0px",
  threshold: 0.1,
};

const appearOnScroll = new IntersectionObserver(function (
  entries,
  appearOnScroll
) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.add("appear");
      appearOnScroll.unobserve(entry.target);
    }
  });
},
appearOptions);

fadeInElements.forEach((element) => {
  appearOnScroll.observe(element);
});
