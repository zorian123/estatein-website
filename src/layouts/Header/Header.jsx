import './Header.scss'
import clsx from 'clsx'

import Logo from '@/components/Logo'
import Icon from '@/components/Icon'
import Button from '@/components/Button'
import BurgerButton from '@/components/BurgerButton'

export default ({ url }) => {
	const links = [
		{label: 'Home', href: '/'},
		{label: 'About Us', href: '/about'},
		{label: 'Properties', href: '/properties'},
		{label: 'Services', href: '/services'},
	]

	return (
		<header className="header" data-js-header="">
			<div className="header__promo" data-js-header-promo="">
				<div className="header__promo-inner container">
					<p className="header__promo-text">✨Discover Your Dream Property with Estatein</p>
					<a href="#">Learn More</a>

					<button className="header__promo-close-button" type="button" title="Close" aria-label="Close" data-js-header-promo-close-button="">
						<Icon name="cross" />
					</button>
				</div>
			</div>

			<div className="header__body">
				<div className="header__body-inner container">
					<Logo className="header__logo" />

					<dialog className="header__overlay" data-js-header-dialog="">
						<nav className="header__menu">
							<ul className="header__menu-list">
								{links.map(({ label, href }, i) => (
									<li className="header__menu-item" key={i}>
										<a href={href} className={clsx('header__menu-link', url === href && 'is-active')}>{label}</a>
									</li>
								))}
							</ul>
						</nav>

						<Button
							className="header__button"
							type="button"
							label="Contact Us"
							mode={url === '/contact-us' ? 'accent' : ''}
						/>
					</dialog>

					<BurgerButton
						className="header__burger-button visible-mobile"
						extraAttrs={{
							'data-js-header-burger-button': '',
						}}	
					/>
				</div>
			</div>
		</header>
	)
}