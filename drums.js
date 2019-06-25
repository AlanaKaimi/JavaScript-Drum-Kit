function playSound (e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`)

  if (!audio) return // stops function from running if there's no keyCode associated with it
  audio.currentTime = 0 // rewind to the start so audio can be played in quick succesion.
  audio.play()
  key.classList.add('playing')
}

function removeTransition (e) {
  if (e.propertyName !== 'transform') return // skip if not a transform
  this.classList.remove('playing')
}

const keys = document.querySelectorAll('.key')
keys.forEach(key => key.addEventListener('transitionend', removeTransition))

window.addEventListener('keydown', playSound)
