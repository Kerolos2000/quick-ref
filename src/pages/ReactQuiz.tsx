import { QuizLayout } from 'src/components';
import { useQuizReset, useReactQuizStore } from 'src/hooks';
import { reactQuiz } from 'src/lib';

export const ReactQuiz: React.FC = () => {
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

	const {
		confirmOpen,
		handleCancelReset,
		handleConfirmReset,
		handleResetRequest,
	} = useQuizReset(resetQuiz);

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
