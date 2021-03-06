import React, { useState } from "react";
import Cart from "../../components/Cart";

import NavBar from "../../components/NavBar";
import useMockApi from "../../hooks/useMockApi";
import DisplayItem from "../../components/DisplayItem";
import { ItemContainer } from "./styles";
import NormalCart from "../../components/NormalCart";
import { CartItem } from "../../types";

const Home: React.FC = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [openNormalCart, setOpenNormalCart] = useState(false);
	const [acima, setAcima] = useState(false);
	const [total] = useMockApi(false, true);
	const [cart, setCart] = useState<CartItem[]>([]);
	const [myTotal, setMyTotal] = useState(0);

	const handleOpenCart = () => {
		setIsOpen(false);
		setOpenNormalCart(!openNormalCart);
	};

	return (
		<>
			<NavBar
				handleOpenCart={handleOpenCart}
				isOpen={isOpen}
				setIsOpen={setIsOpen}
				acima={acima}
				setAcima={setAcima}
				setOpenNormalCart={setOpenNormalCart}
			/>
			<Cart isOpen={isOpen} acima={acima} />
			<NormalCart
				setCart={setCart}
				setTotal={setMyTotal}
				myCart={cart}
				isOpen={openNormalCart}
				total={myTotal}
			/>
			<ItemContainer>
				{total.items.map((item, index) => {
					return (
						<DisplayItem
							setTotal={setMyTotal}
							key={index}
							item={item as CartItem}
							cart={cart}
							setCart={setCart}
						/>
					);
				})}
			</ItemContainer>
		</>
	);
};

export default Home;
