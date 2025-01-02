// Single event listener for form submission
document.querySelector(".contact-form").addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent default form submission

  const myForm = e.target; // Get the form element
  const formData = new FormData(myForm); // Create FormData object

  // Send form data using fetch
  fetch("/", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams(formData).toString(),
  })
    .then(() => {
      alert("Thank you for reaching out! I'll get back to you soon.");
      myForm.reset(); // Reset the form after successful submission
    })
    .catch((error) => alert("Oops! Something went wrong. Please try again."));
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

// Smooth Scroll to Sections
document.querySelectorAll(".navbar a").forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const targetId = link.getAttribute("href").substring(1);
    const targetSection = document.getElementById(targetId);
    targetSection.scrollIntoView({ behavior: "smooth" });
  });
});

// Lightbox functionality for certificates
document.addEventListener("DOMContentLoaded", function () {
  const thumbnails = document.querySelectorAll(".certificate-thumbnail");
  const lightbox = document.getElementById("lightbox");
  const lightboxImage = document.getElementById("lightbox-image");
  const closeLightbox = document.getElementById("close-lightbox");

  // Open Lightbox
  thumbnails.forEach((thumbnail) => {
    thumbnail.addEventListener("click", () => {
      const fullImageSrc = thumbnail.dataset.full;
      lightboxImage.src = fullImageSrc;
      lightbox.classList.add("visible");
    });
  });

  // Close Lightbox
  closeLightbox.addEventListener("click", () => {
    lightbox.classList.remove("visible");
  });

  // Close Lightbox on Outside Click
  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) {
      lightbox.classList.remove("visible");
    }
  });
});
