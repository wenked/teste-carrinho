import React from "react";
import { Container, Image, Content, RemoveButton } from "./styles";
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
		count?: number;
	};
	removeItem?: (id: string) => void;
}

const Item: React.FC<ItemProps> = ({ item, removeItem }) => {
	return (
		<Container>
			<Image src={item.imageUrl} />
			<Content>
				<p className="title">{item.name}</p>
				<p className="listPrice">{CurrencyFormatter(item.listPrice / 100)}</p>

				<p className="sellingPrice">
					{CurrencyFormatter(item.sellingPrice / 100)}
					{removeItem && <> x {item.count}</>}
				</p>
				{removeItem && (
					<>
						<RemoveButton onClick={() => removeItem(item.id)}>Remover</RemoveButton>
					</>
				)}
			</Content>
		</Container>
	);
};

export default Item;
