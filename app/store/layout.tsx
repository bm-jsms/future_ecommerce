import React from 'react';
import { getCollections } from '@/services/shopify/collections';
import styles from './StoreLayout.module.scss';
import Link from 'next/link';

interface CollectionType {
	id: string;
	handle: string;
	title: string;
}

const layout = async ({ children }: { children: React.ReactNode }) => {
	const collections = await getCollections();
	return (
		<main className={styles.StoreLayout}>
			<h1>Explore:</h1>
			<nav>
				<ul className={styles.StoreLayout__list}>
					{collections.map((collection: CollectionType) => (
						<Link
							key={collection.id}
							href={'/store/' + collection.handle}
							className={styles.StoreLayout__chip}
						>
							{collection.title}
						</Link>
					))}
				</ul>
			</nav>
			{children}
		</main>
	);
};

export default layout;
