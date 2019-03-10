import {html, render} from '../../node_modules/lit-html/lit-html.js'

class ChatWindowFooter extends HTMLElement {	
	constructor() {
		super()

		this.attachShadow({ mode: `open` })
		render(this.render(), this.shadowRoot)

		this.eventKeydownTextarea = this.onkeydownTextarea.bind(this)
		this.eventClickSendButton = this.onClickSendButton.bind(this)
	}

	connectedCallback() {
		this.shadowRoot.querySelector(`.send_text`).addEventListener(`keypress`, this.eventKeydownTextarea)
		this.shadowRoot.querySelector(`.send_button`).addEventListener(`click`, this.eventClickSendButton)
	}

	disconnectedCallback() {
		this.shadowRoot.querySelector(`.send_text`).removeEventListener(`keypress`, this.eventKeydownTextarea)
		this.shadowRoot.querySelector(`.send_button`).removeEventListener(`click`, this.eventClickSendButton)
	}

	onkeydownTextarea(event) {
		const isEnter = event.code === `Enter`
		const chatBody = document.querySelector(`chat-window`).shadowRoot.querySelector(`chat-window-body`)
		const sendText = this.shadowRoot.querySelector(`.send_text`)

		if(isEnter) {
			event.preventDefault()
			chatBody.send(sendText.value)
			sendText.value = ``
		}
	}

	onClickSendButton() {
		const chatBody = document.querySelector(`chat-window`).shadowRoot.querySelector(`chat-window-body`)
		const sendText = this.shadowRoot.querySelector(`.send_text`)

		chatBody.send(sendText.value)
		sendText.value = ``
	}

	render() {
		return html`
			${style}
			<main>
				<textarea class='send_text'></textarea>
				<div class='send_button_wrap'>
					<button class='send_button' type='button'>${i18next.t(`SEND_MESSAGE`)}</button>
				</div>
			</main>
		`
	}
}

const style = html`
<style scoped>
	main {
		display: grid;
		grid-template-columns: 1fr 70px;
		grid-template-rows: 1fr;
		width: 100%;
		height: 100%;
	}

	.send_text {
		border: 0;
		resize: none;
		margin: 10px;
		font-size: 14px;
	}

	.send_text:focus {
		outline: none;
	}

	.send_button {
		background-color: #FFEC42;
		border: 0.5px solid #DFCE3D;
		box-sizing: border-box;
		padding-top: 5px;
		padding-bottom: 5px;
		width: 50px;
		margin-left: auto;
		margin-right: auto;
		border-radius: 2px;
		font-size: 12px;
		position: relative;
		top: 10%;
		left: 50%;
		transform: translateX(-50%);
		color: rgba(0, 0, 0, 0.4);
	}

	.send_button:hover {
		background-color: #F5E340;
		color: rgba(0, 0, 0, 0.8);
	}
</style>
`

customElements.define(`chat-window-footer`, ChatWindowFooter)
