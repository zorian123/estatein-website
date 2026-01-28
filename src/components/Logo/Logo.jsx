import './Logo.scss'
import clsx from 'clsx'

export default ({ className }) => {
	const title = 'Home'

	return (
		<a
			className={clsx(className, 'logo')}
			href="/"
			title={title}
			aria-label={title}
		>
			<img src="/logo.svg" alt="" />
		</a>
	)
}