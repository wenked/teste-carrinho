import React from "react";
import { Container, Image, Price, Title, AddCartButton, ButtonContainer } from "./styles";
import CurrencyFormatter from "../../utils/formatter";

import { CartItem } from "../../types";

interface DisplayItemProps {
	item: CartItem;
	setCart: React.Dispatch<React.SetStateAction<CartItem[]>>;
	cart: CartItem[];
	setTotal: React.Dispatch<React.SetStateAction<number>>;
}

const DisplayItem: React.FC<DisplayItemProps> = ({ item, cart, setCart, setTotal }) => {
	const addToCart = () => {
		const findItem = cart.find((cartItem) => cartItem.uniqueId === item.uniqueId);
		if (findItem) {
			const newCart = cart;
			const findItemIndex = newCart.findIndex((cartItem) => cartItem.uniqueId === item.uniqueId);
			findItem.count += 1;
			findItem.total = findItem.sellingPrice * findItem.count;
			newCart.splice(findItemIndex, 1, findItem);
			setTotal(newCart.reduce((acc, curr) => acc + curr.total / 100, 0));

			setCart(newCart);
		} else {
			const newCart = [...cart, item];
			setTotal(newCart.reduce((acc, curr) => acc + curr.total / 100, 0));
			setCart(newCart);
		}
	};

	return (
		<Container>
			<Image src={item.imageUrl} />
			<Title>{item.name}</Title>
			<Price className="listPrice">{CurrencyFormatter(item.sellingPrice / 100)}</Price>
			<ButtonContainer>
				<AddCartButton onClick={addToCart}>Adicionar ao carrinho</AddCartButton>
			</ButtonContainer>
		</Container>
	);
};

export default DisplayItem;
