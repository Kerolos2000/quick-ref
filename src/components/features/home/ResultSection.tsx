import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Section } from 'mui-plus-components';
import { useNotify, useQuizStore } from 'src/hooks';
import { jsQuiz } from 'src/lib';

export function ResultSection() {
	const { attempts, resetQuiz, score } = useQuizStore();
	const { ToastContainer } = useNotify();

	return (
		<Section sectionID='result'>
			<Card sx={{ mt: 4 }}>
				<CardContent>
					<Typography variant='h6'>خلصت الكويز ✅</Typography>
					<Typography sx={{ mt: 2 }}>
						Score: {score}/{jsQuiz.length}
					</Typography>

					<Typography sx={{ mt: 2 }}>Attempts:</Typography>
					{attempts.map((a, idx) => (
						<Typography
							key={idx}
							sx={{ fontSize: 14, mt: 1 }}
						>
							{idx + 1}. {a.score}/{jsQuiz.length} -{' '}
							{new Date(a.date).toLocaleString()}
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
}
