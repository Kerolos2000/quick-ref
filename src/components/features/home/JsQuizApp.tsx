import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import Typography from '@mui/material/Typography';
import { Section } from 'mui-plus-components';
import { useNotify, useQuizStore } from 'src/hooks';
import { jsQuiz } from 'src/lib';

import { ResultSection } from './ResultSection';

export function JsQuizApp() {
	const { current, nextQuestion, score, selectAnswer, selected } =
		useQuizStore();

	const { notify } = useNotify();
	const question = jsQuiz[current];

	const handleNext = () => {
		if (!question) return;
		if (selected === question.answer) {
			notify('إجابة صح', { type: 'success' });
		} else {
			notify('غلط', { type: 'error' });
		}
		nextQuestion();
	};

	if (!question) {
		return <ResultSection />;
	}

	return (
		<Section sectionID='js-quiz'>
			<Card sx={{ mt: 4 }}>
				<CardContent>
					<Typography variant='h6'>{question.term}</Typography>
					<RadioGroup
						onChange={e => selectAnswer(e.target.value)}
						value={selected}
					>
						{question.options.map(opt => (
							<FormControlLabel
								control={<Radio />}
								key={opt}
								label={opt}
								value={opt}
							/>
						))}
					</RadioGroup>
					<Button
						disabled={!selected}
						onClick={handleNext}
						sx={{ mt: 2 }}
						variant='contained'
					>
						Next
					</Button>
					<Typography sx={{ mt: 2 }}>Score: {score}</Typography>
				</CardContent>
			</Card>
		</Section>
	);
}
