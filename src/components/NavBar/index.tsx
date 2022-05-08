import React from "react";
import { Container, NavItem } from "./styles";
import { FiShoppingCart } from "react-icons/fi";

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
			<NavItem onClick={handleOpenCart}>
				Carrinho Normal
				<FiShoppingCart size={14} style={{ marginLeft: "5px" }} />
			</NavItem>
			<NavItem
				onClick={() => {
					setOpenNormalCart(false);
					if (isOpen && acima) {
						setAcima(false);
					} else {
						setIsOpen(!isOpen);
					}
				}}
			>
				Abaixo de 10 reais
			</NavItem>
			<NavItem
				onClick={() => {
					setOpenNormalCart(false);
					if (isOpen && !acima) {
						setAcima(true);
					} else {
						setIsOpen(!isOpen);
					}
				}}
			>
				Acima de 10 reais
			</NavItem>
		</Container>
	);
};

export default NavBar;
