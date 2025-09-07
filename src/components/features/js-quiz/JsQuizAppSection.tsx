import Grid from '@mui/material/Grid';
import { Section } from 'mui-plus-components';

import { JsQuizQuestions } from './JsQuizQuestions';
import { JsQuizStat } from './JsQuizStat';

export interface JsQuizAppSectionProps {}

export const JsQuizAppSection: React.FC<JsQuizAppSectionProps> = () => {
	return (
		<Section sectionID='js-quiz'>
			<Grid
				container
				spacing={2}
			>
				<Grid size={{ md: 8, xs: 12 }}>
					<JsQuizQuestions />
				</Grid>

				<Grid size={{ md: 4, xs: 12 }}>
					<JsQuizStat />
				</Grid>
			</Grid>
		</Section>
	);
};
