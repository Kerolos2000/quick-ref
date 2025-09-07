import { Page, Section } from 'mui-plus-components';
import React from 'react';
import { TabsWrapper } from 'src/components/features/my-profile';
import { useJsQuizStore, useReactQuizStore } from 'src/hooks';

export interface MyProfileProps {}

export const MyProfile: React.FC<MyProfileProps> = () => {
	const jsAttempts = useJsQuizStore(state => state.attempts);
	const reactAttempts = useReactQuizStore(state => state.attempts);

	return (
		<Page title='My Profile'>
			<Section sectionID='my-profile'>
				<TabsWrapper
					jsAttempts={jsAttempts}
					reactAttempts={reactAttempts}
				/>
			</Section>
		</Page>
	);
};
