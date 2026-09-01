import Link from 'next/link';

import { Container } from 'Atoms/Container';

export default function NotFound() {
	return (
		<Container>
			<div className="flex flex-col items-center justify-center py-32 text-center">
				<p className="headline text-6xl md:text-8xl">404</p>
				<h1 className="mt-4 text-xl md:text-2xl">This page could not be found.</h1>
				<Link href="/" className="mt-8 underline">
					Back to home
				</Link>
			</div>
		</Container>
	);
}
