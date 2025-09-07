import { useState } from 'react';
import { QuizLayout } from 'src/components/common/QuizLayout';
import { useJsQuizStore, useNotify } from 'src/hooks';
import { jsQuiz } from 'src/lib';

export interface JsQuizProps {}

export const JsQuiz: React.FC<JsQuizProps> = () => {
	const {
		attempts,
		current,
		nextQuestion,
		prevQuestion,
		resetQuiz,
		score,
		selectAnswer,
		selected,
	} = useJsQuizStore();
	const { notify } = useNotify();
	const [confirmOpen, setConfirmOpen] = useState(false);

	const handleResetRequest = () => {
		setConfirmOpen(true);
	};

	const handleConfirmReset = () => {
		resetQuiz();
		setConfirmOpen(false);
		notify('تم إعادة الاختبار', { type: 'info' });
	};

	const handleCancelReset = () => {
		setConfirmOpen(false);
	};
	return (
		<QuizLayout
			attempts={attempts}
			confirmOpen={confirmOpen}
			current={current}
			onCancelReset={handleCancelReset}
			onConfirmReset={handleConfirmReset}
			onNext={nextQuestion}
			onPrev={prevQuestion}
			onResetRequest={handleResetRequest}
			onSelect={selectAnswer}
			prevDisabled={current === 0}
			questions={jsQuiz}
			resetDisabled={jsQuiz.length === 0}
			score={score}
			selected={selected}
			title='اختبار JavaScript'
		/>
	);
};
