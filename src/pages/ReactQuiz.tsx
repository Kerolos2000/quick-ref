import { QuizLayout } from 'src/components';
import {
	useGlobalLevelStore,
	useQuizReset,
	useReactQuizStore,
} from 'src/hooks';
import { reactQuiz } from 'src/lib';

export const ReactQuiz: React.FC = () => {
	const { levels } = useGlobalLevelStore();
	const level = levels.react;
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

	const filteredQuestions =
		level === 'all' ? reactQuiz : reactQuiz.filter(q => q.level === level);

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
			quizType='react'
			resetDisabled={filteredQuestions.length === 0}
			score={score}
			selected={selected}
			title='اختبار React'
		/>
	);
};
