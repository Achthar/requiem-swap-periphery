// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
// When running the script with `hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
import {ethers} from 'hardhat';
import {Contract, ContractFactory} from 'ethers';

import * as Tokens from '../addresses/bsc-testnet/Tokens.json';
import * as Router from '../addresses/bsc-testnet/Router.json';
import * as Factory from '../addresses/bsc-testnet/Factory.json';

async function main(): Promise<void> {
  // Hardhat always runs the compile task when running scripts through it.
  // If this runs in a standalone fashion you may want to call compile manually
  // to make sure everything is compiled
  // await run("compile");
  // We get the contract to deploy

  try{
  const requiemRouter = await (
    await ethers.getContractFactory('RequiemRouter')
  ).attach(Router.RequiemRouter);

  const t1 = await (
    await ethers.getContractFactory('Token1')
  ).attach(Tokens.Token1);
  const t2 = await (
    await ethers.getContractFactory('Token2')
  ).attach(Tokens.Token2);

  await t1.approve(requiemRouter.address, 1000000);
  await t2.approve(requiemRouter.address, 1000000);

  await t1.approve('0x10E38dFfFCfdBaaf590D5A9958B01C9cfcF6A63B', 1000000);
  await t2.approve('0x10E38dFfFCfdBaaf590D5A9958B01C9cfcF6A63B', 1000000);

  await requiemRouter.addLiquidity(
    t1.address, // token 1 - BUSD
    t2.address, // token 2 - WBNB
    10000, // amount 1
    10000, // amount 2
    1000, // minamount 1
    1000, // min amount 2
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
