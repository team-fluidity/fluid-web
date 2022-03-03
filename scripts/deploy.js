//mumbai addresses - change if using a different network
const host = '0xEB796bdb90fFA0f28255275e16936D25d3418603';
const cfa = '0x49e565Ed1bdc17F3d220f72DF0857C26FA83F873';
const fDAIx = '0x5D8B4C2554aeB7e86F387B4d6c00Ac33499Ed01f';

//your address here...
const owner = "0xe2b8651bF50913057fF47FC4f02A8e12146083B8";

const main = async () => {
    const nftContractFactory = await hre.ethers.getContractFactory('Web3FluidNFT');
    const nftContract = await nftContractFactory.deploy(
        owner,
        "Web3Con", 
        "W3C", 
        host,
        cfa,
        fDAIx,
        owner
        );
    await nftContract.deployed();
    console.log("Contract deployed to:", nftContract.address);
  };
  
  const runMain = async () => {
    try {
      await main();
      process.exit(0);
    } catch (error) {
      console.log(error);
      process.exit(1);
    }
  };
  
  runMain();