import { QuizLayout } from 'src/components';
import { useGlobalLevelStore, useJsQuizStore, useQuizReset } from 'src/hooks';
import { jsQuiz } from 'src/lib';

export const JsQuiz: React.FC = () => {
	const { levels } = useGlobalLevelStore();
	const level = levels.js;
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

	const filteredQuestions =
		level === 'all' ? jsQuiz : jsQuiz.filter(q => q.level === level);

	return (
		<QuizLayout
			attempts={attempts}
			confirmOpen={confirmOpen}
			current={current}
			onCancelReset={handleCancelReset}
			onConfirmReset={handleConfirmReset}
			onNext={() => nextQuestion(level)}
			onPrev={() => prevQuestion(level)}
			onResetRequest={handleResetRequest}
			onSelect={selectAnswer}
			prevDisabled={current === 0}
			questions={filteredQuestions}
			quizType='js'
			resetDisabled={filteredQuestions.length === 0}
			score={score}
			selected={selected}
			title='اختبار JavaScript'
		/>
	);
};
