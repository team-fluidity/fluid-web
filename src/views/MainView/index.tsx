import { FC, useEffect, useState } from 'react';
import clsx from 'clsx';
import { useWallet, useWriteContract } from '@web3-ui/hooks';

import hostJSON from 'src/abis/ISuperfluid.json';
import cfaJSON from 'src/abis/IConstantFlowAgreementV1.json';
import Web3ConNFTJSON from 'src/abis/Web3ConNFT.json';
import { HOST_ADDRESS, CFA_ADDRESS, TRADEABLE_CASHFLOW_ADDRESS } from 'src/constants';
import { IConstantFlowAgreementV1, ISuperfluid, Web3ConNFT } from 'src/types/contracts';

interface MainViewProps {
	className?: string;
}

interface NftContractItem {
	name: string;
	baseUri: string;
}

const MainView: FC<MainViewProps> = ({ className }) => {
	const { connection } = useWallet();
	const [hostContract, hostContractIsReady] = useWriteContract<ISuperfluid>(HOST_ADDRESS, hostJSON.abi);
	const [cfaContract, cfaContractIsReady] = useWriteContract<IConstantFlowAgreementV1>(CFA_ADDRESS, cfaJSON.abi);
	const [nftContract, nftContractIsReady] = useWriteContract<Web3ConNFT>(TRADEABLE_CASHFLOW_ADDRESS, Web3ConNFTJSON.abi);
	const [nftContractItem, setNftContractItem] = useState<NftContractItem | null>(null);

	// For nftContract, call a function
	// Example: Get name of nftContract (which returns a promise)
	useEffect(() => {
		const getNftContractMetadata = async () => {
			if (nftContract) {
				const name = await nftContract.name();
				const baseUri = await nftContract.baseURI();
				setNftContractItem({
					name: name,
					baseUri: baseUri
				});
			}
		};

		if (nftContract && nftContractIsReady) {
			getNftContractMetadata();
		}
	}, [nftContract, nftContractIsReady]);

	return (
		<main className={clsx(className, 'w-full flex-1 flex flex-col items-center')}>
			<section className='max-w-7xl mx-auto w-full pt-40 px-8' id='fluidity'>
				<h2 className='text-3xl font-bold'>Bootstrap your DAO with</h2>
				<h1 className='text-7xl sm:text-[8rem] text-indigo-700 font-extrabold'>fluidity</h1>
				<h2 className='mt-8 text-3xl font-bold'>
					Stream <span className='text-indigo-500'>token</span> over a period of time
				</h2>
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
			<section className='max-w-7xl mx-auto w-full pt-40 px-8' id='contract-testing'>
				<h1 className='text-7xl font-bold'>contract testing</h1>
				<div className='mt-4 text-lg'>
					<b>Wallet:</b> {connection.ens || connection.userAddress || 'Not connected'}
				</div>
				{hostContract && (
					<div className='mt-4'>
						<div className='text-lg font-bold'>Host Contract Details</div>
						<ol>
							<li>
								<b>Address:</b> {hostContract.address}
							</li>
							<li>
								<b>isReady:</b> {hostContractIsReady.toString()}
							</li>
						</ol>
					</div>
				)}
				{cfaContract && (
					<div className='mt-4'>
						<div className='text-lg font-bold'>CFA Contract Details</div>
						<ol>
							<li>
								<b>Address:</b> {cfaContract.address}
							</li>
							<li>
								<b>isReady:</b> {cfaContractIsReady.toString()}
							</li>
						</ol>
					</div>
				)}
				{nftContract && (
					<div className='mt-4'>
						<div className='text-lg font-bold'>NFT Contract Details</div>
						<ol>
							<li>
								<b>Address:</b> {nftContract.address}
							</li>
							<li>
								<b>isReady:</b> {nftContractIsReady.toString()}
							</li>
							<li>
								<b>Name:</b> {nftContractItem?.name}
							</li>
							<li>
								<b>Base URI:</b> {nftContractItem?.baseUri}
							</li>
						</ol>
					</div>
				)}
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
