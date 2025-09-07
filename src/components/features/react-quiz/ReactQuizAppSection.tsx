import Grid from '@mui/material/Grid';
import { Section } from 'mui-plus-components';

import { ReactQuizQuestions } from './ReactQuizQuestions';
import { ReactQuizStat } from './ReactQuizStat';

export interface ReactQuizAppSectionProps {}

export const ReactQuizAppSection: React.FC<ReactQuizAppSectionProps> = () => {
	return (
		<Section sectionID='react-quiz-app'>
			<Grid
				container
				spacing={2}
			>
				<Grid size={{ md: 8, xs: 12 }}>
					<ReactQuizQuestions />
				</Grid>

				<Grid size={{ md: 4, xs: 12 }}>
					<ReactQuizStat />
				</Grid>
			</Grid>
		</Section>
	);
};
