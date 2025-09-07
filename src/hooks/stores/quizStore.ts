import { jsQuiz } from 'src/lib';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface Attempt {
	date: string;
	score: number;
}

interface QuizState {
	attempts: Attempt[];
	current: number;
	nextQuestion: () => void;
	resetQuiz: () => void;
	score: number;
	selectAnswer: (answer: string) => void;
	selected: string;
	startNew: () => void;
}

export const useQuizStore = create<QuizState>()(
	persist(
		(set, get) => ({
			attempts: [],
			current: 0,
			nextQuestion: () => {
				const { attempts, current, score, selected } = get();
				const question = jsQuiz[current];
				if (!question) return;

				let newScore = score;
				if (selected === question.answer) {
					newScore++;
				}

				const isLast = current + 1 >= jsQuiz.length;
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
					selected: '',
				});
			},
			resetQuiz: () => set({ current: 0, score: 0, selected: '' }),

			score: 0,

			selectAnswer: (answer: string) => set({ selected: answer }),

			selected: '',

			startNew: () => set({ current: 0, score: 0, selected: '' }),
		}),
		{ name: 'quiz-storage' },
	),
);
