import { ChangeEvent, useState } from 'react';
import { useWallet } from '@web3-ui/hooks';
import { ethers } from 'ethers';
import { HOST_ADDRESS, CFA_ADDRESS, FDAIX_ADDRESS } from 'src/constants';
import ConnectWallet from 'src/components/ConnectWallet';
import Web3ConNFTJson from 'src/abis/Web3ConNFT.json';

export const ManageToken = () => {
    const { connection, connected } = useWallet();

    return <>
        <section className='bg-gradient-to-r from-indigo-900 to-indigo-400 mx-auto w-full pt-10 h-screen'>
            <div className='pl-36 text-white'>
                {connected ? (
                        <div>
                            <h1>Begin displaying contract information associated with the wallet</h1>
                        </div>
                    
                    ) : (
                        <div className='py-4'>
                            <h1 className=''>Please connect your wallet to continue</h1>
                            <ConnectWallet className='mt-4' />
                        </div>
                    )}
            </div>
        </section>
    </>;
}