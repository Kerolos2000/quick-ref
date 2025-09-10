import SearchIcon from '@mui/icons-material/Search';
import Autocomplete from '@mui/material/Autocomplete';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { Page } from 'mui-plus-components';
import React, { useMemo, useState } from 'react';
import { scientificTerms } from 'src/lib/mocks';

export interface ScientificTermsProps {}

const topics = ['all', 'HTML', 'CSS', 'JS', 'React', 'Next', 'Testing'];

export const ScientificTerms: React.FC<ScientificTermsProps> = () => {
	const [searchTerm, setSearchTerm] = useState('');
	const [selectedTopic, setSelectedTopic] = useState('all');

	const filteredTerms = useMemo(() => {
		return scientificTerms.filter(term => {
			const matchesSearch =
				term.term.toLowerCase().includes(searchTerm.toLowerCase()) ||
				term.definition.toLowerCase().includes(searchTerm.toLowerCase());

			const matchesTopic =
				selectedTopic === 'all' || term.tag.includes(selectedTopic);

			return matchesSearch && matchesTopic;
		});
	}, [searchTerm, selectedTopic]);

	return (
		<Page title='المصطلحات العلمية'>
			<Container
				maxWidth='xl'
				sx={{ py: 4 }}
			>
				<Box sx={{ mb: 4, textAlign: 'center' }}>
					<Typography
						component='h1'
						gutterBottom
						sx={{ fontWeight: 700 }}
						variant='h3'
					>
						المصطلحات العلمية
					</Typography>
					<Typography
						color='text.secondary'
						sx={{ maxWidth: 800, mx: 'auto' }}
						variant='h6'
					>
						قاموس شامل للمصطلحات العلمية والتقنية مع التعريفات والأمثلة العملية
					</Typography>
				</Box>

				<Card sx={{ mb: 4 }}>
					<CardContent>
						<Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
							<Stack
								direction='row'
								sx={{ alignItems: 'center', gap: 2 }}
							>
								<Autocomplete
									disableClearable
									onChange={(_, newValue) =>
										setSelectedTopic(newValue || 'all')
									}
									options={topics}
									renderInput={params => (
										<TextField
											{...params}
											label='اختر الموضوع'
										/>
									)}
									sx={{ width: 250 }}
									value={selectedTopic}
								/>
								<TextField
									fullWidth
									onChange={e => setSearchTerm(e.target.value)}
									placeholder='ابحث في المصطلحات أو التعريفات أو الأمثلة...'
									slotProps={{
										input: {
											startAdornment: (
												<SearchIcon sx={{ color: 'text.secondary', mr: 1 }} />
											),
										},
									}}
									value={searchTerm}
								/>
							</Stack>

							<Typography
								color='text.secondary'
								variant='body2'
							>
								عرض {filteredTerms.length} من أصل {scientificTerms.length} مصطلح
							</Typography>
						</Box>
					</CardContent>
				</Card>

				<TableContainer component={Paper}>
					<Table>
						<TableHead>
							<TableRow sx={{ bgcolor: 'grey.200' }}>
								<TableCell sx={{ fontSize: '1.1rem', fontWeight: 700 }}>
									المصطلح
								</TableCell>
								<TableCell sx={{ fontSize: '1.1rem', fontWeight: 700 }}>
									التعريف
								</TableCell>
							</TableRow>
						</TableHead>
						<TableBody>
							{filteredTerms.map(term => (
								<TableRow
									hover
									key={term.id}
								>
									<TableCell sx={{ maxWidth: 250, width: 250 }}>
										<Typography
											sx={{ color: 'primary.dark', fontWeight: 600 }}
											variant='h6'
										>
											{term.term}
										</Typography>
									</TableCell>
									<TableCell>
										<Typography
											sx={{ lineHeight: 1.9 }}
											variant='body1'
										>
											{term.definition}
										</Typography>
									</TableCell>
								</TableRow>
							))}
						</TableBody>
					</Table>
				</TableContainer>

				{filteredTerms.length === 0 && (
					<Box sx={{ py: 8, textAlign: 'center' }}>
						<Typography
							color='text.secondary'
							gutterBottom
							variant='h5'
						>
							لم يتم العثور على مصطلحات
						</Typography>
						<Typography
							color='text.secondary'
							variant='body1'
						>
							جرب تغيير معايير البحث أو الفلاتر
						</Typography>
					</Box>
				)}
			</Container>
		</Page>
	);
};
