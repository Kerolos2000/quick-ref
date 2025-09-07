import { useState } from 'react';
import { useNotify } from 'src/hooks';

export const useQuizReset = (resetQuiz: () => void) => {
	const { notify } = useNotify();
	const [confirmOpen, setConfirmOpen] = useState(false);

	const handleResetRequest = () => setConfirmOpen(true);

	const handleConfirmReset = () => {
		resetQuiz();
		setConfirmOpen(false);
		notify('تم إعادة الاختبار', { type: 'info' });
	};

	const handleCancelReset = () => setConfirmOpen(false);

	return {
		confirmOpen,
		handleCancelReset,
		handleConfirmReset,
		handleResetRequest,
	};
};
