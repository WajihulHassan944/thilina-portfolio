function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}




  
  
  
  
     // Smooth scrolling between sections
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('nav .nav-links a');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1); // Remove the '#'
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                const offset = 120; // Adjust this value as needed
                const targetPosition = targetSection.offsetTop - offset;
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
});










    const btnColor2 = document.querySelector('.btn-color-2');
    const anchorNav = document.querySelectorAll('a');
    const header = document.getElementById('desktop-nav');
	
    const logo = document.querySelector('.logo');
  
    
	
	
let lastScrollTop = 0;
const homeSection = document.getElementById('profile'); // Assuming the ID of the home section is 'home'
const headerHeightNormal = '11.5vh'; // Normal height of the header
const headerHeightHome = '11.5vh'; // Height of the header when in the home section

const shadowHeader = () => {
    let currentScroll = window.pageYOffset || document.documentElement.scrollTop;
    
    if (currentScroll > lastScrollTop ) {
        // Scrolling down and below the home section, hide the header
        header.style.transform = 'translateY(-100%)';
    } else {
        // Scrolling up or above the home section, show the header
        header.style.transform = 'translateY(0)';
        header.style.position = 'fixed';
        header.style.zIndex = '999';
        header.style.marginTop = '0';
        header.style.width = '100%';
        // Adjust header height based on whether in home section or not
        header.style.height = (currentScroll < homeSection.offsetTop + homeSection.offsetHeight) ? headerHeightHome : headerHeightNormal;
        header.classList.add("shadow-header");
        anchorNav.forEach(anchor => {
            anchor.style.fontSize = '1.2rem'; // Adjust the font size as per your requirement
        });
        logo.style.fontSize = '1.5rem';
    }
    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
};

window.addEventListener('scroll', shadowHeader);




