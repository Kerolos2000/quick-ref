export type Level = 'junior' | 'mid' | 'senior' | 'all';

export type QuizType = 'react' | 'js';

export type Quiz = {
	term: string;
	options: string[];
	answer: string;
	level: Level;
};

export interface Attempt {
	date: string;
	level: Level;
	score: number;
	total: number;
}

export interface QuizState {
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
