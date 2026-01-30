import './Values.scss'

import Section from '@/components/Section'
import { Image } from 'minista'

export default () => {
	const items = [
		{
			imgSrc: '/src/assets/images/Values/star.png',
			title: 'Trust',
			description: 'Trust is the cornerstone of every successful real estate transaction.',
		},
		{
			imgSrc: '/src/assets/images/Values/cap.png',
			title: 'Excellence',
			description: 'We set the bar high for ourselves. From the properties we list to the services we provide.',
		},
		{
			imgSrc: '/src/assets/images/Values/star.png',
			title: 'Client-Centric',
			description: 'Your dreams and needs are at the center of our universe. We listen, understand.',
		},
		{
			imgSrc: '/src/assets/images/Values/group.png',
			title: 'Our Commitment',
			description: 'We are dedicated to providing you with the highest level of service, professionalism, and support.',
		},
	]

	const Cell = ({ imgSrc, title, description }) => (
		<div className="values__cell">
			<div className="values__header">
				<Image className="values__image" src={imgSrc} />
				<h3 className="values__title">{title}</h3>
			</div>
			<div className="values__description">
				<p>{description}</p>
			</div>
		</div>
	)

	return (
		<Section
			title="Our Values"
			description="Our story is one of continuous growth and evolution. We started as a small team with big dreams, determined to create a real estate platform that transcended the ordinary."
			titleId="values-title"

			isHorizontal
		>
			<div className="values">
				<div className="values__row">
					<Cell {...items[0]} />
					<Cell {...items[1]} />
				</div>
				<div className="values__row">
					<Cell {...items[2]} />
					<Cell {...items[3]} />
				</div>
			</div>
		</Section>
	)
}