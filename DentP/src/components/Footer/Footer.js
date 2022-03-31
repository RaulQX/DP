import React from "react";
import {
	FooterWrapper,
	LinkColumn,
	LinkItem,
	LinkList,
	LinkTitle,
	Slogan,
	SocialIconsContainer,
} from "./FooterStyles";

const Footer = () => {
	return (
		<FooterWrapper>
			<LinkList>
				<LinkColumn>
					<LinkTitle>Call me</LinkTitle>
					<LinkItem>+0xxxxxxxxxx</LinkItem>
				</LinkColumn>
				<LinkColumn>
					<LinkTitle>Scrie-mi</LinkTitle>
					<LinkItem href="email@mydentistemail.com">email@mydentistemail.com</LinkItem>
				</LinkColumn>
			</LinkList>
			<SocialIconsContainer>
				<Slogan>Better bite an apple than blend an apple</Slogan>
			</SocialIconsContainer>
		</FooterWrapper>
	);
};

export default Footer;
