import MuiGlobalStyles from '@mui/material/GlobalStyles';
import { useTheme } from '@mui/material/styles';

export interface GlobalStylesProps {}

export const GlobalStyles: React.FC<GlobalStylesProps> = () => {
	const theme = useTheme();

	return (
		<MuiGlobalStyles
			styles={{
				':root': {
					'--toastify-color-dark': theme.palette.text.primary,
					'--toastify-color-error': theme.palette.error.main,
					'--toastify-color-info': theme.palette.info.main,
					'--toastify-color-light': theme.palette.background.default,
					'--toastify-color-success': theme.palette.success.main,
					'--toastify-color-warning': theme.palette.warning.main,
					'--toastify-font-family': 'Cairo Variable, sans-serif',
					'--toastify-text-color-dark': theme.palette.text.primary,
					'--toastify-text-color-light': theme.palette.text.secondary,
					'--toastify-toast-background': theme.palette.background.paper,
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
