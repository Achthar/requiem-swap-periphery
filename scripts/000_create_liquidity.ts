
// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
// When running the script with `hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
import { ethers } from 'hardhat';
import { Contract, ContractFactory } from 'ethers';

async function main(): Promise<void> {
  // Hardhat always runs the compile task when running scripts through it.
  // If this runs in a standalone fashion you may want to call compile manually
  // to make sure everything is compiled
  // await run("compile");
  // We get the contract to deploy

  const routerFactory = await ethers.getContractFactory("PancakeRouter");
  //cakeToken = (await cakeFactory.deploy()) as CakeToken;
  // await cakeToken.deployed();
  const pancakeRouter =  await routerFactory.attach("0x2E77FA413E2EFb808CE51798eF3cE1A0c761b592")

await pancakeRouter.addLiquidity(

  '0x7b95aD33D57a72F9653bcc749e14E571A9FaB0C2', // token 1 cake
  '0xae13d989daC2f0dEbFf460aC112a837C89BAa7cd', // token 2 - WBNB
  10000000, // amount 1
  10000000, // amount 2
  10000000, // minamount 1
  10000000, // min amount 2
  '0x10E38dFfFCfdBaaf590D5A9958B01C9cfcF6A63B', // to address
  500719925470991, // deadline
)

}
// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error: Error) => {
    console.error(error);
    process.exit(1);
  });
