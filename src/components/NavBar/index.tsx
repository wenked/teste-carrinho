import React from "react";
import { Container, NavItem } from "./styles";

interface NavProps {
	isOpen: boolean;
	setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
	acima: boolean;
	setAcima: React.Dispatch<React.SetStateAction<boolean>>;
	handleOpenCart: () => void;
	setOpenNormalCart: React.Dispatch<React.SetStateAction<boolean>>;
}

const NavBar: React.FC<NavProps> = ({
	setOpenNormalCart,
	handleOpenCart,
	isOpen,
	setAcima,
	setIsOpen,
	acima,
}) => {
	return (
		<Container>
			<NavItem onClick={handleOpenCart}>Carrinho Normal</NavItem>
			<NavItem
				onClick={() => {
					setAcima(false);
					setIsOpen(!isOpen);
					setOpenNormalCart(false);
				}}
			>
				Abaixo de 10 reais
			</NavItem>
			<NavItem
				onClick={() => {
					setAcima(true);
					setIsOpen(!isOpen);
					setOpenNormalCart(false);
				}}
			>
				Acima de 10 reais
			</NavItem>
		</Container>
	);
};

export default NavBar;
