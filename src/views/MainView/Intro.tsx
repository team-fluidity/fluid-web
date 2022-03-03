export const Intro = () => {
    return <>
        <section className='max-w-7xl mx-auto w-full pt-40 px-8' id='fluidity'>
            <h2 className='text-3xl font-bold'>Bootstrap your DAO with</h2>
            <h1 className='text-7xl sm:text-[8rem] text-indigo-700 font-extrabold'>fluidity</h1>
            <h2 className='mt-8 text-3xl font-bold'>
                Stream <span className='text-indigo-500'>token</span> over a period of time
            </h2>
            <div className='mt-16 max-w-2xl space-y-4'>
                <p className='text-xl text-black'>
                    With <span className='text-indigo-700 font-extrabold'>fluidity</span>:
                </p>
                <ol className='space-y-2 text-lg'>
                    <li>
                        <span className='mr-2' role='img' aria-label='document'>
                            📄
                        </span>{' '}
                        create smart contracts to manage your NFT memberships
                    </li>
                    <li>
                        <span className='mr-2' role='img' aria-label='water-wave'>
                            🌊
                        </span>{' '}
                        provide a vesting schedule through streaming tokens over a period of time
                    </li>
                    <li>
                        <span className='mr-2' role='img' aria-label='money-with-wings'>
                            💸
                        </span>{' '}
                        gain liquidity in your treasury with stables, ETH, or your choice of token
                    </li>
                    <li></li>
                </ol>
            </div>
        </section>
    </>;
};
