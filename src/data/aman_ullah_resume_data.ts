import { ICaseStudy, ISummaryLine } from '@types';

export const site_owner_name = 'Aman Ullah';
export const site_base_domain = 'iamanullah.com';
export const site_full_url = `https://${site_base_domain}`;
export const site_owner_full_techstack = [];
export const site_owner_email = `amanullah8225@gmail.com`;
export const site_owner_phoneNumber = `+8801680298225`;
export const site_owner_talk_about = [
	'React',
	'Next.js',
	'Javascript',
	'Typescript',
	'Redux',
	'MobX',
	'Recoil',
	'Material UI',
	'Node.js',
	'Express.js',
	'MongoDB',
	'RESTful APIs',
	'Playwright',
	'Docker',
	'AWS',
	'CI/CD',
	'GitHub Actions',
	'HTML5',
	'CSS',
	'Web Performance',
	'Responsive UI',
	'SEO',
];
export const site_thumbnail_url =
	'https://res.cloudinary.com/jacobherper/image/upload/v1641565970/website-dark-light.png';
export const online_presence = [
	'https://linkedin.com/in/amanullah8225',
	'https://github.com/amanullah8225',
];
export const title = {};

const aman_ullah_resume_data = {
	potraif_favicon_image:
		'https://iamanullah.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Faman_ullah.305e0bfe.jpg&w=96&q=100',
	$schema:
		'https://raw.githubusercontent.com/jsonresume/resume-schema/v1.0.0/schema.json',
	baseDomain: site_base_domain,
	name: site_owner_name,
	textContent: {
		homePage: {
			title: 'Senior Frontend Developer | Aman Ullah',
			description:
				'Senior Frontend Developer with 10+ years of experience, including 6+ years in ReactJS and 4+ years in Next.js, plus 3 years as a Team Lead. Proficient in JavaScript, TypeScript, and advanced UI/UX development, specializing in high-performance, SEO-friendly applications. Currently expanding backend expertise in Node.js and RESTful APIs to transition into a Full Stack Developer role.',
			keywords: [
				'Senior Frontend Developer',
				'Aman Ullah',
				'React',
				'Next.js',
				'TypeScript',
				'JavaScript',
				'Node.js',
				'UI/UX',
				'SEO',
				'Team Lead',
				'Full-Stack',
			],
		},
		introduction: {
			site: "Hey, I'm Aman Ullah",
		},
		jobTitleDescription: {
			site: 'Senior Frontend Developer | Aspiring Full-Stack Developer',
		},
		shortDescription: {
			site: `Senior Frontend Developer with 10+ years of frontend experience, including 6+ years in ReactJS and 4+ years in Next.js, plus 3 years as a Team Lead. Proficient in JavaScript, TypeScript, and advanced UI/UX development, specializing in high-performance, and SEO-friendly applications. Currently expanding backend expertise in Node.js and RESTful APIs to transition into a Full Stack Developer role.<br/><br/>You can talk to me about`,
		},
		talkAbout: [...site_owner_talk_about],
	},
	basics: {
		name: site_owner_name,
		label: 'Senior Frontend Developer | React | Next.js | UI/UX | TypeScript',
		image: '',
		email: site_owner_email,
		phone: site_owner_phoneNumber,
		url: site_base_domain,
		summary:
			'Senior Frontend Developer with 10+ years of experience, including 6+ years in ReactJS and 4+ years in Next.js, plus 3 years as a Team Lead. Proficient in JavaScript, TypeScript, and advanced UI/UX development, specializing in high-performance, SEO-friendly applications. Currently expanding backend expertise in Node.js and RESTful APIs to transition into a Full Stack Developer role.',
		location: {
			countryCode: 'BD',
			address: 'Dhaka, Bangladesh',
		},
		profiles: [
			{
				network: 'LinkedIn',
				username: 'amanullah8225',
				url: 'https://www.linkedin.com/in/amanullah8225/',
			},
			{
				network: 'GitHub',
				username: 'amanullah8225',
				url: 'https://github.com/amanullah8225',
			},
		],
	},
	work: [
		{
			name: 'Oxford Sustainable',
			company: {
				city: 'Remote',
				country: 'UK',
				name: 'Oxford Sustainable',
				logo: 'oxford-sustainable',
				url: 'https://oxfordsustainable.com/',
			},
			jobTitle: 'Senior Frontend Developer',
			startDate: '2024-11-01',
			endDate: '',
			technologies: [
				'JavaScript',
				'TypeScript',
				'React',
				'Next.js',
				'Redux',
				'Jotai',
				'Node.js',
				'Express.js',
				'MongoDB',
				'MERN',
				'React-Email',
				'Tailwind CSS',
				'Puppeteer',
				'Playwright',
				'E2E Testing',
				'Jest',
				'Docker',
				'AWS',
				'CI/CD',
			],
			highlights: [],
			summary: [
				{
					text: 'Redesigned the B2C website with Next.js, improving performance and SEO.',
				},
				{ text: 'Built an internal design system to ensure UI consistency.' },
				{
					text: 'Developed a MERN-based auto-promotion mailing system and a dynamic email templating system.',
				},
				{
					text: 'Worked on the admin panel, creating multiple APIs for efficient data management.',
				},
				{ text: 'Implemented a referendum voting system.' },
				{
					text: 'Integrated the latest HubSpot API into its backend and frontend to enhance lead generation, track user behaviour and check ROI.',
				},
				{ text: 'Ensured testing with Jest and Playwright.' },
				{
					text: 'Set up CI/CD pipelines and containerized deployments with Docker on AWS.',
				},
			] as ISummaryLine[],
			url: 'https://oxfordsustainable.com/',
			location: 'UK (Remote)',
		},
		{
			name: 'ShareTrip LTD',
			company: {
				city: 'Dhaka',
				country: 'Bangladesh',
				name: 'ShareTrip LTD',
				logo: 'sharetrip-short',
				url: 'https://sharetrip.net',
			},
			jobTitle: 'Frontend Engineer (Lead)',
			startDate: '2018-08-31',
			endDate: '2024-10-31',
			technologies: [
				'JavaScript',
				'TypeScript',
				'React',
				'NextJS',
				'Context API',
				'Recoil',
				'Redux',
				'MobX',
				'Jotai',
				'Advanced UI',
				'Tailwind CSS',
				'Playwright',
				'E2E Testing',
				'Docker',
				'AWS',
				'CI/CD',
			],
			highlights: [],
			summary: [
				{
					text: 'Helped web flight services generate 600 million BDT in monthly sales and handle 72K+ visitors per month.',
				},
				{
					text: 'Developed the frontend for booking services, including Flights, Hotels, Visas, Holidays, Tours, and Transfers.',
				},
				{
					text: 'Redesigned and rebuilt B2C & B2B platforms 4-5 times using Next.js & TypeScript, improving UX and performance.',
				},
				{
					text: 'Created a dynamic coupon system for B2C users, ensuring seamless integration across services.',
				},
				{
					text: 'Built an extensive design system to support complex UI/UX needs across multiple booking services.',
				},
				{
					text: 'Mentored and led a team of 5 frontend engineers for 3 years, ensuring high-quality deliverables.',
				},
				{
					text: 'Set up CI/CD pipelines and containerized deployments with Docker on AWS.',
				},
			] as ISummaryLine[],
			url: 'https://www.linkedin.com/company/sharetrip/',
			location: 'Dhaka',
		},
		{
			name: 'Rasuta Energy LTD',
			company: {
				city: 'Birmingham',
				country: 'UK',
				name: 'Rasuta Energy LTD',
				logo: 'Rasuta-Energy-LTD-short',
				url: '',
			},
			jobTitle: 'Software Engineer (Contract)',
			startDate: '2020-01-31',
			endDate: '2021-06-30',
			technologies: [
				'JavaScript',
				'React',
				'NestJS',
				'MobX',
				'Dart',
				'Flutter',
			],
			highlights: [],
			summary: [
				{
					text: 'Developed a React application for displaying London Air Forecast on Google Maps.',
				},
				{
					text: 'Created a responsive UI for air quality monitoring with data visualization.',
				},
				{ text: 'Built a mobile application using Flutter.' },
				{ text: 'Constructed and integrated REST API using NestJS.' },
			] as ISummaryLine[],
			url: '',
			location: 'Birmingham, England, United Kingdom',
		},
		{
			name: 'Pharma71',
			company: {
				city: 'Dhaka',
				country: 'Bangladesh',
				name: 'Pharma71',
				logo: 'pharma71-short',
				url: '',
			},
			jobTitle: 'Software Engineer',
			startDate: '2018-03-31',
			endDate: '2018-07-31',
			technologies: [
				'JavaScript',
				'React',
				'Redux',
				'Ant Design',
				'React Native',
			],
			highlights: [],
			summary: [
				{
					text: 'Built flight booking system with React, Redux and Ant Design stack.',
				},
				{ text: 'Developed Pharma71 R&D Mobile app using React Native.' },
			] as ISummaryLine[],
			url: '',
			location: 'Dhaka',
		},
		{
			name: 'Beatnik',
			company: {
				city: 'Dhaka',
				country: 'Bangladesh',
				name: 'Beatnik',
				logo: 'beatnik-short',
				url: '',
			},
			jobTitle: 'Front End Developer',
			startDate: '2017-02-28',
			endDate: '2018-02-28',
			technologies: ['JavaScript', 'HTML', 'CSS', 'WordPress', 'Responsive UI'],
			highlights: [],
			summary: [
				{
					text: 'Created WordPress and static websites for high-value local clients.',
				},
				{
					text: 'Delivered responsive, high-performance websites using vanilla JavaScript.',
				},
				{ text: 'Created around 15 PSD to HTML websites.' },
				{
					text: 'Got my hands dirty with vanilla JavaScript on small to enterprise level projects.',
				},
			] as ISummaryLine[],
			url: '',
			location: 'Dhaka',
		},
		{
			name: 'Colors Of Bangladesh',
			company: {
				city: 'Dhaka',
				country: 'Bangladesh',
				name: 'Colors Of Bangladesh',
				logo: 'cob-short',
				url: '',
			},
			jobTitle: 'Front End Developer',
			startDate: '2016-01-31',
			endDate: '2016-08-31',
			technologies: ['JavaScript', 'HTML', 'CSS', 'WordPress', 'Responsive UI'],
			highlights: [],
			summary: [
				{ text: 'Created website and services for high-value local clients.' },
				{
					text: 'Got my hands dirty with vanilla JavaScript on small to enterprise level projects.',
				},
				{ text: 'Improved Performance and Usability of the websites.' },
				{ text: 'Learned about Ionic there.' },
				{
					text: 'Created website and services for high-value govt clients like army and national museum.',
				},
				{ text: 'Custom made software for touch Kiosk and dynamic banner.' },
				{ text: 'Created Pixel Perfect UI for WordPress projects.' },
				{ text: 'Created Custom WordPress theme.' },
				{ text: 'Built responsive and adaptive sites.' },
				{ text: 'Also built SEO Friendly HTML Markups.' },
			] as ISummaryLine[],
			url: '',
			location: 'Banani, Dhaka',
		},
		{
			name: 'EvenFly',
			company: {
				city: 'Dhaka',
				country: 'Bangladesh',
				name: 'EvenFly',
				logo: 'evenfly-short',
				url: 'https://EvenFly.com',
			},
			jobTitle: 'Frontend Developer',
			startDate: '2014-09-30',
			endDate: '2014-12-31',
			technologies: ['JavaScript', 'HTML', 'CSS', 'E-mail UI', 'Responsive UI'],
			highlights: [],
			summary: [
				{ text: 'Created website and services for high-value local clients.' },
				{
					text: 'Got my hands dirty with vanilla JavaScript on small to enterprise level projects.',
				},
				{ text: 'Improved Performance and Usability of the websites.' },
			] as ISummaryLine[],
			url: '',
			location: 'Bashudhara Residential Area, Dhaka',
		},
	],
	education: [
		{
			institute: {
				name: 'Victoria University of Bangladesh',
				city: '',
				country: 'Bangladesh',
				location: 'Bangladesh',
				url: '',
				logo: '',
			},
			course: 'Bachelor of Arts (B.A.), English Language and Literature',
			area: 'Bachelor of Arts (B.A.), English Language and Literature (2009 – 2014)',
			date: '2014-01-01',
			technologies: [],
		},
		{
			institute: {
				name: 'Narayanganj College and University',
				city: '',
				country: 'Bangladesh',
				location: 'Bangladesh',
				url: '',
				logo: '',
			},
			course: 'H.S.C, Business/Commerce',
			area: 'H.S.C, Business/Commerce (2007 – 2009)',
			date: '2009-01-01',
			technologies: [],
			hidden: true,
		},
		{
			institute: {
				name: 'B M Union High School',
				city: '',
				country: 'Bangladesh',
				location: 'Bangladesh',
				url: '',
				logo: '',
			},
			course: 'S.S.C, Commerce',
			area: 'S.S.C, Commerce (2005 – 2007)',
			date: '2007-01-01',
			technologies: [],
			hidden: true,
		},
	],
	projects: [
		{
			id: 'oxford-sustainable-b2c',
			slug: 'oxford-sustainable-b2c-platform-architecture',
			title: 'Modernizing the Oxford Sustainable B2C Platform & Internal Tools',
			seoDescription:
				"Discover how I redesigned Oxford Sustainable's B2C platforms and internal applications, improving performance and SEO while building a robust design system.",
			projectUrl: 'https://oxfordsustainable.com/',
			client: {
				name: 'Oxford Sustainable',
				logo: 'oxford-sustainable',
			},
			technologies: [
				'Next.js',
				'React',
				'Redux',
				'Jotai',
				'Node.js',
				'Express.js',
				'MongoDB',
				'React-Email',
				'Tailwind CSS',
				'Playwright',
				'E2E Testing',
				'FinTech Security',
				'Docker',
				'AWS',
				'CI/CD',
			],
			primaryImage: '/assets/case-studies/oxford-sustainable-main.png',
			secondaryImages: [
				'/assets/case-studies/oxford-sustainable-top.png',
				'/assets/case-studies/oxford-sustainable-bottom.png',
			],
			content: `<p>At Oxford Sustainable, I was tasked with a comprehensive overhaul of the B2C website and internal tools. The goal was to enhance user experience, improve SEO, and streamline our internal workflows.</p><br/>
<p>I spearheaded the redesign using <strong>Next.js</strong> and <strong>React</strong>, which immediately yielded significant improvements in page load speeds and organic search visibility. To ensure consistency across our growing ecosystem, I architected a custom internal design system from the ground up.</p><br/>
<p>Beyond the frontend, I developed a MERN-based auto-promotion mailing system with a dynamic email templating engine, greatly reducing the marketing team's operational overhead. I also integrated the latest HubSpot APIs to enhance lead generation tracking. Quality was ensured through rigorous end-to-end testing with Jest and Playwright, resulting in a highly stable, high-performance platform.</p><br/>
<p>On the infrastructure side, I set up <strong>CI/CD</strong> pipelines and containerized deployments with <strong>Docker</strong> on <strong>AWS</strong>, streamlining releases across the platform.</p>`,
		},
		{
			id: 'sharetrip-booking',
			slug: 'sharetrip-scalable-booking-platform',
			title: "Scaling ShareTrip's Travel Booking Platforms",
			seoDescription:
				'Learn how I led the frontend development at ShareTrip, scaling the platform to handle 600M BDT in monthly sales and 72K+ active visitors.',
			projectUrl: 'https://sharetrip.net',
			client: {
				name: 'ShareTrip LTD',
				logo: 'sharetrip-short',
			},
			technologies: [
				'React',
				'Next.js',
				'TypeScript',
				'Context API',
				'Redux',
				'MobX',
				'Recoil',
				'Jotai',
				'Tailwind CSS',
				'Playwright',
				'E2E Testing',
				'Docker',
				'AWS',
				'CI/CD',
			],
			primaryImage: '/assets/case-studies/sharetrip-main.png',
			secondaryImages: [
				'/assets/case-studies/sharetrip-top.png',
				'/assets/case-studies/sharetrip-bottom.png',
			],
			content: `<p>During my 6-year tenure at ShareTrip, the platform evolved into a massive travel ecosystem. I led a team of 5 frontend engineers in developing and scaling the frontend architecture that handled Flights, Hotels, Visas, Holidays, Tours, and Transfers.</p><br/>
<p>The challenge was managing complex state and massive traffic—handling over <strong>72K+ monthly visitors</strong> and processing <strong>600 million BDT</strong> in monthly sales. To keep the platform fast and maintainable, I led the redesign and rebuild of both B2C and B2B platforms multiple times, ultimately migrating to <strong>Next.js</strong> and <strong>TypeScript</strong> for better UX and developer experience.</p><br/>
<p>One of the standout features I architected was a dynamic coupon system for B2C users that seamlessly integrated across all booking services. By building an extensive, reusable design system, my team was able to rapidly ship new features without sacrificing UI quality or performance.</p><br/>
<p>I also set up <strong>CI/CD</strong> pipelines and containerized deployments with <strong>Docker</strong> on <strong>AWS</strong>, streamlining releases across the B2C and B2B platforms.</p>`,
		},
		{
			id: 'uideck-pagebuilder',
			slug: 'uideck-pagebuilder-template-editor',
			title: "Building UIdeck's PageBuilder, a Wix-Like Template Editor",
			seoDescription:
				'A drag-and-drop page builder I built for UIdeck, an HTML/Bootstrap/Tailwind template marketplace: a Wix-like editor for their Themeforest-style templates, with inline editing, media management, and zip export.',
			projectUrl: 'https://uideck.com/',
			client: {
				name: 'UIdeck',
			},
			technologies: ['React', 'MobX', 'SCSS', 'Webpack', 'Express.js', 'Node.js'],
			primaryImage: '/assets/case-studies/pagebuilder-main.svg',
			content: `<p>UIdeck builds and sells HTML, Bootstrap, and Tailwind CSS website templates. For them, I built PageBuilder — a tool that takes their Themeforest-style HTML templates and makes them editable, Wix-style, without touching code.</p><br/>
<p>It supports inline text editing similar to the Medium editor, a media gallery for swapping images in any layer, and custom editing panels for creative sections. Each section is re-orderable and has a changeable background. Finished pages export as a zip containing all the necessary HTML, CSS, JS, and PHP files, ready to drop onto any server. The editor is built with <strong>React</strong> and <strong>MobX</strong>, styled with <strong>SCSS</strong>, and backed by a <strong>Node.js</strong>/<strong>Express.js</strong> API.</p>`,
		},
		{
			id: 'pharma71-medicine-delivery',
			slug: 'pharma71-medicine-delivery-platform',
			title: "Building Pharma71's Android App & Dashboard",
			seoDescription:
				'A look back at building the React Native Android app and React dashboard for Pharma71, a medicine delivery service.',
			client: {
				name: 'Pharma71',
				logo: 'pharma71-short',
			},
			technologies: ['React', 'Redux', 'Ant Design', 'React Native'],
			primaryImage: '/assets/case-studies/pharma71-main.svg',
			content: `<p>At Pharma71, a medicine delivery service, I built the Android app using <strong>React Native</strong> and <strong>Redux</strong>.</p><br/>
<p>Alongside the app, I wrote the <strong>React</strong> and markup for Pharma71's internal Dashboard, using <strong>Ant Design</strong> for the component library.</p>`,
		},
		{
			id: 'ticketchai-booking',
			slug: 'ticketchai-ticket-booking-platform',
			title: "Building TicketChai's Flight Booking Platform",
			seoDescription:
				'A look back at building a flight booking platform with React, Redux and Redux Saga for TicketChai, a Dhaka-based ticket booking service.',
			projectUrl: 'https://www.ticketchai.com/',
			client: {
				name: 'TicketChai',
			},
			technologies: ['React', 'Redux', 'Redux Saga', 'Ant Design'],
			primaryImage: '/assets/case-studies/ticketchai-main.svg',
			content: `<p>TicketChai was a Dhaka-based flight booking service and sister concern of Pharma71, where I was formally employed. I built its booking platform using <strong>React</strong>, <strong>Redux</strong> and <strong>Redux Saga</strong> for state and side-effect management, and <strong>Ant Design</strong> for the component library — covering search, selection, and booking flows.</p>`,
		},
		{
			id: 'axisbd-frontend',
			slug: 'axisbd-frontend-development',
			title: 'Front End Development for AXIS BD',
			seoDescription:
				'Front end development for AXIS BD, an industrial construction and infrastructure company in Bangladesh.',
			projectUrl: 'http://axisbd.com/',
			client: {
				name: 'AXIS BD',
			},
			technologies: ['HTML', 'CSS', 'JavaScript'],
			primaryImage: '/assets/case-studies/axisbd-main.svg',
			content: `<p>Built the front end for AXIS BD, an industrial construction and infrastructure company in Bangladesh offering end-to-end building solutions.</p>`,
		},
		{
			id: 'bengal-meat-qurbani',
			slug: 'bengal-meat-qurbani-campaign',
			title: "Front End for Bengal Meat's Qurbani Campaign",
			seoDescription:
				"Front end development for Bengal Meat's Qurbani campaign page, part of their halal meat e-commerce platform.",
			projectUrl: 'https://bengalmeat.com/qurbani/',
			client: {
				name: 'Bengal Meat',
			},
			technologies: ['HTML', 'CSS', 'JavaScript'],
			primaryImage: '/assets/case-studies/bengalmeat-main.svg',
			content: `<p>Built the front end for Bengal Meat's Qurbani campaign page, part of their e-commerce platform for ordering halal meat products online.</p>`,
		},
		{
			id: 'ace-advisory-frontend',
			slug: 'ace-advisory-frontend-development',
			title: 'Front End Development for ACE Advisory',
			seoDescription:
				'Front end development for ACE Advisory, an accounting, payroll, tax and corporate secretarial services firm in Bangladesh.',
			projectUrl: 'https://aceadvisory.biz/',
			client: {
				name: 'ACE Advisory',
			},
			technologies: ['HTML', 'CSS', 'JavaScript'],
			primaryImage: '/assets/case-studies/aceadvisory-main.svg',
			content: `<p>Built the front end for ACE Advisory, an accounting, payroll, tax, and corporate secretarial services firm serving businesses in Bangladesh.</p>`,
		},
		{
			id: 'sitar-restaurant-ottawa',
			slug: 'sitar-indian-restaurant-ottawa',
			title: 'Front End & WordPress for Sitar Indian Restaurant',
			seoDescription:
				"Front end development and WordPress theming for Sitar Indian Restaurant's website in Ottawa, Canada.",
			projectUrl: 'http://sitarindianrestaurantottawa.ca/',
			client: {
				name: 'Sitar Indian Restaurant',
			},
			technologies: ['HTML', 'CSS', 'WordPress'],
			primaryImage: '/assets/case-studies/sitar-main.svg',
			content: `<p>Built the front end and WordPress theme for Sitar Indian Restaurant's website in Ottawa, Canada.</p>`,
		},
		{
			id: 'i-clique-website',
			slug: 'i-clique-website',
			title: 'Front End & WordPress for i-clique',
			seoDescription:
				"Front end development and WordPress theming for i-clique's website.",
			projectUrl: 'http://www.i-clique.net',
			client: {
				name: 'i-clique',
			},
			technologies: ['HTML', 'CSS', 'WordPress'],
			primaryImage: '/assets/case-studies/iclique-main.svg',
			content: `<p>Built the front end and WordPress theme for i-clique's website.</p>`,
		},
	] as ICaseStudy[],
};

export default aman_ullah_resume_data;
