import './Rating.scss'
import clsx from 'clsx'

import Icon from '../Icon'

export default ({
	className,
	rating
}) => {
	const label = `${rating} stars`

	return (
		<div className={clsx(className, 'rating')} aria-label={label} title={label}>
			<ul className="rating__list">
				{[...Array(5)].map((_, i) => (
					<li className={clsx(
						'rating__item',
						i < rating && 'is-active')
					}>
						<Icon className="rating__icon" name="star" hasFill />
					</li>
				))}
			</ul>
		</div>
	)
}