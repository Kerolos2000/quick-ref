import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import Typography from '@mui/material/Typography';
import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { Attempt } from 'src/types';

import { AttemptsTable } from './AttemptsTable';

interface TabsWrapperProps {
	jsAttempts: Attempt[];
	reactAttempts: Attempt[];
}

export const TabsWrapper: React.FC<TabsWrapperProps> = ({
	jsAttempts,
	reactAttempts,
}) => {
	const [searchParams, setSearchParams] = useSearchParams();
	const tabParam = searchParams.get('tab');
	const tabIndex = tabParam === 'react' ? 1 : 0;

	const handleChange = (_: React.SyntheticEvent, newValue: number) => {
		setSearchParams({ tab: newValue === 0 ? 'js' : 'react' });
	};

	return (
		<Box>
			<Typography
				sx={{ fontWeight: 500, mb: 2 }}
				variant='h6'
			>
				شوف نتايجك القديمة هنا
			</Typography>
			<Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
				<Tabs
					indicatorColor='secondary'
					onChange={handleChange}
					textColor='secondary'
					value={tabIndex}
				>
					<Tab
						label='JavaScript'
						sx={{ textTransform: 'none' }}
					/>
					<Tab
						label='React'
						sx={{ textTransform: 'none' }}
					/>
				</Tabs>
			</Box>
			<Box sx={{ mt: 2 }}>
				{tabIndex === 0 && <AttemptsTable rows={jsAttempts} />}
				{tabIndex === 1 && <AttemptsTable rows={reactAttempts} />}
			</Box>
		</Box>
	);
};
