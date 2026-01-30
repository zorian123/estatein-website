import './Team.scss'

import { Image } from 'minista'
import Section from '@/components/Section'
import Icon from '@/components/Icon'

export default () => {
	const items = [
		{
			image: '/src/assets/images/Team/1.jpg',
			name: 'Max Mitchell',
			post: 'Founder',
		},
		{
			image: '/src/assets/images/Team/2.jpg',
			name: 'Sarah Johnson',
			post: 'Chief Real Estate Officer',
		},
		{
			image: '/src/assets/images/Team/3.jpg',
			name: 'David Brown',
			post: 'Head of Property Management',
		},
		{
			image: '/src/assets/images/Team/4.jpg',
			name: 'Michael Turner',
			post: 'Legal Counsel',
		},
	]

	// It would be better to decompose all of this: components TeamSection, TeamList, TeamCard, TeamLink, TeamForm
	return (
		<Section
			title="Meet the Estatein Team"
			description="At Estatein, our success is driven by the dedication and expertise of our team. Get to know the people behind our mission to make your real estate dreams a reality."
			titleId="team-title"
		>
			<div className="team">
				<ul className="team__list">
					{items.map(({ image, name, post }, i) => (

						<li className="team__item">
							<div className="team__image">
								<Image className="team__img" src={image} />

								<a className='team__link' href="/" target="_blank">
									<Icon name="twitter" hasFill />
								</a>
							</div>

							<div className="team__body">
								<div className="team__info">
									<h3 className="team__name">{name}</h3>
									<p className="team__post">{post}</p>
								</div>

								{/* In React you should use useId() hook */}
								<form action="" className="team__form">
									<label htmlFor={`message-${i}`}>Message</label>
									<input id={`message-${i}`} type="text" placeholder="Say Hello 👋" />
									<button type='submit'>
										<Icon name="plane" hasFill />
									</button>
								</form>
							</div>
						</li>

					))}
				</ul>
			</div>
		</Section>
	)
}