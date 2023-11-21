// Steg 1. Gör en fetch till 'https://api.sr.se/api/v2/channels/?format=json'
import fetchAudio from './util/fetchAudio.js'

const init = async () => {
  const audio = await fetchAudio()
  console.log(audio)
  console.log('successs')
}
// Steg 2. loopa med tex forEach över data.channels - ta ut data och visa på html-sidan.

// Steg 3. ta ut liveaudio.url från varje kanal och lägg i en audio tagg.
// <audio controls>
//   <source src="" type="audio/mpeg" />
// </audio>

window.addEventListener('DOMContentLoaded', () => {
  init()
})
