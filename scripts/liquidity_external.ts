// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
// When running the script with `hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
import {ethers} from 'hardhat';
import {Contract, ContractFactory} from 'ethers';

import * as Tokens from '../addresses/bsc-testnet/Tokens.json';

async function main(): Promise<void> {
  // Hardhat always runs the compile task when running scripts through it.
  // If this runs in a standalone fashion you may want to call compile manually
  // to make sure everything is compiled
  // await run("compile");
  // We get the contract to deploy

  try{
  const pancakeRouter = await (
    await ethers.getContractFactory('PancakeRouter')
  ).attach('0x9681Ff4E60A788514170d0C1Fe4196d19D829487');

  const t1 = await (
    await ethers.getContractFactory('Token1')
  ).attach(Tokens.Token1);
  const t2 = await (
    await ethers.getContractFactory('Token2')
  ).attach(Tokens.Token2);

  await t1.approve(pancakeRouter.address, 1000000);
  await t2.approve(pancakeRouter.address, 1000000);

  await t1.approve('0x10E38dFfFCfdBaaf590D5A9958B01C9cfcF6A63B', 1000000);
  await t2.approve('0x10E38dFfFCfdBaaf590D5A9958B01C9cfcF6A63B', 1000000);

  const pancakeFactory = await (
    await ethers.getContractFactory('PancakeFactory')
  ).attach('0xDB8841220cA10B58416038a754F7cF08132F03D7'); // Factory.PancakeFactory);

  await pancakeFactory.createPair(t1.address, t2.address);

  /*
  await pancakeRouter.TransferHelper().safeApprove(
    '0x78867bbeef44f2326bf8ddd1941a4439382ef2a7',// address token,
    // address to,
    // uint256 value
  )*/
  /*
  const pf = await pancakeRouter.pairFor( // address factory, address tokenA, address tokenB
    '0x78867bbeef44f2326bf8ddd1941a4439382ef2a7', // token 1 - BUSD
  '0xae13d989daC2f0dEbFf460aC112a837C89BAa7cd', // token 2 - WBNB
  )
console.log("pair for address: " + pf.address);

  await pancakeRouter.safeApprove(
    '0x78867bbeef44f2326bf8ddd1941a4439382ef2a7', // token 1 - BUSD
    '0xae13d989daC2f0dEbFf460aC112a837C89BAa7cd', // token 2 - WBNB

  )*/

  await pancakeRouter.addLiquidity(
    t1.address, // token 1 - BUSD
    t2.address, // token 2 - WBNB
    1000000, // amount 1
    1000000, // amount 2
    100000, // minamount 1
    100000, // min amount 2
    '0x10E38dFfFCfdBaaf590D5A9958B01C9cfcF6A63B', // to address
    500719925470991 // deadline
  );

  } catch(e)
  {
    console.log(e)
  }
}
// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error: Error) => {
    console.error(error);
    process.exit(1);
  });
