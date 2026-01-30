import 'swiper/css'
import './Slider.scss'

import Icon from '../Icon'
import clsx from 'clsx'

export default ({
	children,
	actions, // footer

	slideCount = 3,
	gap = 30,
}) => {
	const Pagination = ({ className }) => (
		<div className={clsx("slider__pagination", className)} data-js-slider-pagination="">
			<span className="slider__pagination-current">01</span>
			<>&nbsp;of&nbsp;</>
			<span className="slider__pagination-total">12</span>
		</div>
	)

	return (
		<div className="slider" data-js-slider={
			JSON.stringify({
				slideCount,
				gap,
			})
		}>
			<div>
				<div className="slider__swiper swiper" data-js-slider-swiper="">
					<ul className="slider__list swiper-wrapper">
						{children.map((slide, i) => (
							<li className="slider__item swiper-slide" key={i}>
								{slide}
							</li>
						))}
					</ul>
				</div>
			</div>

			<footer className="slider__footer">
				{actions && <div className="slider__actions visible-mobile">{actions}</div>}

				<Pagination className="hidden-mobile" />

				<div className="slider__navigation" data-js-slider-navigation="">
					<button disabled className="slider__button slider__button--prev" type="button" title="Previous slide" aria-label="Previous slide" data-js-slider-prev-button="">
						<Icon name="arrow-left" hasFill />
					</button>

					<Pagination className="visible-mobile" />

					<button className="slider__button slider__button--next" type="button" title="Next slide" aria-label="Next slide" data-js-slider-next-button="">
						<Icon name="arrow-right" hasFill />
					</button>
				</div>
			</footer>
		</div>
	)
}