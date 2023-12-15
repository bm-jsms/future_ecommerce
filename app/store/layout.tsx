import React from 'react';

interface LayoutProps {
	children: React.ReactNode;
}

const layout = ({ children }: LayoutProps) => {
	return (
		<main>
			<nav>Navegacion de la tienda</nav>
			{children}
		</main>
	);
};

export default layout;
