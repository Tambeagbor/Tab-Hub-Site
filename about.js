// Speech Synthesis
const subtitles = document.getElementById('subtitles');
const muteButton = document.getElementById('mute-button');
let isMuted = false;

// Japanese translation of the subtitle text
const japaneseText = "こんにちは！私は高木さんです。タボットのソフトウェアエンジニアとしての旅についてお話しします。";

// Function to speak the text
function speakJapanese(text) {
    if (isMuted) return; // Do nothing if muted

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'ja-JP'; // Set language to Japanese
    utterance.rate = 1.1; // Slightly faster speech
    utterance.pitch = 1.2; // Higher pitch for a schoolgirl-like voice

    // Find a Japanese female voice
    const voices = speechSynthesis.getVoices();
    const japaneseFemaleVoice = voices.find(voice => 
        voice.lang === 'ja-JP' && voice.name.toLowerCase().includes('female')
    );

    if (japaneseFemaleVoice) {
        utterance.voice = japaneseFemaleVoice; // Set the voice
    }

    // Show subtitles as she speaks
    subtitles.innerHTML = ''; // Clear previous subtitles
    subtitles.classList.add('visible');

    const englishText = "Hi! I'm Tagaki San, and I'm here to tell you about Tabot's journey as a software engineer.";
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
    muteButton.textContent = isMuted ? "Unmute Tagaki" : "Mute Tagaki";
    if (isMuted) {
        speechSynthesis.cancel(); // Stop speaking if muted
    }
});

// Ensure voices are loaded before speaking
window.speechSynthesis.onvoiceschanged = () => {
    speakJapanese(japaneseText);
};

