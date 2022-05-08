import React, { useEffect, useState } from "react";
import abaixo10reais from "../../mockdata/abaixo-10-reais.json";
import acima10reais from "../../mockdata/acima-10-reais.json";
import Item from "../../components/Item";
import {
	Container,
	Title,
	ItemContainer,
	Line,
	Total,
	FreteGratis,
	FinishButton,
	ButtonContainer,
	CartFooter,
} from "./styles";
import CurrencyFormatter from "../../utils/formatter";

import { CartItem } from "../Home";

interface CartProps {
	isOpen: boolean;
	myCart: CartItem[];
	total: number;
	setTotal: React.Dispatch<React.SetStateAction<number>>;
	setCart: React.Dispatch<React.SetStateAction<CartItem[]>>;
}

const NormalCart: React.FC<CartProps> = ({ total, isOpen, myCart, setCart, setTotal }) => {
	const removeItem = (id: string) => {
		const newCart = myCart;
		const findItem = newCart.find((item: CartItem) => item.id === id);
		if (findItem && findItem.count > 1) {
			findItem.count--;
			const findItemIndex = newCart.findIndex((item: CartItem) => item.id === id);
			newCart.splice(findItemIndex, 1, findItem);
			setCart(newCart);
			setTotal(total - findItem.sellingPrice / 100);
		} else {
			const newCart = myCart.filter((item: CartItem) => item.id !== id);
			if (findItem) {
				setTotal(total - findItem.sellingPrice / 100);
			}

			setCart(newCart);
		}
	};

	return (
		<Container isOpen={isOpen}>
			<Title>Meu Carrinho</Title>
			<Line />
			<ItemContainer>
				{myCart.map((item: any, index) => (
					<Item item={item} key={index} removeItem={removeItem} />
				))}
			</ItemContainer>
			<CartFooter>
				<Line />

				<Total>
					<span>Total</span>
					<p>{CurrencyFormatter(total * 1)}</p>
				</Total>
				{total > 10 && (
					<FreteGratis>
						<span>Parabéns, sua compra tem frete grátis !</span>
					</FreteGratis>
				)}
				<Line />
				<ButtonContainer>
					<FinishButton>Finalizar compra</FinishButton>
				</ButtonContainer>
			</CartFooter>
		</Container>
	);
};

export default NormalCart;
