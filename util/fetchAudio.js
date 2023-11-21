import { allAudioUrl } from './utils.js'

const fetchAudio = async () => {
  const response = await fetch(allAudioUrl).catch((err) => console.log(err))
  if (response) {
    return response.json()
  }
  return response
}

export default fetchAudio
