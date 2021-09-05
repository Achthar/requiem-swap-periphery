import {HardhatRuntimeEnvironment} from 'hardhat/types';
import {DeployFunction} from 'hardhat-deploy/types';
import {parseEther} from 'ethers/lib/utils';
import {artifacts} from 'hardhat';
import { writeFileSync } from 'fs';

// npx hardhat deploy --network bsc-testnet --tags deploy_BSCT --reset

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const {deployments, getNamedAccounts} = hre;
  const {deploy, execute} = deployments;

  const {deployer} = await getNamedAccounts();

  const pancakeRouter = await deploy('PancakeRouter', {
    from: deployer,
    args: [
      '0x50169864E490253fB3811898977a0738aBcb6c29', // pancakefactory address
      '0xae13d989dac2f0debff460ac112a837c89baa7cd', //WBNB instead of WETH
    ],
    log: true,
  });

  const contracts = {
    "PancakeRouter":  pancakeRouter.address,
  }

  writeFileSync('swap-periphery.json', JSON.stringify(contracts));
};

export default func;
func.tags = ['deploy_BSCT'];
