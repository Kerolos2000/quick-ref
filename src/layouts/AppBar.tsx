import MenuIcon from '@mui/icons-material/Menu';
import MuiAppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Routes } from 'src/enums';

const navItems = [
	{
		color: 'inherit',
		label: 'أسئلة JavaScript',
		path: Routes.JsQuiz,
		variant: 'text',
	},
	{
		color: 'inherit',
		label: 'أسئلة React',
		path: Routes.ReactQuiz,
		variant: 'text',
	},
	{
		color: 'primary',
		label: 'حسابي',
		path: Routes.MyProfile,
		variant: 'contained',
	},
];

export interface AppBarProps {}

export const AppBar: React.FC<AppBarProps> = () => {
	const [open, setOpen] = useState(false);

	const toggleDrawer = (value: boolean) => () => setOpen(value);

	return (
		<>
			<MuiAppBar
				elevation={0}
				position='sticky'
				sx={{
					bgcolor: 'background.paper',
					borderBottom: theme => `1px solid ${theme.palette.divider}`,
					color: 'text.primary',
				}}
			>
				<Container maxWidth='lg'>
					<Toolbar
						disableGutters
						sx={{ gap: 2, justifyContent: 'space-between' }}
					>
						<Typography
							sx={{ fontWeight: 700 }}
							variant='h6'
						>
							Quiz Hub
						</Typography>

						<Box sx={{ display: { md: 'flex', xs: 'none' }, gap: 1 }}>
							{navItems.map(item => (
								<Button
									color={item.color as 'inherit' | 'primary'}
									component={NavLink}
									key={item.path}
									sx={{ textTransform: 'none' }}
									to={item.path}
									variant={item.variant as 'text' | 'contained'}
								>
									{item.label}
								</Button>
							))}
						</Box>

						<IconButton
							color='inherit'
							edge='end'
							onClick={toggleDrawer(true)}
							sx={{ display: { md: 'none', xs: 'flex' } }}
						>
							<MenuIcon />
						</IconButton>
					</Toolbar>
				</Container>
			</MuiAppBar>

			<Drawer
				anchor='right'
				onClose={toggleDrawer(false)}
				open={open}
			>
				<Box
					onClick={toggleDrawer(false)}
					role='presentation'
					sx={{ width: 250 }}
				>
					<List>
						{navItems.map(item => (
							<ListItem
								disablePadding
								key={item.path}
							>
								<ListItemButton
									component={NavLink}
									to={item.path}
								>
									<ListItemText primary={item.label} />
								</ListItemButton>
							</ListItem>
						))}
					</List>
				</Box>
			</Drawer>
		</>
	);
};
