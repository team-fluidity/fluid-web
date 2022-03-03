import type { NextPage } from 'next';

import PageLayout from 'src/layouts/PageLayout';
import { StartStreaming } from 'src/views/MainView/StartStreaming';

const Mint: NextPage = () => {
    return (
        <PageLayout>
            <StartStreaming/>
        </PageLayout>
    )
}

export default Mint;
