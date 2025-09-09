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
import { Level, QuizType } from 'src/types';

export interface LevelDialogProps {
	quizType: QuizType;
}

export const LevelDialog: React.FC<LevelDialogProps> = ({ quizType }) => {
	const { levels, setLevel, setShowLevelDialog, showLevelDialog } =
		useGlobalLevelStore();
	const level = levels[quizType] || 'all';
	const open = showLevelDialog[quizType];

	const [pendingValue, setPendingValue] = useState<Level>(level);

	useEffect(() => {
		if (open) {
			setPendingValue(level);
		}
	}, [open, level]);

	const handleClose = () => {
		setShowLevelDialog(quizType, false);
	};

	const handleConfirm = () => {
		setLevel(quizType, pendingValue);
		handleClose();
	};

	return (
		<Dialog
			fullWidth
			maxWidth='sm'
			onClose={handleClose}
			open={open}
		>
			<DialogTitle>اختر المستوى</DialogTitle>
			<DialogContent>
				<RadioGroup
					onChange={e => setPendingValue(e.target.value as Level)}
					value={pendingValue}
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
					disabled={!pendingValue}
					onClick={handleConfirm}
					sx={{ mb: 2, mx: 2 }}
					variant='contained'
				>
					بدء الاختبار
				</Button>
			</DialogActions>
		</Dialog>
	);
};
