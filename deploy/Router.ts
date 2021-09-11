import {HardhatRuntimeEnvironment} from 'hardhat/types';
import {DeployFunction} from 'hardhat-deploy/types';
import {parseEther} from 'ethers/lib/utils';
import {artifacts} from 'hardhat';
import {writeFileSync} from 'fs';
import {task} from 'hardhat/config';
import '@nomiclabs/hardhat-waffle';
import * as addresses from './addresses.json';
import { Address } from 'cluster';

import * as Factory from '../addresses/bsc-testnet/Factory.json';

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
  const pancakeRouter = await deploy('PancakeRouter', {
    from: deployer,
    args: [
      '0xDB8841220cA10B58416038a754F7cF08132F03D7', //vFactory.PancakeFactory,// factory,
      addresses[networkName].WBNB, //WBNB instead of WETH
    ],
    log: true,
  });

  const contracts = {
    PancakeRouter: pancakeRouter.address,
  };

  writeFileSync(
    'addresses/' + network.name + '/Router.json',
    JSON.stringify(contracts)
  );
};

export default func;
func.tags = ['Router'];
