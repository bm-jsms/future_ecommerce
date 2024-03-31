const productPage = async ({ params }: { params: { handle: string } }) => {
	return <h1>productPage {params.handle}</h1>;
};

export default productPage;
