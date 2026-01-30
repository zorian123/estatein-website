import './Achievements.scss'

import Section from '@/components/Section'

export default () => {
	const items = [
		{
			title: '3+ Years of Excellence',
			description: "With over 3 years in the industry, we've amassed a wealth of knowledge and experience, becoming a go-to resource for all things real estate.",
		},
		{
			title: 'Hap Clients',
			description: 'Our greatest achievement is the satisfaction of our clients. Their success stories fuel our passion for what we do.',
		},
		{
			title: 'Industry Recognition',
			description: "We've earned the respect of our peers and industry leaders, with accolades and awards that reflect our commitment to excellence.",
		},
	]

	return (
		<Section
			title="Our Achievements"
			description="Our story is one of continuous growth and evolution. We started as a small team with big dreams, determined to create a real estate platform that transcended the ordinary."
			titleId="achievements-title"
		>
			<div className="achievements">
				{items.map(({title, description}, i) => (
					<article className="achievements__cell" key={i}>
						<h3 className="achievements__title">{title}</h3>
						<div className="achievements__description">
							<p>{description}</p>
						</div>
					</article>
				))}
			</div>
		</Section>
	)
}