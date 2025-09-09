import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import React, { useEffect, useState } from 'react';
import { useGlobalLevelStore } from 'src/hooks';
import { Level } from 'src/types';

export interface LevelDialogProps {
	quizType: 'js' | 'react';
}

export const LevelDialog: React.FC<LevelDialogProps> = ({ quizType }) => {
	const { levels, setLevel, showLevelDialog } = useGlobalLevelStore();

	const level = levels[quizType];
	const showDialog = showLevelDialog[quizType];

	const [open, setOpen] = useState(showDialog);
	const [value, setValue] = useState<Level>(level || 'all');

	useEffect(() => {
		setOpen(showDialog);
	}, [showDialog]);

	const handleConfirm = () => {
		if (value) {
			setLevel(quizType, value);
			setOpen(false);
		}
	};

	return (
		<Dialog open={open}>
			<DialogTitle>اختر المستوى</DialogTitle>
			<DialogContent>
				<RadioGroup
					onChange={e => setValue(e.target.value as Level)}
					value={value}
				>
					<FormControlLabel
						control={<Radio />}
						label='All'
						value='all'
					/>
					<FormControlLabel
						control={<Radio />}
						label='Junior'
						value='junior'
					/>
					<FormControlLabel
						control={<Radio />}
						label='Mid'
						value='mid'
					/>
					<FormControlLabel
						control={<Radio />}
						label='Senior'
						value='senior'
					/>
				</RadioGroup>
			</DialogContent>
			<DialogActions>
				<Button
					disabled={!value}
					onClick={handleConfirm}
					variant='contained'
				>
					بدء الاختبار
				</Button>
			</DialogActions>
		</Dialog>
	);
};
