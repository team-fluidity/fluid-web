import { FC } from 'react';
import Head from 'next/head';

interface HeadTagsProps {}

const HeadTags: FC<HeadTagsProps> = () => {
	return (
		<Head>
			<title>Team Fluidity</title>
			<meta name='description' content='Team Fluidity for Web3Con Hackathon' />
			<link rel='icon' href='/favicon.ico' />
		</Head>
	);
};

HeadTags.displayName = 'HeadTags';

export default HeadTags;
