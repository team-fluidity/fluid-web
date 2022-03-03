import { ChangeEvent, FormEvent, useState } from 'react';
import { useWallet } from '@web3-ui/hooks';
import { ethers } from 'ethers';
import { HOST_ADDRESS, CFA_ADDRESS, FDAIX_ADDRESS } from 'src/constants';
import ConnectWallet from 'src/components/ConnectWallet';
import Web3ConNFTJSON from 'src/abis/Web3ConNFT.json';
import { ContractInfo } from './ContractInfo';
import Button from 'src/components/button';

export const MintToken = () => {
    const { connection, connected } = useWallet();
    const [streamStarted, setStreamStarted] = useState(Boolean);

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
        <section className='bg-gradient-to-r from-indigo-900 to-indigo-400 mx-auto w-full pt-10 h-screen' id='start'>
            {!streamStarted ? (
                <div className='pl-36 text-white'>
                    <h1 className='text-7xl font-bold'>Start a stream</h1>
                    {connected ? (
                        <Form onSubmit={handleStartContract} />) : (
                        <div className='py-4'>
                            <h1 className=''>Please connect your wallet to continue</h1>
                            <ConnectWallet className='mt-4' />
                        </div>
                    )}
                </div>
            ) : (
                <div>
                    <h1 className='pl-32 pb-8 text-7xl font-bold text-white'>Stream Started!</h1>
                    <ContractInfo />
                </div>
            )}
        </section>


    </>;
};

type FormProps = { onSubmit: (nftName: string, nftSymbol: string) => void }

const Form = ({ onSubmit }: FormProps) => {
    const [nftName, setNftName] = useState('');
    const [nftSymbol, setNftSymbol] = useState('');
    const [nftNameError, setNameError] = useState(false);
    const [nftSymbolError, setSymbolError] = useState(false);

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        let isError = false;
        if (!nftName) {
            setNameError(true);
            isError = true;
        }
        if (!nftSymbol) {
            setSymbolError(true);
            isError = true;
        }
        if (isError) {
            return;
        }
        onSubmit(nftName, nftSymbol);
    }

    const handleChangeSymbol = (e: ChangeEvent<HTMLInputElement>) => setNftSymbol(e.target.value.toUpperCase());

    return <div className='mt-4 w-3/6 gap-4'>
        <div>
            <p className='mt-4'>Begin by entering an NFT name and symbol.</p>
        </div>
        <form className='' onSubmit={handleSubmit}>
            <div className='flex gap-4 mt-4'>
                <Input isError={nftNameError} value={nftName} onChange={e => setNftName(e.target.value)} />
                <Input isError={nftSymbolError} value={nftSymbol} onChange={handleChangeSymbol} />
            </div >
            <div className='w-96 flex gap-4'>
                <Button type='submit'>
                    Mint
                </Button>
            </div>
        </form >
    </div >
}

const Input = ({ isError, value, onChange }: { isError: boolean; value: string; onChange: (e: ChangeEvent<HTMLInputElement>) => void }) => <>
    <input
        style={{ borderColor: isError ? 'red' : undefined }}
        value={value}
        onChange={onChange}
        id='nftname'
        type="text"
        className='w-3/6 px-3 form-control border border-solid border-gray-300 rounded focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none text-black'
        placeholder='NFT Name'
    ></input>
</>
