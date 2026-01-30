import About from "@/sections/About"
import Achievements from "@/sections/Achievements"
import Clients from "@/sections/Clients"
import Process from "@/sections/Process"
import Team from "@/sections/Team"
import Values from "@/sections/Values"

export const metadata = {
	title: 'About us',
}

export default () => (
	<>
		<About />
		<Values />
		<Achievements />
		<Process />
		<Team />
		<Clients />
	</>
)