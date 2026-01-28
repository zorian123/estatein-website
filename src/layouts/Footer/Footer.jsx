import './Footer.scss'

import Logo from '@/components/Logo'
import SubscriptionForm from '@/components/SubscriptionForm'
import ExploreBanner from '@/components/ExploreBanner'
import Socials from '@/components/Socials'

export default () => {
	const items = [
		{title: 'Home', items: ['Hero Section', 'Features', 'Properties', 'Testimonials', 'FAQ’s']},
		{title: 'About Us', items: ['Our Story', 'Our Works', 'How It Works', 'Our Team', 'Our Clients']},
		{title: 'Properties', items: ['Portfolio', 'Categories']},
		{title: 'Services', items: ['Valuation Mastery', 'Strategic Marketing', 'Negotiation Wizardry', 'Closing Success', 'Property Management']},
		{title: 'Contact Us', items: [ 'Contact Form', 'Our Offices']},
	]

	return (
		<footer className="footer">
			<ExploreBanner />



			<div className="footer__body">
				<div className="footer__body-inner container">
					<div className="footer__form">
						<Logo />
						<SubscriptionForm />
					</div>

					<nav className="footer__menu">
						{items.map(({title, items}, i) => (
							<div className="footer__menu-column" key={i}>
								<p className="footer__menu-title">{title}</p>
								<ul className="footer__menu-list">
									{items.map((item, j) => (
										<li className="footer__menu-item" key={j}>
											<a href="#" className="footer__menu-link">{item}</a>
										</li>
									))}
								</ul>
							</div>
						))}
					</nav>
				</div>
			</div>



			<div className="footer__extra">
				<div className="footer__extra-inner container">
					<div className="footer__links">
						<p>@2023 Estatein. All Rights Reserved.</p>
						<a href="#">Terms & Conditions</a>
					</div>

					<Socials />
				</div>
			</div>
		</footer>
	)
}