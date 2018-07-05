document.addEventListener('DOMContentLoaded', function() {

    // Get all "navbar-burger" elements
    var $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

    // Check if there are any navbar burgers
    if ($navbarBurgers.length > 0) {

        // Add a click event on each of them
        $navbarBurgers.forEach(function($el) {
            $el.addEventListener('click', function() {

                // Get the target from the "data-target" attribute
                var target = $el.dataset.target;
                var $target = document.getElementById(target);

                // Toggle the class on both the "navbar-burger" and the "navbar-menu"
                $el.classList.toggle('is-active');
                $target.classList.toggle('is-active');

            });
        });
    }

});

//
//
//  Code taken from -> http://jsfiddle.net/XwzJs/13/
//
//

var last = 0, // The last read top value
    delay = 150, // The delay for the setInterval
    threshold = 30; // The max scroll distance before showing/hiding the nav

// I always set a variable to my setIntervals in case I want to stop them later on
var navMovement = setInterval(function() {
    var nav = document.querySelector('nav'), // Gets nav object
        pageVertOffset = document.all ? iebody.scrollTop : pageYOffset;
    if (pageVertOffset - last < -threshold) { // Happens if the difference in scroll is below the negative threshold
        nav.style.top = "0px"; // Put the nav at the top of the window
    } else if (pageVertOffset - last > threshold) { // Happend if the difference in scroll is above the threshold
        nav.style.top = -nav.offsetHeight + "px"; // Hides the navigation
    }
    last = pageVertOffset; // Updates the previous scroll value
}, delay); // Runs every `delay` amount

//
// END
//