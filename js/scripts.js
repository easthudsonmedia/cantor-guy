/*!
 * Start Bootstrap - Grayscale v7.0.4 (https://startbootstrap.com/theme/grayscale)
 * Copyright 2013-2021 Start Bootstrap
 * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-grayscale/blob/master/LICENSE)
 */
//
// Scripts
//

window.addEventListener("DOMContentLoaded", (event) => {
  // Navbar shrink function
  var navbarShrink = function () {
    const navbarCollapsible = document.body.querySelector("#mainNav");
    if (!navbarCollapsible) {
      return;
    }
    if (window.scrollY === 0) {
      navbarCollapsible.classList.remove("navbar-shrink");
    } else {
      navbarCollapsible.classList.add("navbar-shrink");
    }
  };

  // Shrink the navbar
  navbarShrink();

  // Shrink the navbar when page is scrolled
  document.addEventListener("scroll", navbarShrink);

  // Activate Bootstrap scrollspy on the main nav element
  const mainNav = document.body.querySelector("#mainNav");
  if (mainNav) {
    new bootstrap.ScrollSpy(document.body, {
      target: "#mainNav",
      offset: 74,
    });
  }

  // Collapse responsive navbar when toggler is visible
  const navbarToggler = document.body.querySelector(".navbar-toggler");
  const responsiveNavItems = [].slice.call(
    document.querySelectorAll("#navbarResponsive .nav-link")
  );
  responsiveNavItems.map(function (responsiveNavItem) {
    responsiveNavItem.addEventListener("click", () => {
      if (window.getComputedStyle(navbarToggler).display !== "none") {
        navbarToggler.click();
      }
    });
  });
});

function configureAnimation(className) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add(className + '-transition');
      }
    });
  });
  observer.observe(document.querySelector('.' + className));
}


function configureAnimationV2(className) {
    const formattedClassName = "." + className;
    const transitionClassName = className + "-transition";
  
    // Remove the transition class
    const element = document.querySelector(formattedClassName);
    element.classList.remove(transitionClassName);
  
    // Create the intersection observer:
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          element.classList.add(transitionClassName);
          return;
        }
        // element.classList.remove(transitionClassName);
      });
    });
  
    observer.observe(document.querySelector(formattedClassName));
  }

const animationClasses = ["services", "bio", 'chariot', 'dream', 'blog1', 'blog2', 'blog3'];

animationClasses.forEach((className) => {
  configureAnimation(className + '-animation');
});
