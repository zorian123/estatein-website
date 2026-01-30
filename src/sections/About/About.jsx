import './About.scss'

import Section from '@/components/Section'
import Metrics from '@/components/Metrics'
import { Image } from 'minista'

export default () => {
	return (
		<Section
			className="about"

			title="Our Journey"
			titleId="about-title"
			description="Our story is one of continuous growth and evolution. We started as a small team with big dreams, determined to create a real estate platform that transcended the ordinary. Over the years, we've expanded our reach, forged valuable partnerships, and gained the trust of countless clients."

			isHorizontal

			isEven
			isSwap
			TitleTag='h1'
			isActionsVisible

			actions={
				<Metrics items={[
					{ title: 'Happy Customers', description: '200+' },
					{ title: 'Properties For Clients', description: '10k+' },
					{ title: 'Years of Experience', description: '16+' },
				]} />
			}
		>
			<Image className="about__image" src="/src/assets/images/About/image.png" />
		</Section>
	)
}