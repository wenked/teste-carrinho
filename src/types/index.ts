export interface CartItem {
	uniqueId: string;
	id: string;
	productId: string;
	name: string;
	skuName: string;
	price: number;
	listPrice: number;
	imageUrl: string;
	sellingPrice: number;
	count: number;
	total: number;
}

export interface mockApiResponse {
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

export interface mockListApiResponse {
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
		count: number;
		total: number;
	}[];
}
