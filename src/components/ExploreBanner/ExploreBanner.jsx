import './ExploreBanner.scss'
import Button from '@/components/Button'

export default () => {
	return (
		<div className="explore-banner">
			<div className="container explore-banner__inner">
				<div className="explore-banner__body">
					<h2 className="explore-banner__title h2">Start Your Real Estate Journey Today</h2>
					<p className="explore-banner__description">Your dream property is just a click away. Whether you're looking for a new home, a strategic investment, or expert real estate advice, Estatein is here to assist you every step of the way. Take the first step towards your real estate goals and explore our available properties or get in touch with our team for personalized assistance.</p>
				</div>

				<Button className="explore-banner__button" label="Explore Properties" mode="accent" />
			</div>
		</div>
	)
}