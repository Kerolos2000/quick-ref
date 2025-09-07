import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import FormControlLabel from '@mui/material/FormControlLabel';
import LinearProgress from '@mui/material/LinearProgress';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import { useNotify, useReactQuizStore } from 'src/hooks';
import { reactQuiz } from 'src/lib';

import { ReactQuizResultSection } from './ReactQuizResultSection';

export interface ReactQuizQuestionsProps {}

export const ReactQuizQuestions: React.FC<ReactQuizQuestionsProps> = () => {
	const {
		current,
		nextQuestion,
		prevQuestion,
		resetQuiz,
		selectAnswer,
		selected,
	} = useReactQuizStore();
	const { notify } = useNotify();
	const [openConfirm, setOpenConfirm] = useState(false);

	const question = reactQuiz[current];
	const total = reactQuiz.length;

	const handleNext = () => {
		if (!question) return;
		if (selected === question.answer) {
			notify('برافو إجابة صح 👌', { type: 'success' });
		} else {
			notify('غلط، ركز أكتر 😅', { type: 'error' });
		}
		nextQuestion();
	};

	const handleResetClick = () => setOpenConfirm(true);
	const handleConfirmReset = () => {
		resetQuiz();
		setOpenConfirm(false);
	};
	const handleCancelReset = () => setOpenConfirm(false);

	if (!question) {
		return <ReactQuizResultSection />;
	}

	return (
		<>
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
						sx={{
							alignItems: 'center',
							justifyContent: 'space-between',
							mt: 2,
						}}
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
								disabled={current === 0}
								onClick={prevQuestion}
								variant='outlined'
							>
								عودة
							</Button>
						</Stack>
						<Button
							color='error'
							disabled={current < 1}
							onClick={handleResetClick}
							variant='outlined'
						>
							إعادة الاختبار
						</Button>
					</Stack>
				</CardContent>
			</Card>

			<Dialog
				onClose={handleCancelReset}
				open={openConfirm}
			>
				<DialogTitle>تأكيد إعادة الاختبار</DialogTitle>
				<DialogContent>
					<DialogContentText>
						هل أنت متأكد أنك عايز تعيد الاختبار؟ كل الإجابات الحالية هتتمسح.
					</DialogContentText>
				</DialogContent>
				<DialogActions>
					<Button
						color='secondary'
						onClick={handleCancelReset}
					>
						إلغاء
					</Button>
					<Button
						color='error'
						onClick={handleConfirmReset}
					>
						نعم، أعد الاختبار
					</Button>
				</DialogActions>
			</Dialog>
		</>
	);
};
