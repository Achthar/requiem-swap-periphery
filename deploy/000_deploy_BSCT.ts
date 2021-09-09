import {HardhatRuntimeEnvironment} from 'hardhat/types';
import {DeployFunction} from 'hardhat-deploy/types';
import {parseEther} from 'ethers/lib/utils';
import {artifacts} from 'hardhat';
import {writeFileSync} from 'fs';
import {task} from 'hardhat/config';
import '@nomiclabs/hardhat-waffle';
import * as addresses from './addresses.json';
import { Address } from 'cluster';

// npx hardhat deploy --network bsc-testnet --tags deploy_BSCT --reset

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task('accounts', 'Prints the list of accounts', async (args, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(await account.address);
  }
});

enum AddressKeys {
  BSC_TESTNET = 'bsc-testnet'
}


const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const {deployments, getNamedAccounts, network} = hre;
  const {deploy, execute} = deployments;

  const availableNetworks =  Object.keys(addresses).map(i => i as AddressKeys)
  const networkName = availableNetworks.find((i) => i === network.name);

  if(!networkName) throw new Error(`Address Key ${network.name} Not Found`)

  const {deployer} = await getNamedAccounts();
  console.log(
    '-----------' + deployer + ' deploys on ' + network.name + '-----------'
  );
  const pancakeRouter = await deploy('ApeRouter', {
    from: deployer,
    args: [
      addresses[networkName].CAKE,
      addresses[networkName].WBNB, //WBNB instead of WETH
    ],
    log: true,
  });
  /*
  await execute(
    'PancakeRouter',
    {from: deployer, log: true},
    'addLiquidity',
    '0x7b95aD33D57a72F9653bcc749e14E571A9FaB0C2', // token 1 cake
    '0xae13d989daC2f0dEbFf460aC112a837C89BAa7cd', // token 2 - WBNB
    10000, // amount 1
    10000, // amount 2
    10000, // minamount 1
    10000, // min amount 2
    '0x10E38dFfFCfdBaaf590D5A9958B01C9cfcF6A63B', // to address
    500719925470991, // deadline
  );*/

  const contracts = {
    PancakeRouter: pancakeRouter.address,
  };

  writeFileSync(
    'deployments/' + network.name + '/swap-periphery.json',
    JSON.stringify(contracts)
  );
};

export default func;
func.tags = ['deploy_BSCT'];
