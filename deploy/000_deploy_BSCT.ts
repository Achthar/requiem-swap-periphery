import {HardhatRuntimeEnvironment} from 'hardhat/types';
import {DeployFunction} from 'hardhat-deploy/types';
import {parseEther} from 'ethers/lib/utils';
import {artifacts} from 'hardhat';

// npx hardhat deploy --network bsc-testnet --tags deploy_BSCT --reset

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const {deployments, getNamedAccounts} = hre;
  const {deploy, execute} = deployments;

  const {deployer} = await getNamedAccounts();

  const cakeToken = await deploy('CakeToken', {
    from: deployer,
    args: [],
    log: true,
  });

  // self-donation 1000 tokens to dev
  await execute(
    'CakeToken',
    {from: deployer, log: true},
    'mint_natural',
    '0x10E38dFfFCfdBaaf590D5A9958B01C9cfcF6A63B',
    1000
  );

  // const quantToken = await deploy('QuantToken', {
  //   from: deployer,
  //   args: [],
  //   log: true,
  // });

  // // self-donation 1000 tokens to dev
  // await execute(
  //   'QuantToken',
  //   {from: deployer, log: true},
  //   'mint_natural',
  //   '0x10E38dFfFCfdBaaf590D5A9958B01C9cfcF6A63B',
  //   1000
  // );

  const syrupBar = await deploy('SyrupBar', {
    from: deployer,
    args: [cakeToken.address],
    log: true,
  });

  const masterChef = await deploy('MasterChef', {
    from: deployer,
    args: [
      cakeToken.address,
      syrupBar.address,
      '0x10E38dFfFCfdBaaf590D5A9958B01C9cfcF6A63B',
      1,
      11966425,
    ],
    log: true,
  });

  const router = await deploy('PancakeRouter01', {
    from: deployer,
    args: [],
  });
  /*
  const bnbStaking = await deploy('BnbStaking', {
    from: deployer,
    args: [
      '0x10E38dFfFCfdBaaf590D5A9958B01C9cfcF6A63B', //lp address
      cakeToken.address,
      1, // reward per block
      11966425, // start block
      12966425, // end block
      '0x10E38dFfFCfdBaaf590D5A9958B01C9cfcF6A63B', // adminAddress
      '0xae13d989dac2f0debff460ac112a837c89baa7cd', // WBNB testnet address
    ],
    log: true,
  }); */

  // transferring ownership to to masterChef
  await execute(
    'CakeToken',
    {from: deployer, log: true},
    'transferOwnership',
    masterChef.address
  );

  await execute(
    'SyrupBar',
    {from: deployer, log: true},
    'transferOwnership',
    masterChef.address
  );
};

export default func;
func.tags = ['deploy_BSCT'];
