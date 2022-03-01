import { FC, ReactNode } from 'react';
import clsx from 'clsx';

interface MainLayoutProps {
	className?: string;
	children: ReactNode;
}

const MainLayout: FC<MainLayoutProps> = ({ className, children }) => {
	return <main className={clsx(className, 'min-h-screen flex flex-col justify-center items-center')}>{children}</main>;
};

MainLayout.displayName = 'MainLayout';

export default MainLayout;
