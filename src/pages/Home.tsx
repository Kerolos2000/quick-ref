import { Page } from 'mui-plus-components';
import React from 'react';
import {
	HomeAboutMeSection,
	HomeIntroSection,
	HomeProjectGoalSection,
} from 'src/components';

export interface HomeProps {}

export const Home: React.FC<HomeProps> = () => {
	return (
		<Page title='Home'>
			<HomeIntroSection />
			<HomeAboutMeSection />
			<HomeProjectGoalSection />
		</Page>
	);
};
