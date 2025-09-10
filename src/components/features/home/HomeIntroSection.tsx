import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { Section } from 'mui-plus-components';
import React from 'react';
import { NavLink } from 'react-router-dom';
import { Routes } from 'src/enums';

export interface HomeIntroSectionProps {}

export const HomeIntroSection: React.FC<HomeIntroSectionProps> = () => {
	return (
		<Section sectionID='home-intro'>
			<Stack
				alignItems='center'
				justifyContent='center'
				sx={{ height: '100%', textAlign: 'center' }}
			>
				<Card
					sx={{
						'&:hover': {
							boxShadow: 5,
							transform: 'translateY(-5px)',
						},
						borderRadius: 3,
						boxShadow: 3,
						transition: 'transform 0.3s, box-shadow 0.3s',
						width: '100%',
					}}
				>
					<CardContent
						sx={{
							alignItems: 'center',
							display: 'flex',
							flexDirection: 'column',
							gap: 2,
							p: 4,
						}}
					>
						<EmojiObjectsIcon sx={{ color: 'gold', fontSize: 60 }} />
						<Typography
							sx={{ fontWeight: 'bold' }}
							variant='h5'
						>
							ازيك يا أشطر ديفيلوبر 👨‍💻
						</Typography>
						<Typography variant='body1'>
							مستعد يا هندسة للانترفيو؟! 😎
						</Typography>
						<Typography variant='body2'>
							يلا نشوف شوية الأسئلة دى علشان نسخن قبل الجد 🔥
						</Typography>

						<Stack
							direction='row'
							sx={{
								flexWrap: 'wrap',
								gap: 2,
								justifyContent: 'center',
							}}
						>
							<Button
								component={NavLink}
								to={Routes.JsQuiz}
								variant='contained'
							>
								أسئلة JavaScript
							</Button>
							<Button
								component={NavLink}
								to={Routes.ReactQuiz}
								variant='contained'
							>
								أسئلة React
							</Button>
						</Stack>
					</CardContent>
				</Card>
			</Stack>
		</Section>
	);
};
