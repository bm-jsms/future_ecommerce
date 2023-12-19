import Image from 'next/image';
import Link from 'next/link';
import styles from '@/sass/not-found.module.scss';

export default function NotFound() {
	return (
		<main className={styles.NotFound}>
			<h1 className={styles.NotFound__title}>404</h1>
			<Image src='/images/404.png' alt='404' width={300} height={300} />
			<h2 className={styles.NotFound__subtitle}>
				Ops, the page you are looking for does not exist
			</h2>
			<p className={styles.NotFound__description}>
				But we have many other products that may interest you
			</p>
			<Link className={styles.NotFound__link} href='/store'>
				Go to the store
			</Link>
		</main>
	);
}
