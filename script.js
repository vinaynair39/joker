const jokeButton = document.getElementById("button");

// VoiceRSS Javascript SDK

function toggleButton() {
	jokeButton.disabled = !jokeButton.disabled;
}
async function getJokes() {
	toggleButton();
	const apiUrl = "https://sv443.net/jokeapi/v2/joke/Programming";
	try {
		const response = await fetch(apiUrl);
		const data = await response.json();
		responsiveVoice.speak(data.joke, "Hindi Female", { onend: toggleButton });
	} catch (error) {
		console.log("getJokes", error);
	}
}

jokeButton.addEventListener("click", getJokes);
