import { Description } from '@/components/Home/Description';
import { Hero } from '@/components/Home/Hero';

export default function HomeLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div>
			<Hero />
			<Description />
			{children}
		</div>
	);
}
