import { MobileMenu } from '../MobileMenu';
import { render } from '@testing-library/react';

jest.mock('next/navigation', () => ({
	__esModule: true,
	usePathname: jest.fn().mockReturnValue('/'),
}));

describe('MobileMenu', () => {
	it('renders correctly', () => {
		const { container } = render(<MobileMenu isOpen={true} />);
		expect(container).toMatchSnapshot();
	});
});
