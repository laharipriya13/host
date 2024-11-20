let lastScrollTop = 0;
    const navbar = document.querySelector('nav');

    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        if (scrollTop > lastScrollTop) {
            // Scrolling down
            navbar.classList.add('hidden');
        } else {
            // Scrolling up
            navbar.classList.remove('hidden');
        }
        
        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; 
    }); 
    const customCursor = document.getElementById('custom-cursor');

    // Track mouse movement and animate the custom cursor position
    document.addEventListener('mousemove', (e) => {
        gsap.to(customCursor, {
            x: e.pageX, 
            y: e.pageY, 
            duration: 0.1,
            ease: "power2.out"
        });
    });

    // Add hover effects for clickable elements
    document.querySelectorAll('a, button').forEach((element) => {
        element.addEventListener('mouseenter', () => {
            gsap.to(customCursor, {
                height: 50,
                width: 50,
                backgroundColor: "transparent",
                borderColor: "#461986",
                duration: 0.3
            });
        });

        element.addEventListener('mouseleave', () => {
            gsap.to(customCursor, {
                height: 10,
                width: 10,
                backgroundColor: "#ec722b",
                borderColor: "transparent",
                duration: 0.3
            });
        });
    });


// Function to animate the lines when the About Us section is in view
function animateLines(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Show and animate the lines when About Us section is in view
            document.querySelectorAll('.animated-line').forEach(line => {
                line.style.opacity = '1';
                line.style.transform = 'scale(1)';
            });
        } else {
            // Reset the lines when About Us section is not in view
            document.querySelectorAll('.animated-line').forEach(line => {
                line.style.opacity = '0';
                line.style.transform = 'scale(0)';
            });
        }
    });
}


// Select the About Us section for observing
const aboutSection = document.querySelector('.about-div');

// Create an Intersection Observer to track when the About Us section is in view
const observer = new IntersectionObserver(animateLines, {
    threshold: 0.95  
});

// Start observing the About Us section
observer.observe(aboutSection);

document.addEventListener("DOMContentLoaded", function() {
    const missionButton = document.querySelector(".mission-button");
    const visionButton = document.querySelector(".vision-button");
    const missionDiv = document.getElementById("mission");
    const visionDiv = document.getElementById("vision");

    // Toggle mission visibility
    missionButton.addEventListener("click", function() {
        if (missionDiv.style.display === "none" || missionDiv.style.display === "") {
            missionDiv.style.display = "block";
            visionDiv.style.display = "none"; 
        } else {
            missionDiv.style.display = "none"; 
        }
        
        
    });

    // Toggle vision visibility
    visionButton.addEventListener("click", function() {
        if (visionDiv.style.display === "none" || visionDiv.style.display === "") {
            visionDiv.style.display = "block";
            missionDiv.style.display = "none"; 
        } else {
            visionDiv.style.display = "none"; 
        }
        
        
    });
});
