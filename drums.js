window.addEventListener('keydown', function (e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`)

  if (!audio) return // stops function from running if there's no keyCode associated with it
  audio.currentTime = 0 // rewind to the start so audio can be played in quick succesion.
  audio.play()
  console.log(key)
})
