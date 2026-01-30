import './ClientCard.scss'

import Icon from '../Icon'
import Button from '../Button'

export default ({
	since,
	name,
	link,

	domain,
	category,

	review,
}) => {
	return (
		<article className="client-card">
			<header className="client-card__header">
				<div className="client-card__since">Since {since}</div>
				<h3 className="client-card__name">{name}</h3>
				<Button className="client-card__link" label="Visit Website" href={link} target="_blank" />
			</header>

			<dl className="client-card__details">
				<div className="client-card__details-item">
					<dt className="client-card__details-key">
						<Icon name="four-dots" />
						<span>Domain</span>
					</dt>
					<dd className="client-card__details-value">{domain}</dd>
				</div>

				<div className="client-card__details-item">
					<dt className="client-card__details-key">
						<Icon name="zap" />
						<span>Category</span>
					</dt>
					<dd className="client-card__details-value">{category}</dd>
				</div>
			</dl>

			<div className="client-card__review">
				<div className="client-card__review-title">What They Said 🤗</div>
				<div className="client-card__review-description">{review}</div>
			</div>
		</article>
	)
}