import type { NextPage } from 'next';

import Footer from 'src/layout/Footer';
import HeadTags from 'src/layout/Head/HeadTags';
import MainView from 'src/views/MainView';

const Home: NextPage = () => {
	return (
		<div className='px-8'>
			<HeadTags />
			<MainView />
			<Footer />
		</div>
	);
};

export default Home;
