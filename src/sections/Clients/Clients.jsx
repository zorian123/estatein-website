import './Clients.scss'

import Slider from '@/components/Slider'
import Section from '@/components/Section'
import ClientCard from '@/components/ClientCard'

export default () => {
	let items = [
		{
			since: 2019,
			name: 'ABC Corporation',
			link: 'https://example.com/',

			domain: 'Commercial Real Estate',
			category: 'Luxury Home Development',

			review: "Estatein's expertise in finding the perfect office space for our expanding operations was invaluable. They truly understand our business needs.",
		},
		{
			since: 2018,
			name: 'GreenTech Enterprises',
			link: 'https://example.com/',

			domain: 'Commercial Real Estate',
			category: 'Retail Space',

			review: "Estatein's ability to identify prime retail locations helped us expand our brand presence. They are a trusted partner in our growth.",
		},
	]

	items = [...items, ...items, ...items]

	return (
		<Section
			title="Our Valued Clients"
			description="At Estatein, we have had the privilege of working with a diverse range of clients across various industries. Here are some of the clients we've had the pleasure of serving"
			title-id="clients-title"
		>
			<Slider
				slideCount={2}
				gap={50}
			>
				{items.map((item, i) => (
					<ClientCard {...item} />
				))}
			</Slider>
		</Section>
	)
}