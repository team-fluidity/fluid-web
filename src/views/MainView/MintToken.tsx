import { FormEvent, useState } from 'react';
import { useWallet } from '@web3-ui/hooks';
import { ethers } from 'ethers';
import { HOST_ADDRESS, CFA_ADDRESS, FDAIX_ADDRESS } from 'src/constants';
import ConnectWallet from 'src/components/ConnectWallet';
import Web3ConNFTJSON from 'src/abis/Web3ConNFT.json';
import { ContractInfo } from './ContractInfo';

export const MintToken = () => {
    const { connection, connected } = useWallet();
    const [ streamStarted, setStreamStarted ] = useState(Boolean);

    const handleStartContract = async (nftName: string, nftSymbol: string) => {
        if (connection && connection.signer) {
            console.log('Creating a contract with nft name: ', nftName, ' and nft symbol: ', nftSymbol);
            const factory = new ethers.ContractFactory(Web3ConNFTJSON.abi, Web3ConNFTJSON.bytecode, connection.signer);
            const contract = await factory.deploy(connection.userAddress, nftName, nftSymbol, HOST_ADDRESS, CFA_ADDRESS, FDAIX_ADDRESS, connection.userAddress);
            if (contract) {
                console.log('contract started', contract);
                setStreamStarted(true)
            }
        }
        else {
            console.log('Wallet not connected')
        }
    };

    return <>
        <section className='max-w-7xl mx-auto w-full pt-10 px-8' id='start'>
            <div>
                <h1 className='text-7xl font-bold'>Start a stream</h1>
            </div>
            {connected ? (
                <Form onSubmit={handleStartContract} />) : (
                <div className='py-4'>
                    <h1 className='bg-gradient-to-r'>Please connect your wallet to continue</h1>
                    <ConnectWallet className='mt-4' />
                </div>
            )}
        </section>
        {streamStarted && (
            <ContractInfo />
        )}
    </>;
};

type FormProps = { onSubmit: (nftName: string, nftSymbol: string) => void }

const Form = ({ onSubmit }: FormProps) => {
    const [nftName, setNftName] = useState('');
    const [nftSymbol, setNftSymbol] = useState('');

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (!nftName || !nftSymbol) return;
        onSubmit(nftName, nftSymbol);
    }

    return <div className='mt-4 w-3/6 gap-4'>
        <div>
            <p className='mt-4'>Begin by entering an NFT name and symbol.</p>
        </div>
        <form className='' onSubmit={handleSubmit}>
            <div className='flex gap-4 mt-4'>
                <input value={nftName} onChange={e => setNftName(e.target.value)} id='nftname' type="text" className='w-3/6 px-3 form-control border border-solid border-gray-300 rounded focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none' placeholder='NFT Name'></input>
                <input value={nftSymbol} onChange={e => setNftSymbol(e.target.value)} id='nft-symbol' type="text" className='w-3/6 px-3 form-control border border-solid border-gray-300 rounded focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none' placeholder='NFT Symbol'></input>
            </div>
            <div className='w-96 flex gap-4'>
                <button type='submit' className='float-left mt-6 py-2 px-4 rounded-lg bg-gradient-to-r from-orange-500 to-red-500 hover:from-red-500 hover:to-red-700 text-white font-bold'>
                    Mint
                </button>
            </div>
        </form>
    </div>
}