import Grid from '@mui/material/Grid';
import { Page, Section } from 'mui-plus-components';
import React from 'react';
import { QuizLayoutProps } from 'src/types';

import { LevelDialog } from './LevelDialog';
import { QuizQuestionCard } from './QuizQuestionCard';
import { QuizResetDialog } from './QuizResetDialog';
import { QuizStatsCard } from './QuizStatsCard';
import { QuizSummaryCard } from './QuizSummaryCard';

export const QuizLayout: React.FC<QuizLayoutProps> = ({
	confirmOpen,
	current,
	onCancelReset,
	onConfirmReset,
	onNext,
	onPrev,
	onResetRequest,
	onSelect,
	prevDisabled = false,
	questions,
	quizType,
	resetDisabled = false,
	score = 0,
	selected,
	title,
	toastNode,
}) => {
	const total = questions.length;
	const question = questions[current];
	const progressValue = total
		? Math.min(100, ((current + 1) / total) * 100)
		: 0;
	const answered = current > 0 ? current : 0;
	const percentage = answered > 0 ? Math.round((score / answered) * 100) : 0;
	let funnyMessage = '';
	if (answered > 0) {
		if (percentage < 25) funnyMessage = 'يعنى معتجاوبش حاجة صح خالص ؟ 🤦‍♂️';
		else if (percentage < 50)
			funnyMessage = 'انا نقاش و عندى عدتى و فرشتى و روليتى🎨';
		else if (percentage < 75)
			funnyMessage = 'طول ما انا موجود انت مش هتفارق دكة الجونيور ابدا 😂';
		else funnyMessage = 'ابنى بطل مصر لا بطل العالم لا بطل العالم كله🏆';
	}

	return (
		<Page title={title}>
			<LevelDialog quizType={quizType} />
			<Section sectionID={`quiz-${title.replace(/\s+/g, '-').toLowerCase()}`}>
				<Grid
					container
					spacing={2}
				>
					<Grid size={{ md: 8, xs: 12 }}>
						{question ? (
							<QuizQuestionCard
								current={current}
								onNext={onNext}
								onPrev={onPrev}
								onResetRequest={onResetRequest}
								onSelect={onSelect}
								prevDisabled={prevDisabled}
								progressValue={progressValue}
								question={question}
								resetDisabled={resetDisabled}
								selected={selected}
								total={total}
							/>
						) : (
							<QuizSummaryCard
								onConfirmReset={onConfirmReset}
								score={score}
								toastNode={toastNode}
								total={total}
							/>
						)}
					</Grid>
					<Grid size={{ md: 4, xs: 12 }}>
						<QuizStatsCard
							current={current}
							funnyMessage={funnyMessage}
							percentage={percentage}
							score={score}
							total={total}
						/>
					</Grid>
				</Grid>
				<QuizResetDialog
					onCancel={onCancelReset}
					onConfirm={onConfirmReset}
					open={confirmOpen}
				/>
			</Section>
		</Page>
	);
};
