import './FAQCard.scss'

import Button from '../Button'

export default ({
	title,
	description,
	href = '/',
}) => {
	return (
		<article className="faq-card">
			<h3 className="faq-card__title">{title}</h3>
			
			<div className="faq-card__description">
				<p>{description}</p>
			</div>

			<Button label="Read More" href={href} />
		</article>
	)
}