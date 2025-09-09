import SearchIcon from '@mui/icons-material/Search';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
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

export const ScientificTerms: React.FC<ScientificTermsProps> = () => {
	const [searchTerm, setSearchTerm] = useState('');

	const filteredTerms = useMemo(() => {
		return scientificTerms.filter(term => {
			const matchesSearch =
				term.term.toLowerCase().includes(searchTerm.toLowerCase()) ||
				term.definition.toLowerCase().includes(searchTerm.toLowerCase()) ||
				term.example?.toLowerCase().includes(searchTerm.toLowerCase());

			return matchesSearch;
		});
	}, [searchTerm]);

	const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setSearchTerm(event.target.value);
	};

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
							<TextField
								fullWidth
								InputProps={{
									startAdornment: (
										<SearchIcon sx={{ color: 'text.secondary', mr: 1 }} />
									),
								}}
								onChange={handleSearchChange}
								placeholder='ابحث في المصطلحات أو التعريفات أو الأمثلة...'
								sx={{
									'& .MuiOutlinedInput-root': {
										borderRadius: 2,
									},
								}}
								value={searchTerm}
							/>

							<Typography
								color='text.secondary'
								variant='body2'
							>
								عرض {filteredTerms.length} من أصل {scientificTerms.length} مصطلح
							</Typography>
						</Box>
					</CardContent>
				</Card>

				<TableContainer
					component={Paper}
					sx={{ borderRadius: 2 }}
				>
					<Table>
						<TableHead>
							<TableRow sx={{ bgcolor: 'grey.50' }}>
								<TableCell sx={{ fontSize: '1.1rem', fontWeight: 700 }}>
									المصطلح
								</TableCell>
								<TableCell sx={{ fontSize: '1.1rem', fontWeight: 700 }}>
									التعريف
								</TableCell>
								<TableCell sx={{ fontSize: '1.1rem', fontWeight: 700 }}>
									المثال
								</TableCell>
							</TableRow>
						</TableHead>
						<TableBody>
							{filteredTerms.map(term => (
								<TableRow
									hover
									key={term.id}
								>
									<TableCell>
										<Typography
											sx={{ color: 'primary.main', fontWeight: 600 }}
											variant='h6'
										>
											{term.term}
										</Typography>
									</TableCell>
									<TableCell>
										<Typography
											sx={{ lineHeight: 1.6 }}
											variant='body1'
										>
											{term.definition}
										</Typography>
									</TableCell>
									<TableCell>
										{term.example ? (
											<Typography
												color='text.secondary'
												sx={{ fontStyle: 'italic' }}
												variant='body2'
											>
												{term.example}
											</Typography>
										) : (
											<Typography
												color='text.disabled'
												variant='body2'
											>
												لا يوجد مثال
											</Typography>
										)}
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
