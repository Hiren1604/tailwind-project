const navDialog = document.querySelector("#nav-dialog");
function handleMenu() {
    navDialog.classList.toggle("hidden");
}

const initialTranslateLTR = -48 * 4;
const initialTranslateRTL = 36 * 4;

function setupIntersectionObserver(element, isLTR, speed) {
    // Intersection observer callback
    const intersectionCallback = (entries) => {
        const isIntersecting = entries[0].isIntersecting;
        if (isIntersecting) {
            document.addEventListener("scroll", scrollHandler);
        } else {
            document.removeEventListener("scroll", scrollHandler);
        }
    };

    // Create IntersectionObserver (note the capital I)
    const intersectionObserver = new IntersectionObserver(intersectionCallback);
    intersectionObserver.observe(element);

    // Scroll handler for translating the element
    function scrollHandler() {
        // Calculate translateX based on the element's vertical position
        const translateX = (window.innerHeight - element.getBoundingClientRect().top) * speed;

        let totalTranslate = 0;
        // Apply transform based on the scroll direction
        if (isLTR) {
            totalTranslate = translateX + initialTranslateLTR;
        } else {
            totalTranslate = -(translateX + initialTranslateRTL);
        }

        // Correct the typo: use totalTranslate instead of totalTranslateX
        element.style.transform = `translateX(${totalTranslate}px)`;
    }
}

// Example usage with elements
const line1 = document.getElementById("line-1");
const line2 = document.getElementById("line-2");
const line3 = document.getElementById("line-3");
const line4 = document.getElementById("line-4");

// Setup observers for elements with direction and speed
setupIntersectionObserver(line1, true, 0.15);  // Left to Right
setupIntersectionObserver(line2, false, 0.15); // Right to Left
setupIntersectionObserver(line3, true, 0.15);  // Left to Right
setupIntersectionObserver(line4, true, 0.4);  // Left to Right


const dtEls = document.querySelectorAll("dt");
dtEls.forEach(element => {
    element.addEventListener("click", () => {
        const ddId = element.getAttribute("aria-controls");
        const ddEl = document.getElementById(ddId);
        const arrowIcon = element.querySelectorAll("i")[0];
        
        // Toggle the visibility of the content
        ddEl.classList.toggle("hidden");
        
        // Toggle the rotation class for the arrow icon
        arrowIcon.classList.toggle("-rotate-180");
    });
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));
        const offsetPosition = target.offsetTop - document.querySelector('nav').offsetHeight;

        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
    });
});




