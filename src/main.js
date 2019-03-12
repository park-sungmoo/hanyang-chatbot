import './components/chat-window.js'

class Main {
	static init() {
		this.empty()
		this.renderChatWindow()
	}

	static empty() {
		document.querySelector(`.app-root`).innerHTML = ``
	}

	static renderChatWindow() {
		const chatWindow = document.createElement(`chat-window`)
		document.querySelector(`.app-root`).appendChild(chatWindow)
	}
}

Main.init()
