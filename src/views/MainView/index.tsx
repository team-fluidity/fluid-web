import { FC, useEffect, useState } from 'react';
import clsx from 'clsx';

interface MainViewProps {
	className?: string;
}

const MainView: FC<MainViewProps> = ({ className }) => {
	const [wordIndex, setWordIndex] = useState(0);

	useEffect(() => {
		const timeout = setTimeout(() => {
			setWordIndex((prevState) => (prevState >= 2 ? 0 : prevState + 1));
		}, 3000);
		return () => clearTimeout(timeout);
	}, [wordIndex]);

	return (
		<main className={clsx(className, 'w-full flex-1 flex flex-col items-center')}>
			<section className='max-w-7xl mx-auto w-full pt-40 px-8' id='fluidity'>
				<h2 className='text-3xl font-bold'>Bootstrap your DAO with</h2>
				<h1 className='text-[8rem] text-indigo-700 font-extrabold'>fluidity</h1>
				<div className='mt-16 max-w-2xl space-y-4'>
					<p className='text-xl text-black'>
						With <span className='text-indigo-700 font-extrabold'>fluidity</span>:
					</p>
					<ol className='space-y-2 text-lg'>
						<li>
							<span className='mr-2' role='img' aria-label='document'>
								📄
							</span>{' '}
							create smart contracts to manage your NFT memberships
						</li>
						<li>
							<span className='mr-2' role='img' aria-label='water-wave'>
								🌊
							</span>{' '}
							provide a vesting schedule through streaming tokens over a period of time
						</li>
						<li>
							<span className='mr-2' role='img' aria-label='money-with-wings'>
								💸
							</span>{' '}
							gain liquidity in your treasury with stables, ETH, or your choice of token
						</li>
						<li></li>
					</ol>
				</div>
			</section>
			<section className='max-w-7xl mx-auto w-full pt-40 px-8' id='team'>
				<h1 className='text-7xl font-bold'>team</h1>
				<div className='mt-8 flex flex-col gap-4'>
					<p>
						Our ragtag team stepped into the <i>ether</i> and found each other during the web3con hackathon.
					</p>
					<p>We are:</p>
					<b>
						<button type='button' className='py-1 px-2 bg-black hover:bg-indigo-700 text-white font-bold'>
							@billyjitsu
						</button>{' '}
						<button type='button' className='py-1 px-2 bg-black hover:bg-indigo-700 text-white font-bold'>
							@cryptokrizz
						</button>{' '}
						<button type='button' className='py-1 px-2 bg-black hover:bg-indigo-700 text-white font-bold'>
							@nathanng.eth
						</button>{' '}
						<button type='button' className='py-1 px-2 bg-black hover:bg-indigo-700 text-white font-bold'>
							@jerrod
						</button>{' '}
						<button type='button' className='py-1 px-2 bg-black hover:bg-indigo-700 text-white font-bold'>
							@nfter
						</button>
					</b>
				</div>
			</section>
			<section className='max-w-7xl mx-auto w-full pt-40 px-8' id='faq'>
				<h1 className='text-7xl font-bold'>faq</h1>
				<div className='mt-8'>
					<b>Q: What is this about?</b>
					<p>A: This is about streaming money.</p>
				</div>
				<div className='mt-8'>
					<b>Q: What is this about?</b>
					<p>A: This is about streaming money.</p>
				</div>
				<div className='mt-8'>
					<b>Q: What is this about?</b>
					<p>A: This is about streaming money.</p>
				</div>
			</section>
			<section className='h-64' />
			<section className='h-64' />
			<section className='h-64' />
		</main>
	);
};

MainView.displayName = 'MainView';

export default MainView;
