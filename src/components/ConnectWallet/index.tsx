import { useWallet } from '@web3-ui/core';
import clsx from 'clsx';
import { FC } from 'react';

interface ConnectWalletProps {
	className?: string;
}

const ConnectWallet: FC<ConnectWalletProps> = ({ className }) => {
	const { connectWallet, connection, connected, disconnectWallet } = useWallet();

	return (
		<button
			type='button'
			className={clsx(
				className,
				'py-2 px-4 rounded-lg bg-gradient-to-r from-orange-500 to-red-500 hover:from-red-500 hover:to-red-700 text-white font-bold'
			)}
			onClick={connected ? disconnectWallet : connectWallet}
		>
			{connected ? connection.ens || connection.userAddress : 'Connect wallet'}
		</button>
	);
};

ConnectWallet.displayName = 'ConnectWallet';

export default ConnectWallet;
