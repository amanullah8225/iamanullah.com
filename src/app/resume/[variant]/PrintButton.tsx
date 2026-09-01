'use client';

import { Button } from 'Atoms/Button';

export function PrintButton() {
	return (
		<Button
			onClick={() => window.print()}
			className="text-sm"
			type="button"
		>
			Print / Save as PDF
		</Button>
	);
}
