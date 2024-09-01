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

// Setup observers for elements with direction and speed
setupIntersectionObserver(line1, true, 0.15);  // Left to Right
setupIntersectionObserver(line2, false, 0.15); // Right to Left
setupIntersectionObserver(line3, true, 0.15);  // Left to Right


