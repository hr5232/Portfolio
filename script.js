// JavaScript for Contact Form Submission
document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent form from submitting
  alert("Thank you! Your message has been sent.");
  this.reset(); // Clear the form
});
// JavaScript to trigger animation every 2 seconds
document.addEventListener("DOMContentLoaded", function () {
  const heroName = document.querySelector(".hero-name");

  setInterval(() => {
    heroName.classList.remove("fly");
    // Trigger reflow so that animation plays again
    void heroName.offsetWidth; // This forces a reflow
    heroName.classList.add("fly");
  }, 2000); // 2 seconds interval
});

document.getElementById("view-more").addEventListener("click", function () {
  const moreProjects = document.querySelector(".more-projects-grid");
  moreProjects.classList.toggle("hidden");
  moreProjects.classList.toggle("visible");
  this.textContent = moreProjects.classList.contains("hidden")
    ? "View More"
    : "View Less";
});
