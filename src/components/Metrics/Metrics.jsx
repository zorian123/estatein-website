import './Metrics.scss'
import clsx from 'clsx'

export default ({
	className,
	items = [],
}) => {
	return (
		<div className={clsx("metrics", className)}>
			<dl className="metrics__list">
				{items.map(({title, description}, i) => (
					<div className="metrics__item" key={i}>
						<dt className="metrics__title">{title}</dt>
						<dd className="metrics__description">{description}</dd>
					</div>
				))}
			</dl>
		</div>
	)
}