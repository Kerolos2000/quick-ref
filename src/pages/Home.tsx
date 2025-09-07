import { Page } from 'mui-plus-components';
import { JsQuizApp } from 'src/components';

export interface HomeProps {}

export const Home: React.FC<HomeProps> = () => {
	return (
		<Page title='Home'>
			<JsQuizApp />
		</Page>
	);
};
