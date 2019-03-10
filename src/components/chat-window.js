import {html, render} from '../../node_modules/lit-html/lit-html.js'

export default class ChatWindow extends HTMLElement {
	constructor() {
		super()

		this.attachShadow({ mode: `open` })
		render(this.render(), this.shadowRoot)
	}

	render() {
		return html`
			${style}
			<div>
				TEST
			</div>
		`
	}
}

const style = html`
<style scoped>	
	div {
		background-color: blue;
		width: 100px;
		height: 100px;
	}
</style>
`

customElements.define(`chat-window`, ChatWindow)
