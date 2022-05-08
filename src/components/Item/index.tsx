import React from "react";
import { Container, Image, Content } from "./styles";
import CurrencyFormatter from "../../utils/formatter";

interface ItemProps {
	item: {
		uniqueId: string;
		id: string;
		productId: string;
		name: string;
		skuName: string;
		price: number;
		listPrice: number;
		imageUrl: string;
		sellingPrice: number;
	};
}

const Item: React.FC<ItemProps> = ({ item }) => {
	return (
		<Container>
			<Image src={item.imageUrl} />
			<Content>
				<p className="title">{item.name}</p>
				<p className="listPrice">{CurrencyFormatter(item.listPrice / 100)}</p>
				<p className="sellingPrice">{CurrencyFormatter(item.sellingPrice / 100)}</p>
			</Content>
		</Container>
	);
};

export default Item;
