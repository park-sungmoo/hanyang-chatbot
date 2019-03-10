import {html, render} from '../../node_modules/lit-html/lit-html.js'
import './bot-chat-balloon.js'

class ChatWindowBody extends HTMLElement {
	constructor() {
		super()

		this.attachShadow({ mode: `open` })
		render(this.render(), this.shadowRoot)
	}

	render() {
		return html`
			${style}
			<main>
				<bot-chat-balloon></bot-chat-balloon>
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

	bot-chat-balloon {
		width: 100%;
		min-height: min-content;
	}
</style>
`

customElements.define(`chat-window-body`, ChatWindowBody)
