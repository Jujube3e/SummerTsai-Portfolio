/* Open */
function openNav() {
  document.getElementById("myNav").style.height = "100%";
}

/* Close */
function closeNav() {
  document.getElementById("myNav").style.height = "0%";
}

const fadeInElements = document.querySelectorAll(".fade-in-text");

// Define options for the observer (e.g., when 10% of the element is visible)
const appearOptions = {
  root: null, // defaults to the viewport
  rootMargin: "0px",
  threshold: 0.1, // fires when 10% of the element is visible
};

// Callback function to run when the conditions are met
const appearOnScroll = new IntersectionObserver(function (
  entries,
  appearOnScroll
) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return; // If not intersecting, do nothing
    } else {
      entry.target.classList.add("appear"); // Add the 'appear' class
      appearOnScroll.unobserve(entry.target); // Stop observing after the animation triggers once
    }
  });
},
appearOptions);

// Observe each element
fadeInElements.forEach((element) => {
  appearOnScroll.observe(element);
});
