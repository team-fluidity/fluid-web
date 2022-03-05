import type { NextPage } from 'next';
import PageLayout from "src/layouts/PageLayout"
import { ManageToken } from "src/views/MainView/ManageToken"


const Manage: NextPage = () => {
    return (
        <PageLayout>
            <ManageToken />
        </PageLayout>
    )
}

export default Manage;