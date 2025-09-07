import { createBrowserRouter } from 'react-router-dom';
import { Layout } from 'src/layouts';

export const AppRoutes = createBrowserRouter([
	{
		children: [
			{
				index: true,
				async lazy() {
					const { JsQuiz } = await import('src/pages');
					return { Component: JsQuiz };
				},
			},
		],
		Component: Layout,
		id: 'root',
	},
]);
