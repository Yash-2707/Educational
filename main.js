const nav = document.querySelector("nav");

window.addEventListener("scroll", () => {
    if (window.scrollY > 0) {
        nav.style.backgroundColor = "#6c63ff";
    } else {
        nav.style.backgroundColor = "transparent"; // Reset to original color if no scroll
    }
});

const faqs = document.querySelectorAll('.faq');

faqs.forEach(faq => {
    faq.addEventListener("click", () => {
        faq.classList.toggle("open");
//If the element does not have the open class, it is added.
//If the element already has the open class, it is removed.

        // Change the icon
        const icon = faq.querySelector('.faqs_icon i');
        if (icon.classList.contains("fa-plus")) {
            icon.classList.remove("fa-plus");
            icon.classList.add("fa-minus");
        } else {
            icon.classList.remove("fa-minus");
            icon.classList.add("fa-plus");
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const menuBtn = document.getElementById('open-menu-btn');
    const closeBtn = document.getElementById('close-menu-btn');
    const navMenu = document.querySelector('.nav_menu');
  
    menuBtn.addEventListener('click', () => {
      navMenu.classList.add('open');
    });
  
    closeBtn.addEventListener('click', () => {
      navMenu.classList.remove('open');
    });
  
    const navLinks = document.querySelectorAll('.nav_menu a');
  
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('open');
      });
    });
  });
  
//.far and eventlistener same hona chahiye
