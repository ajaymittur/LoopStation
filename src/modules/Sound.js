class Sound {
	constructor() {
		this.recorder = null
		this.audioChunks = []
		this.audio = new Audio()
		this.initialize()
	}

	initialize() {
		navigator.mediaDevices
			.getUserMedia({ audio: true })
			.then(audioStream => {
				this.recorder = new MediaRecorder(audioStream)
				this.recorder.ondataavailable = e => {
					chunks.push(e.data)
				}
				this.recorder.onstop = () => {
					const audioBlob = new Blob(chunks)
					const audioUrl = URL.createObjectURL(audioBlob)
					this.audio.src = audioUrl
					this.audioChunks = []
				}
			})
			.catch(e => console.log(e))
	}

	record() {
		this.recorder.start()
	}

	stop() {
		this.recorder.stop()
	}

	play() {
		this.audio.play()
	}

	pause() {
		this.audio.pause()
	}
}

export { Sound }
