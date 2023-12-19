import Image from 'next/image';
import styles from './MainProducts.module.scss';
import React from 'react';
const getProducts = async () => {
	try {
		const res = await fetch(
			`${process.env.SHOPIFY_HOSTNAME}/admin/api/2023-10/products.json`,
			{
				headers: new Headers({
					'X-Shopify-Access-Token': process.env.SHOPIFY_API_KEY || '',
				}),
			},
		);
		const { products } = await res.json();
		return products;
	} catch (error) {
		console.log(error);
	}
};

export const MainProducts = async () => {
	const products = await getProducts();
	console.log(products);

	console.log(process.env.SHOPIFY_HOSTNAME);

	return (
		<section className={styles.MainProducts}>
			<h3>✨ New products released!</h3>
			<div className={styles.MainProducts__grid}>
				{products?.map(product => {
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
