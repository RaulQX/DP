import AboutMe from "../components/AboutMe/AboutMe";
import BgAnimation from "../components/BackgrooundAnimation/BackgroundAnimation";
import Hero from "../components/Hero/Hero";
import Offers from "../components/Projects/Offers";
import Prices from "../components/Technologies/Prices";
import { Layout } from "../layout/Layout";
import { Section } from "../styles/GlobalComponents";

const Home = () => {
	return (
		<Layout>
			<Section grid>
				<Hero />
				<BgAnimation />
			</Section>
			<Offers />
			<Prices />
			<AboutMe />
		</Layout>
	);
};

export default Home;
