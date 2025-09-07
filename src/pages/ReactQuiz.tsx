import { Page } from 'mui-plus-components';
import { ReactQuizAppSection } from 'src/components';

export interface ReactQuizProps {}

export const ReactQuiz: React.FC<ReactQuizProps> = () => {
	return (
		<Page title='JavaScript Quiz'>
			<ReactQuizAppSection />
		</Page>
	);
};
