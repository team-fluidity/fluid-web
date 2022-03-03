import type { NextPage } from 'next';

import MainView from 'src/views/MainView';
import PageLayout from 'src/layouts/PageLayout';

const Home: NextPage = () => <>
	<PageLayout>
		<MainView />
	</PageLayout>
</>

export default Home;
