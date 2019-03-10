import {html, render} from '../../node_modules/lit-html/lit-html.js'
import './bot-chat-balloon.js'
import './my-chat-balloon.js'

class ChatWindowBody extends HTMLElement {
	constructor() {
		super()

		this.attachShadow({ mode: `open` })
		render(this.render(), this.shadowRoot)
	}

	connectedCallback() {
		this.reply(`ㅎㅇ`)
		this.reply(`캡스톤은 잘되가니`)
		this.send(`좃됨`)
		this.send(`흑흑흑`)
		this.reply(`ㅎㅎ`)
		this.reply(`www`)
		this.reply(`ㅎㅇ`)
		this.reply(`캡스톤은 잘되가니`)
		this.send(`좃됨`)
		this.send(`흑흑흑`)
		this.reply(`ㅎㅎ`)
		this.reply(`www`)
		this.reply(`ㅎㅇ`)
		this.reply(`캡스톤은 잘되가니`)
		this.send(`좃됨`)
		this.send(`흑흑흑`)
		this.reply(`ㅎㅎ`)
		this.reply(`www`)
		this.reply(`ㅎㅇ`)
		this.reply(`캡스톤은 잘되가니`)
		this.send(`좃됨`)
		this.send(`흑흑흑`)
		this.reply(`ㅎㅎ`)
		this.reply(`www`)
		this.reply(`ㅎㅇ`)
	}

	reply(text) {
		const main = this.shadowRoot.querySelector(`main`)
		const ONE = 1, LAST_CHILD_NUM = main.children.length - ONE
		const lastChat = main.children[LAST_CHILD_NUM]
		const isBot = main.children.length && main.children[LAST_CHILD_NUM].localName === `bot-chat-balloon`

		if(isBot == false) {
			const botChatBalloon = document.createElement(`bot-chat-balloon`)
			main.appendChild(botChatBalloon)
			botChatBalloon.chat(text)
			return
		}
		lastChat.chat(text)
	}

	send(text) {
		const main = this.shadowRoot.querySelector(`main`)
		const ONE = 1, LAST_CHILD_NUM = main.children.length - ONE
		const lastChat = main.children[LAST_CHILD_NUM]
		const isMe = main.children.length && main.children[LAST_CHILD_NUM].localName === `my-chat-balloon`

		if(isMe == false) {
			const myChatBalloon = document.createElement(`my-chat-balloon`)
			main.appendChild(myChatBalloon)
			myChatBalloon.chat(text)
			return
		}
		lastChat.chat(text)
	}

	render() {
		return html`
			${style}
			<main>				
				<!-- <my-chat-balloon></my-chat-balloon>
				<bot-chat-balloon></bot-chat-balloon> -->
			</main>
		`
	}
}

const style = html`
<style scoped>
	main {
		display: grid;
		grid-template-columns: 1fr;
		grid-auto-rows: min-content;
		width: 100%;
		height: 100%;		
	}

	bot-chat-balloon, my-chat-balloon {
		width: 100%;
		min-height: min-content;
	}
</style>
`

customElements.define(`chat-window-body`, ChatWindowBody)
