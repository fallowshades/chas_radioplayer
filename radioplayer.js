// Steg 1. Gör en fetch till 'https://api.sr.se/api/v2/channels/?format=json'
import fetchAudio from './util/fetchAudio.js'

const init = async () => {
  const audio = await fetchAudio()
  console.log(audio)
  destruct(audio)
}
// Steg 2. loopa med tex forEach över data.channels - ta ut data och visa på html-sidan.
import { getElement } from './util/utils.js'
const display = (audio, element) => {
  const {
    channeltype,
    color,
    id,
    image,
    imagetemplate,
    liveaudio,
    name,
    scheduleurl,
    siteurl,
    tagline,
    xmltvid,
  } = audio

  const htmlRepresentation = `   <div style="background-color: #${color};">
     
      <p>${tagline}</p>
    
      <div class="channel">
        <div>
        <img src="${image}" class="img" alt="${name}" />
        </div>
     <div class="item">
      <h2>${name}</h2>
    
     
      <audio controls>
        <source src="${liveaudio.url}" type="audio/mp3" />
      </audio>
     </div> 
      </div>
      
    </div>`

  element.innerHTML += htmlRepresentation
}

const destruct = (audio) => {
  const channels = audio.channels
  const tableOfRows = () => Array.isArray(channels)
  if (tableOfRows) {
    channels.forEach((channel) => {
      const componentProps = channel.liveaudio && channel.liveaudio.url
      const componentKey = channel.name

      if (componentProps) {
        display(channel, getElement('.channels'))
      } else {
        console.log('t')
      }
    })
  } else {
    console.log('child what its props')
  }
}

// Steg 3. ta ut liveaudio.url från varje kanal och lägg i en audio tagg.
// <audio controls>
//   <source src="" type="audio/mpeg" />
// </audio>

window.addEventListener('DOMContentLoaded', () => {
  init()
})
