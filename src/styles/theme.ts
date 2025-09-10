import { createTheme, ThemeOptions } from '@mui/material/styles';

const commonComponents: ThemeOptions['components'] = {
	MuiPaper: {
		styleOverrides: {
			root: {
				'--Paper-elevation': 'none !important',
				'--Paper-overlay': 'none !important',
			},
		},
	},
};

const commonShadows: ThemeOptions['shadows'] = [
	'none',
	'0 1px 2px 0 rgba(0,0,0,0.05)',
	'0 1px 3px 0 rgba(0,0,0,0.1)',
	'0 4px 6px -1px rgba(0,0,0,0.1)',
	'0 10px 15px -3px rgba(0,0,0,0.1)',
	'0 20px 25px -5px rgba(0,0,0,0.1)',
	'0 25px 50px -12px rgba(0,0,0,0.25)',
	'0 2px 4px rgba(0,0,0,0.05)',
	'0 3px 6px rgba(0,0,0,0.07)',
	'0 4px 8px rgba(0,0,0,0.08)',
	'0 5px 10px rgba(0,0,0,0.09)',
	'0 6px 12px rgba(0,0,0,0.1)',
	'0 7px 14px rgba(0,0,0,0.1)',
	'0 8px 16px rgba(0,0,0,0.1)',
	'0 9px 18px rgba(0,0,0,0.11)',
	'0 10px 20px rgba(0,0,0,0.12)',
	'0 12px 24px rgba(0,0,0,0.12)',
	'0 14px 28px rgba(0,0,0,0.13)',
	'0 16px 32px rgba(0,0,0,0.14)',
	'0 18px 36px rgba(0,0,0,0.15)',
	'0 20px 40px rgba(0,0,0,0.15)',
	'0 22px 44px rgba(0,0,0,0.16)',
	'0 24px 48px rgba(0,0,0,0.17)',
	'0 26px 52px rgba(0,0,0,0.18)',
	'0 28px 56px rgba(0,0,0,0.2)',
];

const lightTheme: ThemeOptions = createTheme({
	components: commonComponents,
	direction: 'rtl',
	palette: {
		background: { default: '#F9FAFB', paper: '#FFFFFF' },
		error: {
			contrastText: '#FFFFFF',
			dark: '#dc2626',
			light: '#f87171',
			main: '#ef4444',
		},
		info: {
			contrastText: '#FFFFFF',
			dark: '#0369a1',
			light: '#38bdf8',
			main: '#0ea5e9',
		},
		mode: 'light',
		primary: {
			contrastText: '#000000',
			dark: '#517e06',
			light: '#bef264',
			main: '#a3e635',
		},
		secondary: {
			contrastText: '#FFFFFF',
			dark: '#7d76fcff',
			light: '#818cf8',
			main: '#6366f1',
		},
		success: {
			contrastText: '#FFFFFF',
			dark: '#059669',
			light: '#34d399',
			main: '#10b981',
		},
		text: { primary: '#111827', secondary: '#6B7280' },
		tonalOffset: 0.1,
		warning: {
			contrastText: '#111827',
			dark: '#d97706',
			light: '#fbbf24',
			main: '#f59e0b',
		},
	},
	shadows: commonShadows,
	typography: {
		allVariants: {
			fontFamily: 'Cairo Variable, roboto, sans-serif',
		},
		body1: { fontSize: '1rem', lineHeight: 1.5 },
		body2: { fontSize: '0.875rem', lineHeight: 1.43 },
		button: { fontWeight: 700, textTransform: 'none' },
		caption: { fontSize: '0.75rem', lineHeight: 1.25 },
		h1: { fontSize: '3rem', fontWeight: 700, lineHeight: 1.25 },
		h2: { fontSize: '2.25rem', fontWeight: 700, lineHeight: 1.3 },
		h3: { fontSize: '1.875rem', fontWeight: 700, lineHeight: 1.375 },
		h4: { fontSize: '1.5rem', fontWeight: 700, lineHeight: 1.375 },
		h5: { fontSize: '1.25rem', fontWeight: 700, lineHeight: 1.375 },
		h6: { fontSize: '1rem', fontWeight: 700, lineHeight: 1.375 },
		subtitle1: { fontSize: '1rem', lineHeight: 1.75 },
		subtitle2: { fontSize: '0.875rem', fontWeight: 600, lineHeight: 1.57 },
	},
});

export { lightTheme };
