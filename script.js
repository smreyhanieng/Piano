const note = document.querySelector('.nowPlaying');
const keys = document.querySelectorAll('.key');
const hints = document.querySelectorAll('.hints');

window.addEventListener('keydown', function (e) {
	const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
	console.log(e.keyCode);
	if (!key) return;
	const keyNote = key.getAttribute('data-note');
	key.classList.add('playing');
	note.innerHTML = keyNote;

	const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
	audio.currentTime = 0;
	audio.play();
});

function removeTransition() {
	this.classList.remove('playing');
}

hints.forEach(function (elm, index) {
	elm.setAttribute('style', `transition-delay: ${index * 50}ms`);
});

keys.forEach((key) => key.addEventListener('transitionend', removeTransition));
