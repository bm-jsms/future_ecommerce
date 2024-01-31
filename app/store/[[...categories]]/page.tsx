import { ProductsWrapper } from '@/components/store/ProductsWrapper';
import {
	getCollectionProducts,
	getCollections,
} from '@/services/shopify/collections';
import { getProducts } from '@/services/shopify/products';

interface CategoryProps {
	params: {
		categories: string[];
	};
	searchParams?: string;
}

type CollectionType = {
	id: string;
	handle: string;
	title: string;
};

export default async function Category(props: CategoryProps) {
	const { categories } = props.params;
	let products = [];
	const collections = await getCollections();

	if (categories?.length > 0) {
		const selectedCollectionId = collections.find(
			(collection: CollectionType) => collection.handle === categories[0],
		).id;
		products = await getCollectionProducts(selectedCollectionId);
	} else {
		products = await getProducts();
	}

	console.log('products', products);

	return <ProductsWrapper products={products} />;
}
