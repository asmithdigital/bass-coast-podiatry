// Clinic details used across the site. Change them here, not in the pages.

const base = import.meta.env.BASE_URL.replace(/\/$/, '');

/** Adds the base path (/bass-coast-podiatry) to a site path such as '/contact/'. */
export const url = (path: string) => `${base}${path}`;

export const clinic = {
	name: 'Bass Coast Podiatry',
	phone: '(03) 5672 2309',
	phoneHref: 'tel:+61356722309',
	street: '182 Graham Street',
	suburb: 'Wonthaggi VIC 3995',
	/** Opening times used to work out today's hours. Days use JavaScript numbering: 0 is Sunday. */
	openDays: [1, 2, 3, 4, 5],
	openTime: '8:40 am',
	closeTime: '5:30 pm',
	hours: [
		{ days: 'Monday to Friday', time: '8:40 am to 5:30 pm' },
		{ days: 'Saturday and Sunday', time: 'Closed' },
	],
	hoursNote: 'Before and after hours appointments are available.',
	facebook: 'https://www.facebook.com/basscoastpodiatry/',
	directions: 'https://www.google.com/maps/dir/?api=1&destination=182+Graham+Street+Wonthaggi+VIC+3995',
	mapLink: 'https://www.google.com/maps/search/?api=1&query=182+Graham+Street+Wonthaggi+VIC+3995',
	mapEmbed: 'https://www.google.com/maps?q=182+Graham+Street+Wonthaggi+VIC+3995&output=embed',
	// [CHECK WITH CLIENT] Replace with the real Formspree form ID before going live.
	formspreeId: 'YOUR_FORM_ID',
};

export const nav = [
	{ label: 'Services', href: '/our-services/' },
	{ label: 'About', href: '/about-us/' },
	{ label: 'Claims and rebates', href: '/claims-rebates/' },
	{ label: 'FAQs', href: '/faqs/' },
	{ label: 'Contact', href: '/contact/' },
];

export const claims = ['Medicare', 'DVA', 'Tyro Health', 'TAC', 'WorkSafe'];

/** Shared by the home page accordion and the FAQ page. */
export const faqs = [
	{
		question: 'Do I need a referral to see a Podiatrist?',
		answer: [
			'You do not need a referral to see a Podiatrist at Bass Coast Podiatry.',
			'If your Podiatry treatment is going to be provided through the Department of Veterans Affairs, WorkCover, TAC or any other Health Package provider then you will require a referral from your General Practitioner.',
		],
		isNew: false,
	},
	{
		question: 'Can I claim my private health insurance rebate at the clinic?',
		answer: [
			'All patients covered by private health insurance at Bass Coast Podiatry can claim their treatment rebates through our electronic Tyro Health facility on site. You will need to bring your private health insurance card with you in order to use this facility.',
		],
		isNew: true,
	},
	{
		question: 'Are appointments available outside business hours?',
		answer: [
			'Bass Coast Podiatry is open 5 days per week, Monday to Friday 8:40 am to 5:30 pm. Before and after hours appointments are available.',
		],
		isNew: true,
	},
];
