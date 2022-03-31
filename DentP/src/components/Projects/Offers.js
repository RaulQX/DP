import React from "react";

import {
	BlogCard,
	CardInfo,
	GridContainer,
	HeaderThree,
	Hr,
	TitleContent,
	Img,
} from "./OffersStyles";
import { Section, SectionDivider, SectionTitle } from "../../styles/GlobalComponents";
import { offers } from "../../constants/constants";

const Offers = () => (
	<Section nopadding id="offers">
		<SectionDivider />
		<SectionTitle main>Oferte</SectionTitle>
		<GridContainer>
			{offers.map((project) => (
				<BlogCard key={project.id}>
					<Img src={project.image} />
					<TitleContent>
						<HeaderThree title>{project.title}</HeaderThree>
						<Hr />
					</TitleContent>
					<CardInfo>{project.description}</CardInfo>
				</BlogCard>
			))}
		</GridContainer>
	</Section>
);

export default Offers;
