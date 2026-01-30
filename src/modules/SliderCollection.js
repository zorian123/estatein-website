import Swiper from 'swiper'
import { Navigation, Pagination } from 'swiper/modules'

const rootSelector = '[data-js-slider]'

class Slider {
	selectors = {
		root: rootSelector,

		swiper: '[data-js-slider-swiper]',
		pagination: '[data-js-slider-pagination]',

		prevButton: '[data-js-slider-prev-button]',
		nextButton: '[data-js-slider-next-button]',
	}

	constructor(rootElement) {
		this.rootElement = rootElement
		this.params = JSON.parse(this.rootElement.getAttribute(this.selectors.root.slice(1, -1))) ?? {}

		this.swiperElement = this.rootElement.querySelector(this.selectors.swiper)
		
		this.prevButtonElement = this.rootElement.querySelector(this.selectors.prevButton)
		this.nextButtonElement = this.rootElement.querySelector(this.selectors.nextButton)
		this.paginationElements = this.rootElement.querySelectorAll(this.selectors.pagination)

		this.init()
	}

	init() {
		const updatePagination = () => {
			this.paginationElements[1].innerHTML = this.paginationElements[0].innerHTML;
		}

		const settings = {
			breakpoints: {
				0: {
					slidesPerView: 1,
					slidesPerGroup: 1,
					spaceBetween: 20,
				},
				767: {
					slidesPerView: 2,
					slidesPerGroup: 2,
					spaceBetween: 20,
				},
				1440: {
					slidesPerView: this.params.slideCount ?? 3,
					slidesPerGroup: this.params.slideCount ?? 3,
					spaceBetween: this.params.gap ?? 30,
				},
			},



			modules: [ Navigation, Pagination ],
			navigation: {
				prevEl: this.prevButtonElement,
				nextEl: this.nextButtonElement,
			},
			pagination: {
				type: 'fraction',
				el: this.paginationElements[0], // Output to [0]-element
				
				currentClass: 'slider__pagination-current',
				totalClass: 'slider__pagination-total',

				renderFraction: (currentClass, totalClass) => `<span class="${currentClass}"></span> of <span class="${totalClass}"></span>`,
			},

			on: {
				init: swiper => {
					updatePagination()
					swiper.isLocked ? swiper.disable() : swiper.enable()
				}
			}
		}

		const swiper = new Swiper(this.swiperElement, settings)
		window.swiper = swiper

		swiper.on('slideChange', updatePagination) // Duplicate to [1]-element
		swiper.on('resize', updatePagination)

		// Lock the slider if there is nowhere to scroll (so you can select the text)
		swiper.on('lock', swiper.disable)
		swiper.on('unlock', swiper.enable)

		swiper.update()
	}
}

class SliderCollection {
	constructor() {
		this.init()
	}

	init() {
		document.querySelectorAll(rootSelector).forEach(elem => {
			new Slider(elem)
		})
	}
}

export default SliderCollection