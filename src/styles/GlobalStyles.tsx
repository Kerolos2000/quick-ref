import MuiGlobalStyles from '@mui/material/GlobalStyles';
import { useTheme } from '@mui/material/styles';

export interface GlobalStylesProps {}

export const GlobalStyles: React.FC<GlobalStylesProps> = () => {
	const theme = useTheme();

	return (
		<MuiGlobalStyles
			styles={{
				':root': {
					'--toastify-color-dark': '#121212',
					'--toastify-color-error': '#ef4444',
					'--toastify-color-info': '#0ea5e9',
					'--toastify-color-light': '#f3f4f6',
					'--toastify-color-success': '#10b981',
					'--toastify-color-warning': '#f59e0b',
					'--toastify-font-family': 'Cairo Variable, sans-serif',
					'--toastify-text-color-dark': '#121212',
					'--toastify-text-color-light': '#757575',
					'--toastify-toast-background': '#f8f8f8',
				},
				'.MuiDrawer-paper': {
					'::-webkit-scrollbar': {
						width: 0,
					},
					'::-webkit-scrollbar-thumb': {
						backgroundColor: theme.palette.primary.dark,
					},
				},
				'*': {
					direction: 'ltr',
				},
				'*::-webkit-scrollbar': {
					width: theme.spacing(1),
				},
				'*::-webkit-scrollbar-thumb': {
					':hover': {
						backgroundColor: theme.palette.primary.dark,
					},
					backgroundColor: theme.palette.primary.main,
				},
				'*::selection': {
					backgroundColor: theme.palette.primary.main,
					color: theme.palette.common.white,
				},
				body: {
					overflowX: 'hidden',
				},
			}}
		/>
	);
};
