import { FC } from 'react';
import Link from 'next/link';
import clsx from 'clsx';

interface TopBarProps {
	className?: string;
}

const TopBar: FC<TopBarProps> = ({ className }) => {
	return (
		<div className={clsx(className, 'sticky top-0 w-full h-20 flex flex-col bg-white')}>
			<div className='px-8 flex-1 flex justify-between items-center'>
				<div className='text-4xl text-indigo-700 font-extrabold'>fluidity</div>
				<div className='flex items-center gap-16 text-xl'>
					<Link href='#fluidity'>
						<a>
							<button type='button' className='font-bold text-gray-700 hover:text-gray-500'>
								fluidity
							</button>
						</a>
					</Link>
					<Link href='#team'>
						<a>
							<button type='button' className='font-bold text-gray-700 hover:text-gray-500'>
								team
							</button>
						</a>
					</Link>
					<Link href='#faq'>
						<a>
							<button type='button' className='font-bold text-gray-700 hover:text-gray-500'>
								faq
							</button>
						</a>
					</Link>
				</div>
				<div>
					<button
						type='button'
						className='py-2 px-4 rounded-lg bg-gradient-to-r from-orange-500 to-red-500 hover:from-red-500 hover:to-red-700 text-white font-bold'
					>
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
