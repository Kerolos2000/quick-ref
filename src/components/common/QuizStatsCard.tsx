import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import React from 'react';
import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts';

interface Props {
	current: number;
	funnyMessage?: string;
	percentage: number;
	score: number;
	total: number;
}

export const QuizStatsCard: React.FC<Props> = ({
	current,
	funnyMessage,
	percentage,
	score,
	total,
}) => {
	const theme = useTheme();
	const chartData = [
		{ color: theme.palette.success.main, name: 'صح', value: score },
		{
			color: theme.palette.error.main,
			name: 'غلط',
			value: Math.max(0, current - score),
		},
	];

	return (
		<Card sx={{ height: '100%' }}>
			<CardContent>
				<Typography variant='h6'>إحصائيات</Typography>
				<Typography sx={{ mt: 1 }}>
					السؤال الحالي: {Math.min(current + 1, total)}/{total}
				</Typography>
				<Typography sx={{ mt: 1 }}>
					الإجابات الصحيحة: {score} ({percentage}%)
				</Typography>
				<Box sx={{ height: 200, mt: 2, width: '100%' }}>
					<ResponsiveContainer>
						<PieChart>
							<Pie
								data={chartData}
								innerRadius={50}
								outerRadius={80}
							>
								{chartData.map(entry => (
									<Cell
										fill={entry.color}
										key={`cell-${entry.name}`}
									/>
								))}
							</Pie>
							<Tooltip
								contentStyle={{
									backgroundColor: theme.palette.background.paper,
									borderRadius: 8,
									boxShadow: theme.shadows[3],
								}}
								formatter={(value: any, name: any) => [`${value}`, name]}
							/>
						</PieChart>
					</ResponsiveContainer>
				</Box>
				{funnyMessage && (
					<Typography
						sx={{
							color: theme.palette.secondary.main,
							fontWeight: 'bold',
							mt: 2,
						}}
					>
						{funnyMessage}
					</Typography>
				)}
			</CardContent>
		</Card>
	);
};
