import tempoAudio from "../assets/tamborine_100bpm.mp3"

class Sound {
	constructor(shouldPlayMetronome) {
		this.recorder = null
		this.audioChunks = []
		this.audio = new Audio()
		this.audioSrc = null
		this.playPromise = null
		this.initialize(shouldPlayMetronome)
	}

	initialize = shouldPlayMetronome => {
		if (shouldPlayMetronome) {
			this.audio = new Audio(tempoAudio)
		} else {
			navigator.mediaDevices
				.getUserMedia({ audio: true })
				.then(audioStream => {
					this.recorder = new MediaRecorder(audioStream)
					this.recorder.ondataavailable = e => {
						this.audioChunks.push(e.data)
					}
					this.recorder.onstop = () => {
						const audioBlob = new Blob(this.audioChunks)
						const audioUrl = URL.createObjectURL(audioBlob)
						console.log(audioBlob, audioUrl)
						this.audio.src = this.audioSrc = audioUrl
						this.audio.loop = true
						this.audioChunks = []
					}
				})
				.catch(e => console.log(e))
		}
	}

	record = () => {
		this.recorder.start()
	}

	stop = () => {
		this.recorder.stop()
	}

	play = () => {
		this.playPromise = this.audio.play()
		return this.playPromise
	}

	pause = () => {
		this.playPromise
			.then(() => this.audio.pause())
			.catch(e => console.log(e.name + ": " + e.message))
	}

	clear = () => {
		this.audio.src = null
	}

	load = () => {
		this.audio.load()
	}

	tempo(speed) {
		let relativeSpeed = speed / 100
		console.log(relativeSpeed)
		this.audio.playbackRate = relativeSpeed
	}
}

export { Sound }
