import { FC } from 'react';
import Image from 'next/image';
import clsx from 'clsx';

interface FooterProps {
	className?: string;
}

const Footer: FC<FooterProps> = ({ className }) => {
	return (
		<footer className={clsx(className, 'py-8 flex justify-center items-center border-t border-t-gray-300')}>
			<a
				className='flex-grow flex justify-center items-center'
				href='https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
				target='_blank'
				rel='noopener noreferrer'
			>
				Powered by{' '}
				<span className='ml-2 h-4'>
					<Image src='/vercel.svg' alt='Vercel Logo' width={72} height={16} />
				</span>
			</a>
		</footer>
	);
};

Footer.displayName = 'Footer';

export default Footer;
