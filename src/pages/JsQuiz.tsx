import { QuizLayout } from 'src/components';
import { useJsQuizStore, useQuizReset } from 'src/hooks';
import { jsQuiz } from 'src/lib';

export const JsQuiz: React.FC = () => {
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
			questions={jsQuiz}
			resetDisabled={jsQuiz.length === 0}
			score={score}
			selected={selected}
			title='اختبار JavaScript'
		/>
	);
};
