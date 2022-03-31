import React from "react";

import { Section, SectionText, SectionTitle } from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = () => (
	<Section row nopadding>
		<LeftSection>
			<SectionTitle main center>
				Welcome to
				<br />
				my Dentistry
			</SectionTitle>
			<SectionText>
				Lorem ipsum
			</SectionText>
			<Button
				onClick={() => {
					window.location = "https://google.com";
				}}
			>
				More
			</Button>
		</LeftSection>
	</Section>
);

export default Hero;
