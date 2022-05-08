import React from "react";
import { Container, NavItem } from "./styles";

interface NavProps {
	isOpen: boolean;
	setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
	acima: boolean;
	setAcima: React.Dispatch<React.SetStateAction<boolean>>;
}

const NavBar: React.FC<NavProps> = ({ isOpen, setAcima, setIsOpen, acima }) => {
	return (
		<Container>
			<NavItem
				onClick={() => {
					setAcima(false);
					setIsOpen(!isOpen);
				}}
			>
				Abaixo de 10 reais
			</NavItem>
			<NavItem
				onClick={() => {
					setAcima(true);
					setIsOpen(!isOpen);
				}}
			>
				Acima de 10 reais
			</NavItem>
		</Container>
	);
};

export default NavBar;
