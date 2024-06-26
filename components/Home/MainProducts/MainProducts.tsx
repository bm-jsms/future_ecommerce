import Image from 'next/image';
import styles from './MainProducts.module.scss';
import React from 'react';
import { getProducts } from '@/services/shopify/products';

type ProductProps = {
	products: ProductType[];
};

export const MainProducts = async () => {
	const res = await fetch('http://localhost:3000/api');
	const { products } = await res.json();

	console.log(products);

	console.log(process.env.SHOPIFY_HOSTNAME);

	return (
		<section className={styles.MainProducts}>
			<h3>✨ New products released!</h3>
			<div className={styles.MainProducts__grid}>
				{products?.map((product) => {
					const imageSrc = product.images[0].src;
					return (
						<article key={product.id}>
							<p>{product.title}</p>
							<Image src={imageSrc} fill alt={product.title} loading='eager' />
						</article>
					);
				})}
			</div>
		</section>
	);
};
