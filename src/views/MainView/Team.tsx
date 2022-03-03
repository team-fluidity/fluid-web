export const Team = () => {
    const TeamButton = ({ label }: { label: string; }) => {
        return <>
            <button type='button' className='py-1 px-2 bg-black hover:bg-indigo-700 text-white font-bold'>
                {label}
            </button>{' '}
        </>;
    };

    return <>
        <section className='max-w-7xl mx-auto w-full pt-40 px-8' id='team'>
            <h1 className='text-7xl font-bold'>team</h1>
            <div className='mt-8 flex flex-col gap-4'>
                <p>
                    Our ragtag team stepped into the <i>ether</i> and found each other during the web3con hackathon.
                </p>
                <p>We are:</p>
                <b>
                    <TeamButton label='@billyjitsu' />
                    <TeamButton label='@cryptokrizz' />
                    <TeamButton label='@nathanng.eth' />
                    <TeamButton label='@jerrod' />
                    <TeamButton label='@nfter' />
                </b>
            </div>
        </section>
    </>;
};
