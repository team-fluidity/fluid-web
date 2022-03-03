import type { NextPage } from 'next';

import PageLayout from 'src/layouts/PageLayout';
import { MintToken } from 'src/views/MainView/MintToken';

const Mint: NextPage = () => {
    return (
        <PageLayout>
            <MintToken/>
        </PageLayout>
    )
}

export default Mint;
