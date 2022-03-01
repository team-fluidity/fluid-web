import clsx from 'clsx';
import { FC } from 'react';

interface MainViewProps {
	className?: string;
}

const MainView: FC<MainViewProps> = ({ className }) => {
	return (
		<main className={clsx(className, 'min-h-screen p-16 flex-1 flex flex-col justify-center items-center')}>
			<h1 className='text-7xl leading-5 font-bold'>
				Welcome to{' '}
				<a className='text-blue-500' href='https://nextjs.org'>
					Team Fluidity
				</a>
			</h1>
		</main>
	);
};

MainView.displayName = 'MainView';

export default MainView;
