import Link from "next/link";
import React from "react";
import { AiFillFacebook, AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import { DiCssdeck } from "react-icons/di";

import { Container, Div1, Div2, Div3, NavLink, SocialIcons, Span } from "./HeaderStyles";

const Header = () => (
	<Container>
		<Div1>
			<Link href="/">
				<a
					style={{
						display: "flex",
						alignItems: "center",
						color: "white",
						marginBottom: "20px",
					}}
				>
					<DiCssdeck size="3rem" /> <Span>Dentistry</Span>
				</a>
			</Link>
		</Div1>
		<Div2>
			<li>
				<Link href="#offers">
					<NavLink>Offers</NavLink>
				</Link>
			</li>
			<li>
				<Link href="#prices">
					<NavLink>Prices</NavLink>
				</Link>
			</li>
			<li>
				<Link href="#about">
					<NavLink>About</NavLink>
				</Link>
			</li>
		</Div2>
		<Div3>
			<SocialIcons href="http://facebook.com">
				<AiFillFacebook size="3rem" />
			</SocialIcons>
			<SocialIcons href="http://instagram.com">
				<AiFillInstagram size="3rem" />
			</SocialIcons>
		</Div3>
	</Container>
);

export default Header;
