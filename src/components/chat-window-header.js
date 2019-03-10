import {html, render} from '../../node_modules/lit-html/lit-html.js'

class ChatWindowHeader extends HTMLElement {
	constructor() {
		super()

		this.attachShadow({ mode: `open` })
		render(this.render(), this.shadowRoot)
	}

	connectedCallback() {
		this.shadowRoot.querySelector(`.submenu-picture`).addEventListener(`click`, this.onClickSubmenuPicture, true)
		this.shadowRoot.querySelector(`.submenu-search`).addEventListener(`click`, this.onClickSubmenuSearch, true)
	}

	disconnectedCallback() {
		this.shadowRoot.querySelector(`.submenu-picture`).removeEventListener(`click`, this.onClickSubmenuPicture, true)
		this.shadowRoot.querySelector(`.submenu-search`).removeEventListener(`click`, this.onClickSubmenuSearch, true)
	}

	onClickSubmenuPicture() {
		alert(i18next.t(`NO_IMPLEMENT`))
	}

	onClickSubmenuSearch() {
		alert(i18next.t(`NO_IMPLEMENT`))
	}

	render() {
		return html`
			${style}
			<main>
				<div class='listener-profile'>
					<span class='listener-profile-img'></span>
				</div>
				<div class='name-submenu'>
					<div class='name'>${i18next.t(`LISTENER_NAME`)}</div>
					<div class='submenu'>
						<img class='submenu-picture' src='/hanyang-chatbot/src/images/submenu-picture.svg' height='16' width='16' title='모아보기'>
						<img class='submenu-search' src='/hanyang-chatbot/src/images/submenu-search.svg' height='14' width='14' title='검색'>
					</div>
				</div>
				<div class='menu'>
					
				</div>
			</main>
		`
	}
}

const style = html`
<style scoped>
	main {
		width: 100%;
		height: 100%;
		box-sizing: border-box;		
		display: grid;
		grid-template-columns: 80px 1fr 100px;
		grid-template-rows: 1fr;
	}

	.listener-profile {
		position: relative;
		padding: 15px;
	}
	
	.listener-profile-img {
		position: absolute;
		width: 50px;
		height: 50px;
		border-radius: 25px;
		background-image: url('/hanyang-chatbot/src/images/sad-frog.png');
		background-repeat: no-repeat;
    	background-position: center;
    	background-size: contain;
	}

	.name-submenu {
		display:grid;
		grid-template-rows: 1fr 1fr;
	}

	.name {
		padding-top: 20px;
		font-size: 12px;
		font-weight: bold;
		color: #4A4C4E;
	}

	.submenu > img {
		vertical-align: middle;	
		opacity: 0.4;
		padding-left: 2px;		
		color: #4A4C4E;
		cursor: pointer;
	}

	.submenu > img:hover {
		opacity: 1;		
	}
</style>
`

customElements.define(`chat-window-header`, ChatWindowHeader)
