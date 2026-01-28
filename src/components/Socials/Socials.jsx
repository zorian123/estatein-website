import './Socials.scss'
import Icon from '../Icon'

export default () => {
	const links = ['facebook', 'linkedin', 'twitter', 'youtube']

	return (
		<div className="soc1als">
			<ul className="soc1als__list">
				{links.map((link, i) => (
					<li className="soc1als__item" key={i}>
						<a target="_blank" href="/" className="soc1als__link" title={link} aria-label={link}>
							<Icon className="soc1als__icon" name={link} hasFill />
						</a>
					</li>
				))}
			</ul>
		</div>
	)
}