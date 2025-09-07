import { useState } from 'react';
import { QuizLayout } from 'src/components/common/QuizLayout';
import { useNotify, useReactQuizStore } from 'src/hooks';
import { reactQuiz } from 'src/lib';

export interface ReactQuizProps {}

export const ReactQuiz: React.FC<ReactQuizProps> = () => {
	const {
		attempts,
		current,
		nextQuestion,
		prevQuestion,
		resetQuiz,
		score,
		selectAnswer,
		selected,
	} = useReactQuizStore();
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
			questions={reactQuiz}
			resetDisabled={reactQuiz.length === 0}
			score={score}
			selected={selected}
			title='اختبار React'
		/>
	);
};
