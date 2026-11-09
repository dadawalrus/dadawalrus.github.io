document.getElementById('year').textContent = new Date().getFullYear();

const motionPreference = window.matchMedia('(prefers-reduced-motion: reduce)');
const motionButton = document.querySelector('.motion-toggle');
let motionPaused = motionPreference.matches;
function setMotion(paused) {
  motionPaused = paused;
  document.body.classList.toggle('motion-paused', paused);
  document.body.classList.toggle('motion-enabled', !paused);
  motionButton.setAttribute('aria-pressed', String(paused));
  motionButton.setAttribute('aria-label', paused ? 'Play animation' : 'Pause animation');
  motionButton.innerHTML = paused
    ? '<span aria-hidden="true">▷</span> Play motion'
    : '<span aria-hidden="true">Ⅱ</span> Pause motion';
}
setMotion(motionPaused);
motionButton.addEventListener('click', () => setMotion(!motionPaused));
motionPreference.addEventListener('change', event => setMotion(event.matches));
