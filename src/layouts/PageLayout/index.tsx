import React, { ReactChild, ReactChildren, ReactNode } from 'react';
import { NextPage } from 'next';

import Footer from '../Footer';
import HeadTags from '../Head/HeadTags';
import MainLayout from '../MainLayout';
import TopBar from '../TopBar';

const PageLayout: NextPage = ({ children }: any) => { // TODO: I'm not sure what type children, so using any for now.
    return <>
        <HeadTags />
        <MainLayout>
            <TopBar />
            <main className={'w-full flex-1 flex flex-col items-center'}>
                {children}
            </main>
        </MainLayout>
        <Footer />
    </>
};

export default PageLayout;