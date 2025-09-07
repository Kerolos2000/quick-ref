import SentimentNeutralRoundedIcon from '@mui/icons-material/SentimentNeutralRounded';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Page } from 'mui-plus-components';
import { NavLink } from 'react-router-dom';
import { Routes } from 'src/enums';

export interface NotFoundProps {}

export const NotFound: React.FC<NotFoundProps> = () => {
	return (
		<Page title='Not Found'>
			<Box
				sx={{
					alignItems: 'center',
					display: 'flex',
					flexDirection: 'column',
					gap: 2,
					height: '100%',
					justifyContent: 'center',
					textAlign: 'center',
				}}
			>
				<SentimentNeutralRoundedIcon sx={{ fontSize: 150 }} />
				<Typography
					sx={{ fontWeight: 'bold' }}
					variant='h4'
				>
					ايه اللي وداك غريبة احنا في عجيبة 🌵
				</Typography>
				<Typography
					sx={{ color: 'text.secondary' }}
					variant='body1'
				>
					باين عليه تايه ! 😂
				</Typography>
				<Button
					component={NavLink}
					to={Routes.Home}
					variant='contained'
				>
					يلا نرجع للصفحة الرئيسية
				</Button>
			</Box>
		</Page>
	);
};
