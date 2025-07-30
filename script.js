// Carousel functionality
const images = [
  "https://via.placeholder.com/600x300?text=Slide+1",
  "https://via.placeholder.com/600x300?text=Slide+2",
  "https://via.placeholder.com/600x300?text=Slide+3"
];
let currentSlide = 0;

function updateSlide() {
  document.getElementById("carousel-img").src = images[currentSlide];
}
function nextSlide() {
  currentSlide = (currentSlide + 1) % images.length;
  updateSlide();
}
function prevSlide() {
  currentSlide = (currentSlide - 1 + images.length) % images.length;
  updateSlide();
}

// Form validation
function validateForm() {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!name || !email || !message) {
    alert("Please fill in all fields.");
    return false;
  }
  alert("Form submitted successfully!");
  return true;
}
