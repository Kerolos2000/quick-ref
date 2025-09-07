import Grid from '@mui/material/Grid';
import { Section } from 'mui-plus-components';

import { QuizQuestions } from './QuizQuestions';
import { QuizStat } from './QuizStat';

export interface JsQuizAppSectionProps {}

export const JsQuizAppSection: React.FC<JsQuizAppSectionProps> = () => {
	return (
		<Section sectionID='js-quiz'>
			<Grid
				container
				spacing={2}
			>
				<Grid size={{ md: 8, xs: 12 }}>
					<QuizQuestions />
				</Grid>

				<Grid size={{ md: 4, xs: 12 }}>
					<QuizStat />
				</Grid>
			</Grid>
		</Section>
	);
};
