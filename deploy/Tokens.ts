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
  const {deploy, execute} = deployments;

  const availableNetworks = Object.keys(addresses).map((i) => i as AddressKeys);
  const networkName = availableNetworks.find((i) => i === network.name);

  if (!networkName) throw new Error(`Address Key ${network.name} Not Found`);

  const {deployer} = await getNamedAccounts();
  console.log(
    '-----------' + deployer + ' deploys on ' + network.name + '-----------'
  );
  const token1 = await deploy('Token1', {
    from: deployer,
    args: [],
    log: true,
  });

  const token2 = await deploy('Token2', {
    from: deployer,
    args: [],
    log: true,
  });

  await execute(
    'Token1',
    {from: deployer, log: true},
    'mint_natural',
    '0x10E38dFfFCfdBaaf590D5A9958B01C9cfcF6A63B',
    100000
  );

  await execute(
    'Token2',
    {from: deployer, log: true},
    'mint_natural',
    '0x10E38dFfFCfdBaaf590D5A9958B01C9cfcF6A63B',
    100000
  );

  const contracts = {
    Token1: token1.address,
    Token2: token2.address,
  };

  writeFileSync(
    'addresses/' + network.name + '/Tokens.json',
    JSON.stringify(contracts)
  );
};

export default func;
func.tags = ['Tokens'];
