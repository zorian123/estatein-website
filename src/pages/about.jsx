import About from "@/sections/About"
import Achievements from "@/sections/Achievements"
import Values from "@/sections/Values"

export const metadata = {
	title: 'About us',
}

export default () => (
	<>
		<About />
		<Values />
		<Achievements />
	</>
)