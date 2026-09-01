import { Header } from '../Header';
import { render } from '@testing-library/react';

jest.mock('Atoms/NavigationItem');
jest.mock('next/navigation', () => ({
	__esModule: true,
	usePathname: jest.fn().mockReturnValue('/'),
}));
jest.mock('Atoms/Logo');

describe('Header', () => {
	it('renders correctly', () => {
		const { container } = render(<Header />);
		expect(container).toMatchSnapshot();
	});
});
