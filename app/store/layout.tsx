import React from 'react';

interface LayoutProps {
	children: React.ReactNode;
}

const layout = ({ children }: LayoutProps) => {
	return (
		<main>
			<nav>Store Navigation</nav>
			{children}
		</main>
	);
};

export default layout;
