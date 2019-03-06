import { Howl, Howler } from 'howler'
import extend from 'extend'
class SoundServer {
  constructor() {
    this.defaultOption = {
      preload: true,
      volume: 0.8,
      autoplay: false,
    }
  }
  static createPlayer(conf) {
    if (this.lastPlay) {
      this.player.stop()
    }
    let lastPlay
    this.player = new Howl(conf)
    lastPlay = this.player.play()
    return lastPlay
  }
  static mergeOpt(overwrite) {
    return extend(true, {}, this.defaultOption, overwrite)
  }
  static createSounds(sound = {}) {
    let soundOpt = this.mergeOpt(sound)
    this.lastPlay = this.createPlayer(soundOpt)
  }
}
export default SoundServer
