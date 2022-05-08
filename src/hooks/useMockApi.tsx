import React, { useState, useEffect } from "react";
import acima10reais from "../mockdata/acima-10-reais.json";
import abaixo10reais from "../mockdata/abaixo-10-reais.json";

interface mockApiResponse {
	value: number;
	items: {
		uniqueId: string;
		id: string;
		productId: string;
		name: string;
		skuName: string;
		price: number;
		listPrice: number;
		imageUrl: string;
		sellingPrice: number;
	}[];
}

const useMockApi = (acima: boolean): [mockApiResponse, number] => {
	const [items, setItems] = useState<mockApiResponse>(acima10reais);
	const [total, setTotal] = useState(0);

	useEffect(() => {
		if (acima) {
			setTotal(acima10reais.items.reduce((acc, item) => acc + item.sellingPrice / 100, 0));
			setItems(acima10reais as mockApiResponse);
		} else {
			setTotal(abaixo10reais.items.reduce((acc, item) => acc + item.sellingPrice / 100, 0));
			setItems(abaixo10reais as mockApiResponse);
		}
	}, [acima]);

	return [items, total];
};

export default useMockApi;
