import { jsQuiz } from 'src/lib';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface Attempt {
	date: string;
	score: number;
}

interface QuizState {
	answers: Record<number, string>;
	attempts: Attempt[];
	current: number;
	nextQuestion: () => void;
	prevQuestion: () => void;
	resetQuiz: () => void;
	score: number;
	selectAnswer: (answer: string) => void;
	selected: string;
	startNew: () => void;
}

export const useJsQuizStore = create<QuizState>()(
	persist(
		(set, get) => ({
			answers: {},
			attempts: [],
			current: 0,
			nextQuestion: () => {
				const { answers, attempts, current } = get();
				const isLast = current + 1 >= jsQuiz.length;
				const newScore = Object.entries(answers).reduce((acc, [index, ans]) => {
					const q = jsQuiz[Number(index)];
					return acc + (q && q.answer === ans ? 1 : 0);
				}, 0);

				if (isLast) {
					set({
						attempts: [
							...attempts,
							{ date: new Date().toISOString(), score: newScore },
						],
					});
				}

				set({
					current: current + 1,
					score: newScore,
					selected: answers[current + 1] || '',
				});
			},
			prevQuestion: () => {
				const { answers, current } = get();
				const newCurrent = Math.max(0, current - 1);
				const newScore = Object.entries(answers).reduce((acc, [index, ans]) => {
					const q = jsQuiz[Number(index)];
					return acc + (q && q.answer === ans ? 1 : 0);
				}, 0);

				set({
					current: newCurrent,
					score: newScore,
					selected: answers[newCurrent] || '',
				});
			},

			resetQuiz: () => set({ answers: {}, current: 0, score: 0, selected: '' }),

			score: 0,

			selectAnswer: (answer: string) => {
				const { answers, current } = get();
				set({
					answers: { ...answers, [current]: answer },
					selected: answer,
				});
			},

			selected: '',

			startNew: () => set({ answers: {}, current: 0, score: 0, selected: '' }),
		}),
		{ name: 'js-quiz-storage' },
	),
);
