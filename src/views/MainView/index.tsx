import { FC } from 'react';
import clsx from 'clsx';

interface MainViewProps {
	className?: string;
}

const MainView: FC<MainViewProps> = ({ className }) => {
	return (
		<div className={clsx(className, 'p-16 flex-1 flex flex-col items-center')}>
			<h1 className='text-7xl leading-5 font-bold'>
				Stream with{' '}
				<a className='text-indigo-500' href='https://nextjs.org'>
					Fluidity
				</a>
			</h1>
		</div>
	);
};

MainView.displayName = 'MainView';

export default MainView;
