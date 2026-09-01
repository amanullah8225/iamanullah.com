'use client';

import Typed from 'react-typed';

export function TypedTalkAbout({ strings }: { strings: string[] }) {
	return (
		<Typed
			loop
			typeSpeed={80}
			backSpeed={20}
			strings={strings}
			smartBackspace
			backDelay={1000}
			loopCount={0}
			showCursor
			cursorChar="|"
		/>
	);
}
