import Author from '../Author'
import Rating from '../Rating'
import './ReviewCard.scss'

export default ({
	rating,
	title,
	description,
	author, // { name, location, imgSrc }
}) => {
	return (
		<article className="review-card">
			<Rating rating={rating} />

			<div className="review-card__body">
				<h3 className="review-card__title">{title}</h3>
				<blockquote className="review-card__description">
					<p>{description}</p>
				</blockquote>
			</div>

			<Author {...author} />
		</article>
	)
}