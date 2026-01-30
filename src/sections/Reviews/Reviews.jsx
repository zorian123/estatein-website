import './Reviews.scss'

import Section from '@/components/Section'
import Button from '@/components/Button'
import Slider from '@/components/Slider'
import ReviewCard from '@/components/ReviewCard'

export default () => {
	let items = [
		{
			rating: 5,
			title: 'Exceptional Service!',
			description: "Our experience with Estatein was outstanding. Their team's dedication and professionalism made finding our dream home a breeze. Highly recommended!",
			author: {
				name: 'Wade Warren',
				location: 'USA, California',
				imgSrc: '/src/assets/images/ReviewCard/1.jpg',
			}
		},
		{
			rating: 3,
			title: 'Efficient and Reliable',
			description: "Estatein provided us with top-notch service. They helped us sell our property quickly and at a great price. We couldn't be happier with the results.",
			author: {
				name: 'Emelie Thomson',
				location: 'USA, Florida',
				imgSrc: '/src/assets/images/ReviewCard/2.jpg',
			}
		},
		{
			rating: 1,
			title: 'Trusted Advisors',
			description: "The Estatein team guided us through the entire buying process. Their knowledge and commitment to our needs were impressive. Thank you for your support!",
			author: {
				name: 'John Mans',
				location: 'USA, Nevada',
				imgSrc: '/src/assets/images/ReviewCard/3.jpg',
			}
		},
	]

	items = [...items, ...items, ...items]

	const actions = <Button href='/' label='View All Testimonials' />

	return (
		<Section
			title="What Our Clients Say"
			title-id="reviews-title"
			description="Read the success stories and heartfelt testimonials from our valued clients. Discover why they chose Estatein for their real estate needs."
			actions={actions}
		>
			<Slider actions={actions}>
				{items.map((item, i) => (
					<ReviewCard {...item} />
				))}
			</Slider>
		</Section>
	)
}