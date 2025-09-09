import { Level } from 'src/types';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface GlobalLevelState {
	levels: {
		js: Level;
		react: Level;
	};
	resetLevelDialog: (quizType: 'js' | 'react') => void;
	setLevel: (quizType: 'js' | 'react', level: Level) => void;
	setShowLevelDialog: (quizType: 'js' | 'react', show: boolean) => void;
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
			resetLevelDialog: (quizType: 'js' | 'react') =>
				set(state => ({
					showLevelDialog: {
						...state.showLevelDialog,
						[quizType]: true,
					},
				})),
			setLevel: (quizType: 'js' | 'react', level: Level) =>
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
			setShowLevelDialog: (quizType: 'js' | 'react', show: boolean) =>
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
