import {HardhatRuntimeEnvironment} from 'hardhat/types';
import {DeployFunction} from 'hardhat-deploy/types';
import {parseEther} from 'ethers/lib/utils';
import {artifacts} from 'hardhat';
import {writeFileSync} from 'fs';
import {task} from 'hardhat/config';
import '@nomiclabs/hardhat-waffle';
import * as addresses from './addresses.json';
import {Address} from 'cluster';

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
  BSC_TESTNET = 'bsc-testnet',
}

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const {deployments, getNamedAccounts, network} = hre;
  const {deploy, execute, read} = deployments;

  const availableNetworks = Object.keys(addresses).map((i) => i as AddressKeys);
  const networkName = availableNetworks.find((i) => i === network.name);

  if (!networkName) throw new Error(`Address Key ${network.name} Not Found`);

  const {deployer} = await getNamedAccounts();
  console.log(
    '-----------' + deployer + ' deploys on ' + network.name + '-----------'
  );

  const pancakeFactory = await deploy('PancakeFactory', {
    from: deployer,
    args: [
      deployer, // feeToSetter
    ],
    log: true,
  });

  const callHash = await deploy('CallHash', {
    from: deployer,
    args: [],
    log: true,
  });

  const ch = await execute(
    'CallHash',
    {from: deployer, log: true},
    'getInitHash',
  );
  console.log('hash via contract: ' + ch);

  const init_hash = await read('PancakeFactory', 'INIT_CODE_PAIR_HASH');
  console.log('hash read: ' + init_hash);

  const feeToSetter = await read('PancakeFactory', 'feeToSetter');
  console.log(feeToSetter);

  const contracts = {
    PancakeFactory: pancakeFactory.address,
    INIT_CODE_PAIR_HASH: init_hash,
  };

  writeFileSync(
    'addresses/' + network.name + '/Factory.json',
    JSON.stringify(contracts)
  );
};

export default func;
func.tags = ['Factory'];
