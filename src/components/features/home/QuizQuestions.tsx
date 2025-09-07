import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import FormControlLabel from '@mui/material/FormControlLabel';
import LinearProgress from '@mui/material/LinearProgress';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { useNotify, useQuizStore } from 'src/hooks';
import { jsQuiz } from 'src/lib';

import { QuizResultSection } from './QuizResultSection';

export interface QuizQuestionsProps {}

export const QuizQuestions: React.FC<QuizQuestionsProps> = () => {
	const {
		current,
		nextQuestion,
		prevQuestion,
		resetQuiz,
		selectAnswer,
		selected,
	} = useQuizStore();
	const { notify } = useNotify();

	const question = jsQuiz[current];
	const total = jsQuiz.length;

	const handleNext = () => {
		if (!question) return;
		if (selected === question.answer) {
			notify('عاش اجابة صح', { type: 'success' });
		} else {
			notify('ركز اكتر اجابة غلط', { type: 'error' });
		}
		nextQuestion();
	};

	if (!question) {
		return <QuizResultSection />;
	}

	return (
		<Card>
			<CardContent>
				<Typography variant='subtitle1'>
					السؤال {current + 1} من {total}
				</Typography>
				<LinearProgress
					sx={{ my: 2 }}
					value={((current + 1) / total) * 100}
					variant='determinate'
				/>
				<Typography variant='h6'>{question.term}</Typography>
				<RadioGroup
					onChange={e => selectAnswer(e.target.value)}
					value={selected}
				>
					{question.options.map(option => (
						<FormControlLabel
							control={<Radio />}
							key={option}
							label={option}
							value={option}
						/>
					))}
				</RadioGroup>
				<Stack
					direction='row'
					spacing={2}
					sx={{ alignItems: 'center', justifyContent: 'space-between', mt: 2 }}
				>
					<Stack
						alignItems='center'
						direction='row'
						spacing={2}
					>
						<Button
							disabled={!selected}
							onClick={handleNext}
							variant='contained'
						>
							Next
						</Button>
						<Button
							color='secondary'
							disabled={current === 0}
							onClick={prevQuestion}
							variant='outlined'
						>
							Back
						</Button>
					</Stack>
					<Button
						color='error'
						disabled={current < 1}
						onClick={resetQuiz}
						variant='outlined'
					>
						Reset
					</Button>
				</Stack>
			</CardContent>
		</Card>
	);
};
