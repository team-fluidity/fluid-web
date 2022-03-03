import Link from "next/link";
import Button from "src/components/button";

export const Intro = () => {
    return <>
        <section style={{ minHeight: '95vh' }} className='bg-gradient-to-r from-indigo-900 to-indigo-400 mx-auto w-full p-20 px-8 h-4/5' id='fluidity'>
            <div className="pl-32 w-full">
                <h2 className='text-3xl font-bold text-white content'>Bootstrap your DAO with</h2>
                <h1 className='text-7xl sm:text-[8rem] text-indigo-400 font-extrabold'>fluidity</h1>
                <h2 className='mt-8 text-3xl font-bold text-white'>
                    Stream a <span className='text-indigo-400'>token</span> over a period of time
                </h2>
            </div>

            <div className='mt-16 space-y-4 pl-32'>
                <p className='text-xl text-white'>
                    With <span className='text-red-400 font-extrabold'>fluidity</span>:
                </p>
                <ol className='space-y-2 text-lg'>
                    <li>
                        <span className='mr-2 text-white' role='img' aria-label='document'>
                            📄
                        </span>{' '}
                        <span className='text-white'>create smart contracts to manage your NFT memberships</span>
                    </li>
                    <li>
                        <span className='mr-2' role='img' aria-label='water-wave'>
                            🌊
                        </span>{' '}
                        <span className='text-white'>provide a vesting schedule through streaming tokens over a period of time</span>
                    </li>
                    <li>
                        <span className='mr-2' role='img' aria-label='money-with-wings'>
                            💸
                        </span>{' '}
                        <span className='text-white'>gain liquidity in your treasury with stables, ETH, or your choice of token</span>
                    </li>
                    <li></li>
                </ol>
            </div>

            <div className='mt-16 space-y-4 pl-32'>
                <Link href='/mint'>
                    <a>
                        <Button>
                            Start a stream
                        </Button>
                    </a>
                </Link>
            </div>
        </section>
    </>;
};
