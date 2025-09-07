import { createBrowserRouter } from 'react-router-dom';
import { Routes } from 'src/enums';
import { Layout } from 'src/layouts';

export const AppRoutes = createBrowserRouter([
	{
		children: [
			{
				async lazy() {
					const { JsQuiz } = await import('src/pages');
					return { Component: JsQuiz };
				},
				path: Routes.JsQuiz,
			},
		],
		Component: Layout,
		id: 'root',
	},
]);
