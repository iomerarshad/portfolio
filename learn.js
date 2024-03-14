

// JavaScript code in type.js file

// Array of professions
var professions = ["Software Engineer","Freelancer", "Web Developer", "WordPress Developer"];

var currentIndex = 0; // Index to keep track of the current profession
var currentText = ""; // Current text being displayed
var isDeleting = false; // Flag to indicate whether text is being deleted

// Function to update dynamic text
function updateDynamicText() {
    var dynamicPartElement = document.getElementById("dynamic-part");
    if (dynamicPartElement) {
        var word = professions[currentIndex];
        if (!isDeleting) {
            // Add a letter
            currentText = word.substring(0, currentText.length + 1);
        } else {
            // Delete a letter
            currentText = word.substring(0, currentText.length - 1);
        }
        dynamicPartElement.textContent = currentText;
        if (!isDeleting && currentText === word) {
            // If word is fully typed, pause before deleting
            setTimeout(function() {
                isDeleting = true;
            }, 1000);
        } else if (isDeleting && currentText === "") {
            // If word is fully deleted, move to the next word
            currentIndex = (currentIndex + 1) % professions.length;
            isDeleting = false;
        }
    }
}

// Call the function to update the dynamic text
setInterval(updateDynamicText, 100); // Change 200 to the desired typing speed in milliseconds

window.addEventListener('load', function() {
    var heading = document.getElementById('animation-text');
    heading.classList.add('slide-in');
});

document.addEventListener('DOMContentLoaded', function() {
    const cursor = document.querySelector('.cursor');

    document.addEventListener('mousemove', function(e) {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
    });

    const headingsAndImages = document.querySelectorAll('h1, h2, h3, h4, h5, h6, img, p, span, i, a, button, li');

    headingsAndImages.forEach(element => {
        element.addEventListener('mouseover', function() {
            cursor.style.backgroundColor = 'transparent'; // Change cursor color to white
            cursor.style.borderColor = 'white'; // Set cursor border color to green
            
        });
        element.addEventListener('mouseout', function() {
            cursor.style.backgroundColor = 'white'; // Change cursor color back to red when not hovering
        });
    });
    
});



const scroll = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true,
    lerp: 0.06
});
