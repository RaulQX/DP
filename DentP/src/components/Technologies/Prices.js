import React from "react";
import { DiFirebase, DiReact, DiZend } from "react-icons/di";
import { Section, SectionDivider, SectionText, SectionTitle } from "../../styles/GlobalComponents";
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from "./PricesStyles";

const tempPrice = [
	{ id: 0, title: "Tooth 1", price: "$250" },
	{ id: 1, title: "Implant 2", price: "$50000" },
	{ id: 2, title: "Object 3", price: "Price 3" },
	{ id: 3, title: "Object 4", price: "Price 4" },
	{ id: 4, title: "Object 5", price: "Price 5" },
];

const Prices = () => (
	<Section id="prices">
		<SectionDivider />
		<SectionTitle>Prices</SectionTitle>
		<List>
			{tempPrice.map((object) => (
				<ListItem>
					<ListTitle>{object.title}</ListTitle>
					<ListParagraph>{object.price}</ListParagraph>
				</ListItem>
			))}
		</List>
	</Section>
);

export default Prices;
