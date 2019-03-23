class SearchLibrary {	
	replyAboutLibrary(text) {
		const xhr = new XMLHttpRequest()		

		if(!xhr) {
			throw new Error(`XHR 호출 불가`)
		}		
		xhr.open(`POST`, `http://aiopen.etri.re.kr:8000/Demo/WiseQAnal`)	
		xhr.setRequestHeader(`x-requested-with`, `XMLHttpRequest`)
		xhr.addEventListener(`readystatechange`, () => this.onCompletedSearchBook(xhr))		
		xhr.send(`{"request_id": "reserved field","argument": {"text": "${text}"}}`)

		return this
	}

	onCompletedSearchBook(xhr) {
		const chatBody = document.querySelector(`chat-window`).shadowRoot.querySelector(`chat-window-body`)
		const COMPLETED = 4, OK = 200
		if (xhr.readyState === COMPLETED) {
			if (xhr.status === OK) {
				if (isTopicBook()) {
					chatBody.reply(i18next.t(`INPUT_BOOK_NAME`))
					chatBody.waitSend(data => {
						this.searchBook(data)
					})
				}
			} else {
				throw new Error(`No XHR`)
			}
		}
		
		function isTopicBook() {
			const condition = JSON.parse(xhr.responseText)[`return_object`][`orgQInfo`][`orgQUnit`][`vSATs`][0][`strSAT`]
			if (JSON.parse(xhr.responseText)[`return_object`][`orgQInfo`][`orgQUnit`][`vSATs`][0]) {
				return condition === `AFW_DOCUMENT` || condition === `OGG_LIBRARY`
			}
			return false
		}
	}

	// 책 이름 그대로 검색 받으면, 검색 해줌
	searchBook(text) {
		const xhr = new XMLHttpRequest()			
		if(!xhr) {
			throw new Error(`XHR 호출 불가`)
		}
		xhr.open(`GET`, `https://lib.hanyang.ac.kr/pyxis-api/2/collections/6/search?all=k%7Ca%7C${text}&rq=BRANCH%3D9`)	
		xhr.setRequestHeader(`x-requested-with`, `XMLHttpRequest`)
		xhr.addEventListener(`readystatechange`, () => this.onReadyBookSearch(xhr))		
		xhr.send()
	}

	onReadyBookSearch(xhr) {
		const COMPLETED = 4, OK = 200
		let title, author, publication, imageSrc, isCheckout
		if(xhr.readyState === COMPLETED) {
			if(xhr.status === OK) {					
				// console.log(JSON.parse(xhr.responseText)[`data`][`list`])
				for(let i = 0; i < 3; i++) {
					title = JSON.parse(xhr.responseText)[`data`][`list`][i][`titleStatement`]
					author = JSON.parse(xhr.responseText)[`data`][`list`][i][`author`]
					publication = JSON.parse(xhr.responseText)[`data`][`list`][i][`publication`]
					imageSrc = JSON.parse(xhr.responseText)[`data`][`list`][i][`thumbnailUrl`]
					isCheckout = JSON.parse(xhr.responseText)[`data`][`list`][i][`branchVolumes`]
						.find(each => each.name === `ERICA학술정보관`)[`cState`]
					// console.log(title, author, publication, imageSrc, isCheckout)							
					this.createBookList({
						title,
						author,
						publication,
						imageSrc,
						isCheckout,
					})	
				}
			} else {
				throw new Error(`No XHR`)
			}
		}
	}

	createBookList(bookInfo) {
		const chatBody = document.querySelector(`chat-window`).shadowRoot.querySelector(`chat-window-body`)

		chatBody.reply(`<book-list 
			imageSrc='${bookInfo.imageSrc}' 
			title='${bookInfo.title}' 
			author='${bookInfo.author}' 
			publication='${bookInfo.publication}' 
			isCheckout='${bookInfo.isCheckout}' ></book-list>`)
	}
}

const searchLibrary = new SearchLibrary()
export default searchLibrary
