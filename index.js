

    // Define an object to hold the audio files
    var audioFiles = {
        "w": new Audio("/sounds/crash.mp3"),
        "a": new Audio("sounds/kick-bass.mp3"),
        "s": new Audio("sounds/snare.mp3"),
        "d": new Audio("sounds/tom-1.mp3"),
        "j": new Audio("sounds/tom-2.mp3"),
        "k": new Audio("sounds/tom-3.mp3"),
        "l": new Audio("sounds/tom-4.mp3"),
    };

  // Get all buttons on the page
var buttons = document.querySelectorAll(".drum");

// Add an event listener to each button

buttons.forEach(function(button) {

    button.addEventListener("click", function() {

        // Get the innerHTML of the button

        var buttonInnerHTML = this.innerHTML;


        // Get the corresponding audio file path

        var audioPath = audioFiles[buttonInnerHTML];

        // Create an audio element

        var audio = new Audio();

        // Set the audio source

        audio.src = audioPath;

        // Play the audio
        
        audio.play();
    });
});