import { SocialIcons } from 'Molecules/SocialIcons';

const Footer = () => {
	return (
		<footer className="flex justify-between mt-8 md:mt-20 px-4 md:px-20 py-8">
			<span>&copy; {new Date().getFullYear()} Aman Ullah</span>
			<SocialIcons
				profiles={[
					{
						name: 'Github',
						url: 'https://www.github.com/amanullah8225',
						icon: 'GITHUB',
					},
					{
						name: 'LinkedIn',
						url: 'https://www.linkedin.com/in/amanullah8225',
						icon: 'LINKEDIN',
					},
					// {
					// 	name: 'Twitter',
					// 	url: 'https://twitter.com/amanullah8225',
					// 	icon: 'TWITTER',
					// },
					// {
					// 	name: 'Instagram',
					// 	url: 'https://www.instagram.com/@amanullah8225',
					// 	icon: 'INSTAGRAM',
					// },
				]}
			/>
		</footer>
	);
};

export { Footer };
