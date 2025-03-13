// Speech Synthesis
const subtitles = document.getElementById('subtitles');
const muteButton = document.getElementById('mute-button');
let isMuted = false;

// Japanese translation of the subtitle text
const japaneseText = "こんにちは！私はカカシです。タボットのソフトウェアエンジニアとしての旅についてお話しします。";

// Function to speak the text
function speakJapanese(text) {
    if (isMuted) return; // Do nothing if muted

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'ja-JP'; // Set language to Japanese
    utterance.rate = 1.1; // Slightly faster speech
    utterance.pitch = 0.9; // Lower pitch for a male voice

    // Find a Japanese male voice
    const voices = speechSynthesis.getVoices();
    const japaneseMaleVoice = voices.find(voice => 
        voice.lang === 'ja-JP' && voice.name.toLowerCase().includes('male')
    );

    if (japaneseMaleVoice) {
        utterance.voice = japaneseMaleVoice; // Set the voice
    } else {
        console.warn('Japanese male voice not found. Using default voice.');
    }

    // Show subtitles as he speaks
    subtitles.innerHTML = ''; // Clear previous subtitles
    subtitles.classList.add('visible');

    const englishText = "Hi! I'm Kakashi, and I'm here to tell you about Tabot's journey as a software engineer.";
    let index = 0;

    const interval = setInterval(() => {
        if (index < englishText.length) {
            subtitles.innerHTML += `<span>${englishText[index]}</span>`;
            index++;
        } else {
            clearInterval(interval);
        }
    }, 50); // Adjust speed of subtitle emergence

    speechSynthesis.speak(utterance);
}

// Mute button functionality
muteButton.addEventListener('click', () => {
    isMuted = !isMuted;
    muteButton.textContent = isMuted ? "Unmute Kakashi" : "Mute Kakashi";
    if (isMuted) {
        speechSynthesis.cancel(); // Stop speaking if muted
    }
});

// Ensure voices are loaded before speaking
window.speechSynthesis.onvoiceschanged = () => {
    speakJapanese(japaneseText);
};

