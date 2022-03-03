export const Team = () => {
    const TeamButton = ({ label }: { label: string; }) => {
        return <>
            <button type='button' className='py-1 px-2 bg-black hover:bg-indigo-700 text-white font-bold'>
                {label}
            </button>{' '}
        </>;
    };

    return <>
        <section className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-900 mx-auto w-full px-8 h-96 pb-14' id='team'>    
            <div className='pr-28 mt-24 gap-4 space-y-2 pl-32'>
                <div className="">
                    <h1 className='text-7xl font-bold text-white'>team</h1>
                </div>
                <div className=''>
                    <p className="text-white">
                        Our ragtag team stepped into the <i className='font-bold text-violet-900'>ether</i> and found each other during the web3con hackathon.
                    </p>
                </div>
                
                <div className="gap-6 flex">
                    <p className="text-white pt-1">We are:</p>
                    <b>
                        <TeamButton label='@billyjitsu' />
                        <TeamButton label='@cryptokrizz' />
                        <TeamButton label='@nathanng.eth' />
                        <TeamButton label='@jerrod' />
                        <TeamButton label='@nfter' />
                    </b>
                </div>

            </div>
        </section>
    </>;
};
