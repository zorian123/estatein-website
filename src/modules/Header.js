class Header {
	selectors = {
		root: '[data-js-header]',
		promoCloseButton: '[data-js-header-promo-close-button]',
		dialog: '[data-js-header-dialog]',
		promo: '[data-js-header-promo]',
		burgerButton: '[data-js-header-burger-button]',
	}

	stateClasses = {
		isActive: 'is-active',
		isLock: 'is-lock',
	}

	constructor() {
		this.rootElement = document.querySelector(this.selectors.root)
		this.dialogElement = this.rootElement.querySelector(this.selectors.dialog)
		this.burgerButtonElement = this.rootElement.querySelector(this.selectors.burgerButton)
		this.promoElement = this.rootElement.querySelector(this.selectors.promo)
		this.promoCloseButtonElement = this.rootElement.querySelector(this.selectors.promoCloseButton)

		this.bindEvents()
	}

	onBurgerButtonClick = () => {
		this.burgerButtonElement.classList.toggle(this.stateClasses.isActive)
		this.dialogElement.open = !this.dialogElement.open
		document.documentElement.classList.toggle(this.stateClasses.isLock)
	}

	onPromoCloseButtonClick = () => {
		this.promoElement.remove()
	}

	bindEvents() {
		this.burgerButtonElement.addEventListener('click', this.onBurgerButtonClick)
		this.promoCloseButtonElement.addEventListener('click', this.onPromoCloseButtonClick)
	}
}

export default Header