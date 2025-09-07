export interface QuizQuestion {
	answer: string;
	options: string[];
	term: string;
}

export interface Attempt {
	date: string;
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
	questions: QuizQuestion[];
	resetDisabled?: boolean;
	score?: number;
	selected: string | null;
	title: string;
	toastNode?: React.ReactNode;
}
