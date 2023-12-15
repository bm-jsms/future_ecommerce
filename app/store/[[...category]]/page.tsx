import React from 'react';

interface CategoryProps {
	params: {
		category: string;
	};
}

const page = (props: CategoryProps) => {
	const { category } = props.params;
	return (
		<div>
			<h2>Dinamic Category Section: {category}</h2>
		</div>
	);
};

export default page;
