'use client';

import { use, useEffect } from 'react';

interface ErrorProps {
	error: Error;
	reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
	useEffect(() => {
		console.log(error);
	}, [error]);

	return (
		// This component needs to be styled
		<div
			style={{
				padding: '10rem',
			}}
		>
			<h2>:c</h2>
			<p>
				We´re sorry, but an unhandled error occurred. Please see the console for
				more details.
			</p>

			<button onClick={reset}>Try again</button>
		</div>
	);
}
