const note = document.querySelector('.nowPlaying');

window.addEventListener('keydown', function (e) {
	const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
	if (!key) return;
	const keyNote = key.getAttribute('data-note');
	note.innerHTML = keyNote;
});
