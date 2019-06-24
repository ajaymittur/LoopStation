class Sound {
	constructor() {
		this.recorder = null
		this.audioChunks = []
		this.audio = new Audio()
		this.audioSrc = null
		this.playPromise = null
		this.initialize()
	}

	initialize() {
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
					this.audio.src = this.audioSrc = audioUrl
					this.audio.loop = true
					this.audioChunks = []
				}
			})
			.catch(e => console.log(e))
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
}

export { Sound }
