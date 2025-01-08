// JavaScript for Video and Subtitles
document.getElementById('video-with-subtitles').addEventListener('timeupdate', function () {
    let currentTime = this.currentTime;

    // Example subtitle data, this should be replaced with actual subtitle data
    let subtitles = [
        { time: 1, text: 'Hello, welcome to the course!' },
        { time: 5, text: 'This video will explain accessibility features.' },
        { time: 10, text: 'Please follow along and use the subtitles.' },
    ];

    let subtitleText = subtitles.filter(sub => sub.time <= currentTime)
                                 .map(sub => sub.text)
                                 .join('<br>');

    // Update the subtitle columns dynamically
    document.getElementById('subtitle-column1').innerHTML = subtitleText;
    document.getElementById('subtitle-column2').innerHTML = subtitleText;
    document.getElementById('subtitle-column3').innerHTML = subtitleText;
});
// JavaScript for scroll effects and making elements visible on scroll
window.addEventListener('scroll', () => {
    const elements = document.querySelectorAll('.service-card'); // Target all service cards
    const windowHeight = window.innerHeight;

    elements.forEach(element => {
        const position = element.getBoundingClientRect().top;

        // Check if the element is in the viewport
        if (position < windowHeight - 150) {
            element.classList.add('visible'); // Add the 'visible' class to trigger the effect
        }
    });
});
// JavaScript to handle Text-to-Speech (TTS) functionality
document.getElementById('speak-btn').addEventListener('click', function() {
    // Get the text from the textarea
    const text = document.getElementById('text-input').value;

    // Check if text is empty
    if (text === "") {
        alert("Please enter some text.");
        return;
    }

    // Create a new SpeechSynthesisUtterance object
    const speech = new SpeechSynthesisUtterance(text);
    
    // Set the language and other properties
    speech.lang = "en-US"; // You can change the language if needed
    speech.volume = 1; // Volume: 0 to 1
    speech.rate = 1; // Rate: 0.1 to 10 (1 is normal speed)
    speech.pitch = 1; // Pitch: 0 to 2 (1 is normal)

    // Speak the text
    window.speechSynthesis.speak(speech);
});
