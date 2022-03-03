import { Address } from '@web3-ui/components';
import ConnectWallet from 'src/components/ConnectWallet';

export const Wallet = ({ ens, userAddress }: { ens: string | undefined; userAddress: string | null | undefined; }) => {
    return <>{ens || userAddress
        ? <Address value={ens || userAddress || ''} shortened copiable />
        : <ConnectWallet />}</>;
};
