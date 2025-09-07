import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { Section } from 'mui-plus-components';

export interface HomeProjectGoalSectionProps {}

export const HomeProjectGoalSection: React.FC<
	HomeProjectGoalSectionProps
> = () => {
	return (
		<Section sectionID='home-project-goal'>
			<Stack
				alignItems='center'
				justifyContent='center'
				sx={{ textAlign: 'center' }}
			>
				<Card sx={{ borderRadius: 2, boxShadow: 3, width: '100%' }}>
					<CardContent
						sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}
					>
						<Typography
							sx={{ fontWeight: 'bold' }}
							variant='h5'
						>
							هدف المشروع 🎯
						</Typography>
						<Typography variant='body1'>
							المشروع ده اتعمل علشان يكون أداة تدريبية تساعدني أراجع وأتدرب على
							أسئلة JavaScript و React قبل أي إنترفيو.
						</Typography>
						<Typography variant='body1'>
							كمان الهدف إني أطور نفسي بشكل عملي من خلال بناء Features حقيقية
							باستخدام أحدث تقنيات زي React, TypeScript, و MUI.
						</Typography>
						<Typography variant='body1'>
							المشروع بالنسبة لي فرصة إني أتعلم بشكل ممتع وأشارك اللي اتعلمته مع
							غيري 👨‍💻🔥
						</Typography>
					</CardContent>
				</Card>
			</Stack>
		</Section>
	);
};
