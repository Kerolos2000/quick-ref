/* eslint-disable no-restricted-imports */
import Box from '@mui/material/Box';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import React, { useMemo } from 'react';
import { Attempt } from 'src/types';

export interface AttemptsTableProps {
	rows: Attempt[];
}

export const AttemptsTable: React.FC<AttemptsTableProps> = ({ rows }) => {
	const columns: GridColDef[] = useMemo(
		() => [
			{ field: 'id', headerName: '#', width: 70 },
			{
				field: 'score',
				flex: 1,
				headerName: 'Score',
				valueFormatter: params => {
					const { score, total } = params;
					const percent = total ? ((score / total) * 100).toFixed(0) : 0;
					return `${score}/${total} (${percent}%)`;
				},
			},
			{
				field: 'date',
				flex: 2,
				headerName: 'Date',
				valueFormatter: params => new Date(params).toLocaleString(),
			},
			{
				field: 'level',
				flex: 1,
				headerName: 'Level',
			},
		],
		[],
	);

	const formattedRows = useMemo(
		() =>
			rows.map((a, i) => ({
				date: a.date,
				id: i + 1,
				level: a.level,
				score: { score: a.score, total: a.total },
			})),
		[rows],
	);

	return (
		<Box sx={{ height: '100%', width: '100%' }}>
			<DataGrid
				columns={columns}
				pageSizeOptions={[5, 10]}
				rows={formattedRows}
				showToolbar
			/>
		</Box>
	);
};
