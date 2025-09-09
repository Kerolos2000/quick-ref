import { Level, QuizType } from 'src/types';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface GlobalLevelState {
	levels: {
		js: Level;
		react: Level;
	};
	resetLevelDialog: (quizType: QuizType) => void;
	setLevel: (quizType: QuizType, level: Level) => void;
	setShowLevelDialog: (quizType: QuizType, show: boolean) => void;
	showLevelDialog: {
		js: boolean;
		react: boolean;
	};
}

export const useGlobalLevelStore = create<GlobalLevelState>()(
	persist(
		set => ({
			levels: {
				js: 'all',
				react: 'all',
			},
			resetLevelDialog: (quizType: QuizType) =>
				set(state => ({
					showLevelDialog: {
						...state.showLevelDialog,
						[quizType]: true,
					},
				})),
			setLevel: (quizType: QuizType, level: Level) =>
				set(state => ({
					levels: {
						...state.levels,
						[quizType]: level,
					},
					showLevelDialog: {
						...state.showLevelDialog,
						[quizType]: false,
					},
				})),
			setShowLevelDialog: (quizType: QuizType, show: boolean) =>
				set(state => ({
					showLevelDialog: {
						...state.showLevelDialog,
						[quizType]: show,
					},
				})),
			showLevelDialog: {
				js: true,
				react: true,
			},
		}),
		{ name: 'global-level-storage' },
	),
);
