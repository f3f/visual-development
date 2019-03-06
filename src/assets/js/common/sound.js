import  soundServer from './soundServer'
const Sound= {
  click() {
    const sound = {
      src: ['../../../static/sound/click.mp3']
    }
    soundServer.createSounds(sound)
  },
  typing() {
    const sound = {
      src: ['../../../static/sound/typing.mp3']
    }
    soundServer.createSounds(sound)
  },
  deploy() {
    const sound = { src: ['../../../static/sound/deploy.mp3'] }
    soundServer.createSounds(sound)
  }
}
export default Sound
