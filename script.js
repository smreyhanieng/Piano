const note = document.querySelector('.nowPlaying');
const keys = document.querySelectorAll('.key');

window.addEventListener('keydown', function (e) {
	const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
	if (!key) return;
	const keyNote = key.getAttribute('data-note');
	key.classList.add('playing');
	note.innerHTML = keyNote;
});

function removeTransition() {
	this.classList.remove('playing');
}

keys.forEach((key) => key.addEventListener('transitionend', removeTransition));
