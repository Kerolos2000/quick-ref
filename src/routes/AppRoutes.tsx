import { createBrowserRouter } from 'react-router-dom';
import { Routes } from 'src/enums';
import { Layout } from 'src/layouts';

export const AppRoutes = createBrowserRouter([
	{
		children: [
			{
				index: true,
				async lazy() {
					const { Home } = await import('src/pages');
					return { Component: Home };
				},
			},
			{
				async lazy() {
					const { JsQuiz } = await import('src/pages');
					return { Component: JsQuiz };
				},
				path: Routes.JsQuiz,
			},
			{
				async lazy() {
					const { ReactQuiz } = await import('src/pages');
					return { Component: ReactQuiz };
				},
				path: Routes.ReactQuiz,
			},
			{
				async lazy() {
					const { MyProfile } = await import('src/pages');
					return { Component: MyProfile };
				},
				path: Routes.MyProfile,
			},
			{
				async lazy() {
					const { ScientificTerms } = await import('src/pages');
					return { Component: ScientificTerms };
				},
				path: Routes.ScientificTerms,
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
