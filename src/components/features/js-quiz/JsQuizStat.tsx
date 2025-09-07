import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts';
import { useJsQuizStore } from 'src/hooks';
import { jsQuiz } from 'src/lib';

export interface JsQuizStatProps {}

export const JsQuizStat: React.FC<JsQuizStatProps> = () => {
	const theme = useTheme();
	const { current, score } = useJsQuizStore();
	const total = jsQuiz.length;

	const chartData = [
		{ color: theme.palette.success.main, name: 'صح', value: score },
		{
			color: theme.palette.error.main,
			name: 'غلط',
			value: Math.max(0, current - score),
		},
	];

	const answered = current > 0 ? current : 0;
	const percentage = answered > 0 ? Math.round((score / answered) * 100) : 0;

	let funnyMessage = '';
	if (answered > 0) {
		if (percentage < 25) {
			funnyMessage = 'يعنى معتجاوبش حاجة صح خالص ؟ 🤦‍♂️';
		} else if (percentage < 50) {
			funnyMessage = 'انا نقاش و عندى عدتى و فرشتى و روليتى🎨';
		} else if (percentage < 75) {
			funnyMessage = 'طول ما انا موجود انت مش هتفارق دكة الجونيور ابدا 😂';
		} else {
			funnyMessage = 'ابنى بطل مصر لا بطل العالم لا بطل العالم كله🏆';
		}
	}

	return (
		<Card sx={{ height: '100%' }}>
			<CardContent>
				<Typography variant='h6'>إحصائيات</Typography>
				<Typography sx={{ mt: 1 }}>
					السؤال الحالي: {current + 1}/{total}
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
								formatter={(value, name) => [`${value}`, name]}
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
