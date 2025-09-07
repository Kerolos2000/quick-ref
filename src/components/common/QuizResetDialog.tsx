import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

interface Props {
	onCancel: () => void;
	onConfirm: () => void;
	open: boolean;
}

export const QuizResetDialog: React.FC<Props> = ({
	onCancel,
	onConfirm,
	open,
}) => (
	<Dialog
		onClose={onCancel}
		open={open}
	>
		<DialogTitle>تأكيد إعادة الاختبار</DialogTitle>
		<DialogContent>
			<DialogContentText>
				هل أنت متأكد أنك عايز تعيد الاختبار؟ كل الإجابات الحالية هتتمسح.
			</DialogContentText>
		</DialogContent>
		<DialogActions>
			<Button
				color='secondary'
				onClick={onCancel}
			>
				إلغاء
			</Button>
			<Button
				color='error'
				onClick={onConfirm}
			>
				نعم، أعد الاختبار
			</Button>
		</DialogActions>
	</Dialog>
);
