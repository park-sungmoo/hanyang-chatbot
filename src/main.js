import './components/chat-window.js'

class Main {
	static init() {
		this.emptyDOM()
		this.renderChatWindow()
	}

	static emptyDOM() {
		document.querySelector(`.app-root`).innerHTML = ``
	}

	static renderChatWindow() {
		const chatWindow = document.createElement(`chat-window`)
		document.querySelector(`.app-root`).appendChild(chatWindow)
	}
}

Main.init()
