import './Icon.scss'
import clsx from 'clsx'

import { Icon } from 'minista'

export default ({
	className,
	name,
	hasFill,
}) => {
	return (
		<span className={clsx(className, 'icon')}>
			<Icon
				iconId={name}
				fill={hasFill ? 'currentColor' : 'none'}
				stroke={!hasFill ? 'currentColor' : 'none'}
			/>
		</span>
	)
}