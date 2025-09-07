import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import React from 'react';

export interface QuizSummaryCardProps {
	onConfirmReset: () => void;
	score: number;
	toastNode?: React.ReactNode;
	total: number;
}

export const QuizSummaryCard: React.FC<QuizSummaryCardProps> = ({
	onConfirmReset,
	score,
	toastNode,
	total,
}) => (
	<Card>
		<CardContent>
			<Typography variant='h6'>خلصت الكويز ✅</Typography>
			<Typography sx={{ mt: 2 }}>
				نتيجتك: {score}/{total} ({Math.round((score / total) * 100)}%)
			</Typography>
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
