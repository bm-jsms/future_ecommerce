import { MainProducts } from '@/components/Home/MainProducts';
import { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Future Eccomerce',
	description: 'Welcome to the future world ecommerce',
};

export default function Home() {
	return (
		<main>
			<MainProducts />
		</main>
	);
}
