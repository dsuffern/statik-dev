/*
 * Main JavaScript File
 * Initialize Plugins & Add Scripts
 * 
 */
'use strict';

// Gumshoe Initialization
// ==========================================
gumshoe.init();

// smoothScroll Initialization
// ==========================================
smoothScroll.init({
    selector: '[data-scroll]', // Selector for links (must be a class, ID, data attribute, or element tag)
    selectorHeader: null, // Selector for fixed headers (must be a valid CSS selector) [optional]
    speed: 500, // Integer. How fast to complete the scroll in milliseconds
    easing: 'easeInOutCubic', // Easing pattern to use
    offset: 0, // Integer. How far to offset the scrolling anchor location in pixels
    callback: function(anchor, toggle) {} // Function to run after scrolling
});

// Particles Setting & Initialization
// ==========================================
window.onload = function() {
    Particles.init({
        selector: '#particle-canvas',
        color: '#ffffff',
        connectParticles: true,
        minDistance: 140,
        maxParticles: 100,
        sizeVariations: 3,
        speed: 0.6
    });
};

/*
 * Bottom bar music player
 * Borrowed from Codepen.io
 */

//     // Declare Variables
//     let music = document.getElementById("music");
//     let playButton = document.getElementById("play");
//     let pauseButton = document.getElementById("pause");
//     let playhead = document.getElementById("elapsed");
//     let timeline = document.getElementById("slider");
//     let timer = document.getElementById("timer");
//     let duration;

//     pauseButton.style.visibility = "hidden";

//     let timelineWidth = timeline.offsetWidth - playhead.offsetWidth;

//     music.addEventListener("timeupdate", timeUpdate, false);

//     function timeUpdate() {
//         let playPercent = timelineWidth * (music.currentTime / duration);
//         playhead.style.width = playPercent + "px";

//         let secondsIn = Math.floor(((music.currentTime / duration) / 3.5) * 100);
//         if (secondsIn <= 3) {
//             timer.innerHTML = "0:0" + secondsIn;
//         } else {
//             timer.innerHTML = "0:" + secondsIn;
//         }
//     }

//     playButton.onclick = () => {
//         music.play();
//         playButton.style.visibility = "hidden";
//         pauseButton.style.visibility = "visible";
//     };

//     pauseButton.onclick = () => {
//         music.pause();
//         playButton.style.visibility = "visible";
//         pauseButton.style.visibility = "hidden";
//     };

//     music.addEventListener("canplaythrough", () => {
//         duration = music.duration;
//     }, false);
// })();


(function() {
    // Declare Variables
    var music = document.getElementById("music");
    var playButton = document.getElementById("play");
    var pauseButton = document.getElementById("pause");
    var playhead = document.getElementById("elapsed");
    var timeline = document.getElementById("slider");
    var timer = document.getElementById("timer");
    var duration = void 0;

    pauseButton.style.visibility = "hidden";

    var timelineWidth = timeline.offsetWidth - playhead.offsetWidth;

    music.addEventListener("timeupdate", timeUpdate, false);

    function timeUpdate() {
        var playPercent = timelineWidth * (music.currentTime / duration);
        playhead.style.width = playPercent + "px";

        var secondsIn = Math.floor(music.currentTime / duration / 3.5 * 100);
        if (secondsIn <= 3) {
            timer.innerHTML = "0:0" + secondsIn;
        } else {
            timer.innerHTML = "0:" + secondsIn;
        }
    }

    playButton.onclick = function() {
        music.play();
        playButton.style.visibility = "hidden";
        pauseButton.style.visibility = "visible";
    };

    pauseButton.onclick = function() {
        music.pause();
        playButton.style.visibility = "visible";
        pauseButton.style.visibility = "hidden";
    };

    music.addEventListener("canplaythrough", function() {
        duration = music.duration;
    }, false);
})();