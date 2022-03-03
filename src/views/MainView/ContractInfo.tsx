import { useWallet, useWriteContract } from '@web3-ui/hooks';
import { HOST_ADDRESS, CFA_ADDRESS, TRADEABLE_CASHFLOW_ADDRESS } from 'src/constants';
import { IConstantFlowAgreementV1, ISuperfluid, Web3ConNFT } from 'src/types/contracts';
import cfaJSON from 'src/abis/IConstantFlowAgreementV1.json';
import hostJSON from 'src/abis/ISuperfluid.json';
import Web3ConNFTJSON from 'src/abis/Web3ConNFT.json';

export const ContractInfo = ({ nftContractItem }: any) => {
    const { connection } = useWallet();
    const { ens, userAddress } = connection;

    const [hostContract, hostContractIsReady] = useWriteContract<ISuperfluid>(HOST_ADDRESS, hostJSON.abi);
    const [cfaContract, cfaContractIsReady] = useWriteContract<IConstantFlowAgreementV1>(CFA_ADDRESS, cfaJSON.abi);
    const [nftContract, nftContractIsReady] = useWriteContract<Web3ConNFT>(TRADEABLE_CASHFLOW_ADDRESS, Web3ConNFTJSON.abi);

    return <>
        <section className='mx-auto w-full h-max pb-6 pt-6 px-8 text-white ' id='contract-testing'>
            <div className='w-max pl-64'>
                <div className='w-max rounded-lg bg-gradient-to-r from-indigo-800 to-green-600 px-16 py-7'>
                    <h1 className='text-7xl font-bold'>contract info</h1>
                    <div className='mt-4 text-lg'>
                        <b>Wallet:</b> {ens || userAddress || 'Not connected'}
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
                </div>
            </div>
            
            
        </section>
    </>;
};
