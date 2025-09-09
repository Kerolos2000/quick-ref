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

export interface QuizLayoutProps {
	attempts?: Attempt[];
	confirmOpen: boolean;
	current: number;
	onCancelReset: () => void;
	onConfirmReset: () => void;
	onNext: () => void;
	onPrev: () => void;
	onResetRequest: () => void;
	onSelect: (value: string) => void;
	prevDisabled?: boolean;
	questions: Quiz[];
	quizType: QuizType;
	resetDisabled?: boolean;
	score?: number;
	selected: string | null;
	title: string;
	toastNode?: React.ReactNode;
}
