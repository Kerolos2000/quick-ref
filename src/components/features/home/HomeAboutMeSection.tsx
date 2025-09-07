import GitHubIcon from '@mui/icons-material/GitHub';
import LanguageIcon from '@mui/icons-material/Language';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { Section } from 'mui-plus-components';

export interface HomeAboutMeSectionProps {}

export const HomeAboutMeSection: React.FC<HomeAboutMeSectionProps> = () => {
	return (
		<Section sectionID='home-about-me'>
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
							انا مين؟ 👀
						</Typography>
						<Typography variant='body1'>
							أنا كيرلس مجدي ✨ فرونت إند ديفيلوبر متخصص في React و Next.js.
						</Typography>
						<Typography variant='body1'>
							بحب أعمل UI شيك و Smart Code 🚀 واهتم دايمًا إن يكون الكود منظم
							وسهل يتطور.
						</Typography>
						<Typography variant='body1'>
							مهتم بالـ UI/UX عشان أوصل أفضل تجربة للمستخدم. وكمان بحب أتعلم
							تقنيات جديدة وأشارك في مشاريع Open Source 🌍.
						</Typography>
						<Typography variant='body1'>
							شغوف بالتطوير المستمر والتعاون مع فرق مختلفة لبناء منتجات قوية و
							مؤثرة 💡.
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
								href='https://github.com/Kerolos2000'
								startIcon={<GitHubIcon />}
								target='_blank'
								variant='contained'
							>
								GitHub
							</Button>
							<Button
								href='https://kerolos-magdy.vercel.app/'
								startIcon={<LanguageIcon />}
								target='_blank'
								variant='contained'
							>
								Portfolio
							</Button>
							<Button
								color='primary'
								href='https://www.linkedin.com/in/kerolos-magdy-314644212/'
								startIcon={<LinkedInIcon />}
								target='_blank'
								variant='contained'
							>
								LinkedIn
							</Button>
						</Stack>
					</CardContent>
				</Card>
			</Stack>
		</Section>
	);
};
