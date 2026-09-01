import { Layout } from '../Layout';
import { render } from '@testing-library/react';

jest.mock('next/navigation', () => ({
	__esModule: true,
	usePathname: jest.fn().mockReturnValue('/'),
}));
jest.mock('Atoms/Logo');

describe('Layout', () => {
	it('renders correctly', () => {
		const { container } = render(<Layout>Some content</Layout>);
		expect(container).toMatchSnapshot();
	});
});
