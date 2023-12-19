'use client';
import React from 'react';
import styles from '@/sass/global-error.module.scss';
import Image from 'next/image';

export default function GlobalError({ reset }: ErrorPageProps) {
	return (
		<main className={styles.Error}>
			<h1 className={styles.Error__title}>An error occurred</h1>
			<Image src='/images/error.png' alt='Error' width={500} height={500} />
			<p className={styles.Error__message}>
				We´re sorry, but an unhandled error occurred. Please see the console for
				more details.
			</p>
			<button className={styles.Error__button} onClick={reset}>
				Try again
			</button>
		</main>
	);
}
