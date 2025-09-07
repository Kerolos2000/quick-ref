import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import Typography from '@mui/material/Typography';
import { Section } from 'mui-plus-components';
import { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useNotify } from 'src/hooks';
import { jsQuiz } from 'src/lib';

type FormValues = {
	answer: string;
};

export function JsQuizApp() {
	const [current, setCurrent] = useState(0);
	const [score, setScore] = useState(0);
	const { notify, ToastContainer } = useNotify();

	const { control, handleSubmit, reset, watch } = useForm<FormValues>({
		defaultValues: { answer: '' },
	});

	const question = jsQuiz[current];
	const selected = watch('answer');

	const onSubmit = (data: FormValues) => {
		if (!question) return;
		if (data.answer === question.answer) {
			setScore(prev => prev + 1);
			notify('إجابة صح', { type: 'success' });
		} else {
			notify('غلط', { type: 'error' });
		}
		reset();
		setCurrent(prev => prev + 1);
	};

	if (!question) {
		return (
			<Section sectionID='result'>
				<Card sx={{ mt: 4 }}>
					<CardContent>
						<Typography variant='h6'>خلصت الكويز ✅</Typography>
						<Typography sx={{ mt: 2 }}>Score: {score}</Typography>
						<ToastContainer />
					</CardContent>
				</Card>
			</Section>
		);
	}

	return (
		<Section sectionID='js-quiz'>
			<Card sx={{ mt: 4 }}>
				<CardContent>
					<Typography variant='h6'>{question.term}</Typography>
					<form onSubmit={handleSubmit(onSubmit)}>
						<Controller
							control={control}
							name='answer'
							render={({ field }) => (
								<RadioGroup {...field}>
									{question.options.map(opt => (
										<FormControlLabel
											control={<Radio />}
											key={opt}
											label={opt}
											value={opt}
										/>
									))}
								</RadioGroup>
							)}
						/>
						<Button
							disabled={!selected}
							sx={{ mt: 2 }}
							type='submit'
							variant='contained'
						>
							Next
						</Button>
					</form>
					<Typography sx={{ mt: 2 }}>Score: {score}</Typography>
					<ToastContainer />
				</CardContent>
			</Card>
		</Section>
	);
}
