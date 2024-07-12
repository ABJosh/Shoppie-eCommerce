'use strict'; // Use strict mode to enforce secure coding practices

/**
 * Mobile navbar toggle
 */

// Select the navbar element using its data attribute
const navbar = document.querySelector("[data-navbar]");

// Select the navbar toggle button using its data attribute
const navToggler = document.querySelector("[data-nav-toggler]");

// Add a click event listener to the toggle button
navToggler.addEventListener("click", function () {
  // Toggle the 'active' class on the navbar to show/hide it
  navbar.classList.toggle("active");
});

/**
 * Header active
 */

// Select the header element using its data attribute
const header = document.querySelector("[data-header]");

// Add a scroll event listener to the window
window.addEventListener("scroll", function () {
  // Add or remove the 'active' class on the header based on scroll position
  header.classList[this.scrollY > 50 ? "add" : "remove"]("active");
});
