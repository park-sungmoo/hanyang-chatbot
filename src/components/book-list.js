import {html, render} from '../../node_modules/lit-html/lit-html.js'

class BookList extends HTMLElement {
	constructor() {
		super()
		this.imageSrc = this.getAttribute(`imageSrc`)
		this.title = this.getAttribute(`title`)
		this.author = this.getAttribute(`author`)
		this.publication = this.getAttribute(`publication`)
		this.isCheckout = this.getAttribute(`isCheckout`)

		this.attachShadow({ mode: `open` })
		render(this.render(), this.shadowRoot)
		this.chatWindow = document.querySelector(`chat-window`)
	}

	connectedCallback() {
		this.shadowRoot.querySelector(`.book-image`).src = this.imageSrc
		this.shadowRoot.querySelector(`.title`).textContent = this.title
		this.shadowRoot.querySelector(`.author`).textContent = this.author
		this.shadowRoot.querySelector(`.publication`).textContent = this.publication
		if (this.isCheckout === `대출가능`) {
			this.shadowRoot.querySelector(`.isCheckout`).style.color = `green`
		} else if (this.isCheckout === `대출중`) {
			this.shadowRoot.querySelector(`.isCheckout`).style.color = `red`
		}
		this.shadowRoot.querySelector(`.isCheckout`).textContent = this.isCheckout
	}

	render() {
		return html`
			${style}
			<main>
				<div class='image-wrap'><img class='book-image' src='' /></div>
				<div class='info'>
					<div class='title'></div>
					<div class='author'></div>
					<div class='publication'></div>
					<div class='isCheckout'></div>
				</div>
			</main>
		`
	}
}

const style = html`
<style scoped>
	main {
		display: grid;
		grid-template-columns: repeat(2, auto);
		max-width: 80vw;
		height: 120px;
		overflow: hidden;
	}

	.book-image {
		width: 80px;
		height: 120px;
	}

	.info {
		display: grid;
		grid-template-rows: repeat(4, auto);
		height: 120px;
		padding-left: 5px;
	}

	.title {
		color: #0072bc;
		font-weight: bold;
		text-overflow: ellipsis;		
	}

	.isCheckout {
		font-weight: bold;
	}
</style>
`

customElements.define(`book-list`, BookList)
