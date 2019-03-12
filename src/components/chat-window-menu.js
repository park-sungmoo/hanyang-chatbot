import {html, render} from '../../node_modules/lit-html/lit-html.js'

class ChatWindowMenu extends HTMLElement {
	constructor() {
		super()

		this.attachShadow({ mode: `open` })
		render(this.render(), this.shadowRoot)

		this.menuState = `hide`
		this.eventClickMenu = this.onClickMenu.bind(this)
	}

	show() {
		this.style.display = `block`
		this.menuState = `show`
	}

	hide() {
		this.style.display = `none`
		this.menuState = `hide`
	}

	connectedCallback() {
		this.shadowRoot.querySelector(`.main`).addEventListener(`click`, this.eventClickMenu)
	}

	disconnectedCallback() {
		this.shadowRoot.querySelector(`.main`).removeEventListener(`click`, this.eventClickMenu)
	}

	onClickMenu() {
		this.hide()
	}

	render() {
		return html`
			${style}
			<ul class='main'>
				<li>${i18next.t(`MENU_BOT_SETTING`)}</li>
			</ul>
		`
	}
}

const style = html`
<style scoped>
	.main {
		background-color: white;
		padding: 0;
		margin: 0;
		display: grid;
		grid-template-columns: max-content;
		list-style: none;
		border-radius: 2px;
	}

	.main li {
		padding: 10px 15px 10px 15px;
		margin: 0 1px 0 1px;
		box-sizing: border-box;
		max-width: 200px;
		font-size: 12px;
		text-align: left;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}

	.main li:not(:last-child) {
		border-bottom: 1px solid #F0F0F0;
	}

	.main li:hover {
		background-color: #F0F0F0;
	}
</style>
`

customElements.define(`chat-window-menu`, ChatWindowMenu)
