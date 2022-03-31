import React from "react";

import { Section, SectionDivider, SectionTitle } from "../../styles/GlobalComponents";
import { Box, Boxes, BoxNum, BoxText } from "./AboutMeStyles";

const data = [
	{ number: 200, text: "Extracted Teeth" },
	{ number: 1000, text: "Scalings Done" },
	{ number: 1900, text: "Free Controls Offered" },
	{ number: 500000, text: "Happy Clients" },
];

const AboutMe = () => (
	<Section id="about">
		<SectionDivider></SectionDivider>
		<SectionTitle>Achievements</SectionTitle>
		<Boxes>
			{data.map((card, index) => (
				<Box key={index}>
					<BoxNum>{card.number}+</BoxNum>
					<BoxText>{card.text}</BoxText>
				</Box>
			))}
		</Boxes>
	</Section>
);

export default AboutMe;
