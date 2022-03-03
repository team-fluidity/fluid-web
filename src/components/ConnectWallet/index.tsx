import { useWallet } from '@web3-ui/core';
import clsx from 'clsx';
import { FC } from 'react';
import Button from '../button';

interface ConnectWalletProps {
	className?: string;
}

const ConnectWallet: FC<ConnectWalletProps> = ({ className }) => {
	const { connectWallet, connection, connected, disconnectWallet } = useWallet();

	return (
		<Button onClick={connected ? disconnectWallet : connectWallet} >
			{connected ? connection.ens || connection.userAddress : 'Connect wallet'}
		</Button>
	);
};

ConnectWallet.displayName = 'ConnectWallet';

export default ConnectWallet;
