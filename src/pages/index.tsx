import { Fragment } from 'react';
import type { NextPage } from 'next';

import Footer from 'src/layouts/Footer';
import HeadTags from 'src/layouts/Head/HeadTags';
import MainLayout from 'src/layouts/MainLayout';
import TopBar from 'src/layouts/TopBar';
import MainView from 'src/views/MainView';

const Home: NextPage = () => {
	return (
		<Fragment>
			<HeadTags />
			<MainLayout>
				<TopBar />
				<MainView />
			</MainLayout>
			<Footer />
		</Fragment>
	);
};

export default Home;
