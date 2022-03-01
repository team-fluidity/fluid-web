import { FC } from 'react';
import clsx from 'clsx';

interface TopBarProps {
	className?: string;
}

const TopBar: FC<TopBarProps> = ({ className }) => {
	return (
		<div className={clsx(className, 'w-full h-20 flex flex-col')}>
			<div className='px-8 flex-1 flex justify-between items-center'>
				<div className='text-3xl text-indigo-500 font-extrabold'>Fluidity</div>
				<div className='flex items-center gap-16'>
					<button type='button' className='font-bold text-gray-700'>
						FLUIDITY
					</button>
					<button type='button' className='font-bold text-gray-700'>
						ABOUT
					</button>
					<button type='button' className='font-bold text-gray-700'>
						FAQ
					</button>
				</div>
				<div>
					<button type='button' className='py-2 px-4 rounded-lg bg-black text-white font-bold'>
						Connect Wallet
					</button>
				</div>
			</div>
			<div className='h-2 bg-gradient-to-r from-indigo-700 to-red-500' />
		</div>
	);
};

TopBar.displayName = 'TopBar';

export default TopBar;
