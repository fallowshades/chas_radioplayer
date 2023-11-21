const allAudioUrl = 'http://api.sr.se/api/v2/channels?format=json&size=100'

const getElement = (selection) => {
  const element = document.querySelector(selection)
  if (element) return element
  throw new Error(`Please check "${selection}" selector, no such element exist`)
}

export { allAudioUrl, getElement }
