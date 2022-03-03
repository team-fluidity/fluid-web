import { FC, useEffect, useState } from 'react';
import { useWriteContract } from '@web3-ui/hooks';

import { TRADEABLE_CASHFLOW_ADDRESS } from 'src/constants';
import { Web3ConNFT } from 'src/types/contracts';
import Web3ConNFTJSON from 'src/abis/Web3ConNFT.json';
import { StartStreaming } from './StartStreaming';
import { Intro } from './Intro';
import { ContractTesting } from './ContractTesting';
import { Faq } from './Faq';
import { Team } from './Team';

interface MainViewProps {
	className?: string;
}

interface NftContractItem {
	name: string;
	baseUri: string;
}

const MainView: FC<MainViewProps> = ({ className }) => {
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

	return <>
		<Intro />
		{/* <StartStreaming /> */}
		{/* <ContractTesting nftContractItem={nftContractItem} /> */}
		<Team />
		<Faq />
	</>
};

MainView.displayName = 'MainView';

export default MainView;
