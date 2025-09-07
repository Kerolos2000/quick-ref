import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import React from 'react';
import { Attempt } from 'src/types';

interface Props {
	attempts: Attempt[];
	onConfirmReset: () => void;
	score: number;
	toastNode?: React.ReactNode;
	total: number;
}

export const QuizSummaryCard: React.FC<Props> = ({
	attempts,
	onConfirmReset,
	score,
	toastNode,
	total,
}) => (
	<Card>
		<CardContent>
			<Typography variant='h6'>خلصت الكويز ✅</Typography>
			<Typography sx={{ mt: 2 }}>
				Score: {score}/{total}
			</Typography>
			<Typography sx={{ mt: 2 }}>Attempts:</Typography>
			{attempts.map(({ date, score }, index) => (
				<Typography
					key={index}
					sx={{ fontSize: 14, mt: 1 }}
				>
					{index + 1}. {score}/{total} - {new Date(date).toLocaleString()}
				</Typography>
			))}
			<Button
				onClick={onConfirmReset}
				sx={{ mt: 2 }}
				variant='contained'
			>
				إعادة الامتحان
			</Button>
			{toastNode}
		</CardContent>
	</Card>
);
