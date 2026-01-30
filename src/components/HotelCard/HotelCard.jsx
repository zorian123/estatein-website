import './HotelCard.scss'

import { Image } from 'minista'
import Tags from '../Tags'
import Button from '../Button'
import ReadMore from '../ReadMore'

export default ({
	imgSrc,
	title,
	description,

	tags = [],
	price,
}) => {
	return (
		<article className="hotel-card">
			<Image className="hotel-card__image" src={imgSrc} />

			<div className="hotel-card__info">
				<h3 className="hotel-card__title">{title}</h3>
				<ReadMore text={description} lines={3} />
			</div>

			<Tags items={tags} />

			<footer className="hotel-card__footer">
				<div className="hotel-card__price">
					<p className="hotel-card__price-label">Price</p>
					<p className="hotel-card__price-value h3">{price}</p>
				</div>
				<Button label="View Property Details" mode="accent" href="/" />
			</footer>
		</article>
	)
}