import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import FormControlLabel from '@mui/material/FormControlLabel';
import LinearProgress from '@mui/material/LinearProgress';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import React from 'react';
import { useNotify } from 'src/hooks';
import { QuizQuestion } from 'src/types';

interface Props {
	current: number;
	onNext: () => void;
	onPrev: () => void;
	onResetRequest: () => void;
	onSelect: (value: string) => void;
	prevDisabled?: boolean;
	progressValue: number;
	question: QuizQuestion;
	resetDisabled?: boolean;
	selected: string | null;
	total: number;
}

export const QuizQuestionCard: React.FC<Props> = ({
	current,
	onNext,
	onPrev,
	onResetRequest,
	onSelect,
	prevDisabled,
	progressValue,
	question,
	resetDisabled,
	selected,
	total,
}) => {
	const { notify } = useNotify();
	const handleNext = () => {
		onNext();
		if (selected === question.answer) {
			notify('عاش اجابة صح', { type: 'success' });
		} else {
			notify('ركز اكتر اجابة غلط', { type: 'error' });
		}
	};
	return (
		<Card>
			<CardContent>
				<Typography variant='subtitle1'>
					السؤال {current + 1} من {total}
				</Typography>
				<LinearProgress
					sx={{ my: 2 }}
					value={progressValue}
					variant='determinate'
				/>
				<Typography variant='h6'>{question.term}</Typography>
				<RadioGroup
					onChange={e => onSelect(e.target.value)}
					value={selected ?? ''}
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
							التالى
						</Button>
						<Button
							color='secondary'
							disabled={prevDisabled || current === 0}
							onClick={onPrev}
							variant='outlined'
						>
							عودة
						</Button>
					</Stack>
					<Button
						color='error'
						disabled={resetDisabled || current === 0}
						onClick={onResetRequest}
						variant='outlined'
					>
						إعادة الاختبار
					</Button>
				</Stack>
			</CardContent>
		</Card>
	);
};
