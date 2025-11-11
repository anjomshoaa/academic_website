export const profile = {
	fullName: 'Amin Anjomshoaa',
	title: 'Senior Researcher',
	institute: 'Vienna University of Economics and Business',
	author_name: 'Amin Anjomshoaa', // Author name to be highlighted in the papers section
	research_area: 'In my research I explore how data and knowledge can drive actionable insights through applied knowledge management and data science. Our goal is to make knowledge universally accessible, fostering a knowledge-driven society. We focus on neuro-symbolic AI—combining structured reasoning with machine learning for transparency and intelligence—and on data spaces that enable secure, interoperable, and trusted data sharing across domains.',
	research_areas: [
		// { title: 'Physics', description: 'Brief description of the research interest', field: 'physics' },
	],
}

// Set equal to an empty string to hide the icon that you don't want to display
export const social = {
	email: 'amin.anjomshoaa@wu.ac.at',
	linkedin: 'https://at.linkedin.com/in/amin-anjomshoaa-4a479227',
	x: 'https://x.com/aminbits',
	github: '',
	gitlab: '',
	scholar: 'https://scholar.google.com/citations?user=E35-e3QAAAAJ&hl=en',
	inspire: '',
	arxiv: '',
	orcid: 'https://orcid.org/0000-0001-6277-742X',
}

export const template = {
	website_url: 'https://anjomshoaa.github.io', // Astro needs to know your site’s deployed URL to generate a sitemap. It must start with http:// or https://
	menu_left: false,
	transitions: true,
	lightTheme: 'emerald', // Select one of the Daisy UI Themes or create your own
	darkTheme: 'dim', // Select one of the Daisy UI Themes or create your own
	excerptLength: 200,
	postPerPage: 5,
    base: '' // Repository name starting with /
}

export const seo = {
	default_title: 'Amin Anjomshoaa',
	default_description: 'Amin Anjomshoaa academic websites.',
	default_image: '/images/astro-academia.png',
}
