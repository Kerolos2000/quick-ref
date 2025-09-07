import { Page } from 'mui-plus-components';
import { JsQuizAppSection } from 'src/components';

export interface JsQuizProps {}

export const JsQuiz: React.FC<JsQuizProps> = () => {
	return (
		<Page title='JsQuiz'>
			<JsQuizAppSection />
		</Page>
	);
};
