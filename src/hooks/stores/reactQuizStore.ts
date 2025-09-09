import { reactQuiz } from 'src/lib';
import { Attempt, Level } from 'src/types';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

import { useGlobalLevelStore } from './globalLevelStore';

interface QuizState {
	answers: Record<number, string>;
	attempts: Attempt[];
	current: number;
	nextQuestion: (level: Level) => void;
	prevQuestion: (level: Level) => void;
	resetQuiz: () => void;
	score: number;
	selectAnswer: (answer: string) => void;
	selected: string;
	startNew: () => void;
}

export const useReactQuizStore = create<QuizState>()(
	persist(
		(set, get) => ({
			answers: {},
			attempts: [],
			current: 0,
			nextQuestion: (level: Level) => {
				const { answers, attempts, current } = get();
				const filteredQuiz =
					level === 'all'
						? reactQuiz
						: reactQuiz.filter(q => q.level === level);
				const isLast = current + 1 >= filteredQuiz.length;

				const newScore = Object.entries(answers).reduce((acc, [index, ans]) => {
					const q = filteredQuiz[Number(index)];
					return acc + (q && q.answer === ans ? 1 : 0);
				}, 0);

				if (isLast) {
					set({
						attempts: [
							...attempts,
							{
								date: new Date().toISOString(),
								level,
								score: newScore,
								total: filteredQuiz.length,
							},
						],
					});
				}

				set({
					current: current + 1,
					score: newScore,
					selected: answers[current + 1] || '',
				});
			},
			prevQuestion: (level: Level) => {
				const { answers, current } = get();
				const newCurrent = Math.max(0, current - 1);
				const filteredQuiz =
					level === 'all'
						? reactQuiz
						: reactQuiz.filter(q => q.level === level);
				const newScore = Object.entries(answers).reduce((acc, [index, ans]) => {
					const q = filteredQuiz[Number(index)];
					return acc + (q && q.answer === ans ? 1 : 0);
				}, 0);

				set({
					current: newCurrent,
					score: newScore,
					selected: answers[newCurrent] || '',
				});
			},
			resetQuiz: () => {
				useGlobalLevelStore.getState().resetLevelDialog('react');
				set({
					answers: {},
					current: 0,
					score: 0,
					selected: '',
				});
			},
			score: 0,
			selectAnswer: (answer: string) => {
				const { answers, current } = get();
				set({
					answers: { ...answers, [current]: answer },
					selected: answer,
				});
			},
			selected: '',
			startNew: () => {
				useGlobalLevelStore.getState().resetLevelDialog('react');
				set({
					answers: {},
					current: 0,
					score: 0,
					selected: '',
				});
			},
		}),
		{ name: 'react-quiz-storage' },
	),
);
