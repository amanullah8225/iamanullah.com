'use client';

import { useEffect } from 'react';

import { Container } from 'Atoms/Container';

export default function Error({
	error,
	reset,
}: {
	error: Error & { digest?: string };
	reset: () => void;
}) {
	useEffect(() => {
		// eslint-disable-next-line no-console
		console.error(error);
	}, [error]);

	return (
		<Container>
			<div className="flex flex-col items-center justify-center py-32 text-center">
				<p className="headline text-4xl md:text-6xl">Something went wrong</p>
				<h1 className="mt-4 text-lg md:text-xl">
					An unexpected error occurred while rendering this page.
				</h1>
				<button
					type="button"
					onClick={reset}
					className="mt-8 gradient-border rounded-md px-4 py-2 headline hover:gradient-bg hover:text-off-white"
				>
					Try again
				</button>
			</div>
		</Container>
	);
}
