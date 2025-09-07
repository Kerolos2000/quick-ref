import { CacheProvider } from '@emotion/react';
import '@fontsource-variable/cairo';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React from 'react';
import { RouterProvider } from 'react-router-dom';

import { useNotify } from './hooks';
import { createEmotionCache } from './lib';
import { AppRoutes } from './routes';
import { GlobalStyles, lightTheme } from './styles';

const queryClient = new QueryClient();

export interface AppProps {}

export const App: React.FC<AppProps> = () => {
	const { ToastContainer } = useNotify();

	return (
		<QueryClientProvider client={queryClient}>
			<CacheProvider
				key={'rtl'}
				value={createEmotionCache()}
			>
				<ThemeProvider theme={lightTheme}>
					<ToastContainer />
					<CssBaseline />
					<GlobalStyles />
					<RouterProvider router={AppRoutes} />
				</ThemeProvider>
			</CacheProvider>
		</QueryClientProvider>
	);
};
