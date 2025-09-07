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
			{
				async lazy() {
					const { NotFound } = await import('src/pages');
					return { Component: NotFound };
				},
				path: '*',
			},
		],
		Component: Layout,
		id: 'root',
	},
]);
