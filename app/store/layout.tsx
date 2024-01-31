import React from 'react';
import { getCollections } from '@/services/shopify/collections';
import Link from 'next/link';

interface LayoutProps {
	children: React.ReactNode;
}

const layout = async ({ children }: LayoutProps) => {
	const collections = await getCollections();
	return (
		<main>
			<nav>
				{collections.map(collection => (
					<Link key={collection.id} href={`/store/${collection.handle}`}>
						{collection.title}
					</Link>
				))}
			</nav>
			{children}
		</main>
	);
};

export default layout;
