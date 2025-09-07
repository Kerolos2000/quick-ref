import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Section } from 'mui-plus-components';
import { useNotify, useReactQuizStore } from 'src/hooks';
import { reactQuiz } from 'src/lib';

export interface ReactQuizResultSectionProps {}

export const ReactQuizResultSection: React.FC<
	ReactQuizResultSectionProps
> = () => {
	const { attempts, resetQuiz, score } = useReactQuizStore();
	const { ToastContainer } = useNotify();

	return (
		<Section sectionID='react-quiz-result'>
			<Card>
				<CardContent>
					<Typography variant='h6'>خلصت الكويز ✅</Typography>
					<Typography sx={{ mt: 2 }}>
						Score: {score}/{reactQuiz.length}
					</Typography>

					<Typography sx={{ mt: 2 }}>Attempts:</Typography>
					{attempts.map(({ date, score }, index) => (
						<Typography
							key={index}
							sx={{ fontSize: 14, mt: 1 }}
						>
							{index + 1}. {score}/{reactQuiz.length} -{' '}
							{new Date(date).toLocaleString()}
						</Typography>
					))}

					<Button
						onClick={resetQuiz}
						sx={{ mt: 2 }}
						variant='contained'
					>
						إعادة الامتحان
					</Button>

					<ToastContainer />
				</CardContent>
			</Card>
		</Section>
	);
};
