  // Toggle the dropdown menu on mobile when hamburger is clicked
  const hamburger = document.getElementById('hamburger');
  const dropdown = document.getElementById('dropdown');

  hamburger.addEventListener('click', () => {
    dropdown.classList.toggle('active');

  });




const carousel = document.getElementById('carousel');
let scrollPosition = 0;

// Function to scroll the carousel
function scrollCarousel(direction) {
  const productWidth = document.querySelector('.product').offsetWidth;
  const visibleProducts = window.innerWidth > 768 ? 5 : 2; // Show 6 products on large screens, 3 on smaller screens
  const maxScrollPosition = carousel.scrollWidth - (productWidth * visibleProducts);

  scrollPosition += direction * productWidth;

  // Prevent scrolling beyond the first or last product
  if (scrollPosition < 0) {
    scrollPosition = 0;
  } else if (scrollPosition > maxScrollPosition) {
    scrollPosition = maxScrollPosition;
  }

  carousel.style.transform = `translateX(-${scrollPosition}px)`;
}
