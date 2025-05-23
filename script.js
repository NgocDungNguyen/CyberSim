// Dark mode toggle
const darkModeToggle = document.getElementById('darkModeToggle');
const html = document.documentElement;

function setDarkMode(isDark) {
    if (isDark) {
        html.classList.add('dark');
        if (darkModeToggle) {
            darkModeToggle.innerHTML = '<i class="fas fa-sun text-yellow-300"></i>';
        }
    } else {
        html.classList.remove('dark');
        if (darkModeToggle) {
            darkModeToggle.innerHTML = '<i class="fas fa-moon text-gray-600"></i>';
        }
    }
    localStorage.setItem('darkMode', isDark);
}

if (darkModeToggle) {
    darkModeToggle.addEventListener('click', () => {
        setDarkMode(!html.classList.contains('dark'));
    });
}

// Check for saved dark mode preference or system preference
if (localStorage.getItem('darkMode') === 'true' || 
    (localStorage.getItem('darkMode') === null && 
     window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    setDarkMode(true);
} else {
    setDarkMode(false);
}

// Mobile menu
const mobileMenuButton = document.getElementById('mobileMenuButton');
const mobileMenu = document.getElementById('mobileMenu');

if (mobileMenuButton && mobileMenu) {
    mobileMenuButton.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });
}

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1); // Remove the '#'
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        } else {
            // If the target element doesn't exist on this page, you might want to handle it differently
            // For example, you could navigate to the page containing that section
            window.location.href = 'index.html' + this.getAttribute('href');
        }
    });
});

// Case study collapsible functionality
const caseStudies = document.querySelectorAll('.bg-white.dark\\:bg-gray-800');
if (caseStudies.length > 0) {
    caseStudies.forEach(caseStudy => {
        const title = caseStudy.querySelector('h3');
        const content = caseStudy.querySelector('p + ul');
        if (title && content) {
            content.style.display = 'none';
            
            title.addEventListener('click', () => {
                content.style.display = content.style.display === 'none' ? 'block' : 'none';
                title.classList.toggle('text-blue-500');
            });
            
            title.style.cursor = 'pointer';
            title.innerHTML += ' <i class="fas fa-chevron-down ml-2"></i>';
        }
    });
}


