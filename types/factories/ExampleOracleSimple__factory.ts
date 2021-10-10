/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  ExampleOracleSimple,
  ExampleOracleSimpleInterface,
} from "../ExampleOracleSimple";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "factory",
        type: "address",
      },
      {
        internalType: "address",
        name: "tokenA",
        type: "address",
      },
      {
        internalType: "address",
        name: "tokenB",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "PERIOD",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "blockTimestampLast",
    outputs: [
      {
        internalType: "uint32",
        name: "",
        type: "uint32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amountIn",
        type: "uint256",
      },
    ],
    name: "consult",
    outputs: [
      {
        internalType: "uint256",
        name: "amountOut",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "price0Average",
    outputs: [
      {
        internalType: "uint224",
        name: "_x",
        type: "uint224",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "price0CumulativeLast",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "price1Average",
    outputs: [
      {
        internalType: "uint224",
        name: "_x",
        type: "uint224",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "price1CumulativeLast",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "token0",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "token1",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "update",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60e06040523480156200001157600080fd5b50604051620011e9380380620011e9833981810160405260608110156200003757600080fd5b508051602080830151604090930151919291906000906200006790859085908590620009e36200037d821b17901c565b9050806001600160a01b03166080816001600160a01b031660601b81525050806001600160a01b0316630dfe16816040518163ffffffff1660e01b815260040160206040518083038186803b158015620000c057600080fd5b505afa158015620000d5573d6000803e3d6000fd5b505050506040513d6020811015620000ec57600080fd5b505160601b6001600160601b03191660a0526040805163d21220a760e01b815290516001600160a01b0383169163d21220a7916004808301926020929190829003018186803b1580156200013f57600080fd5b505afa15801562000154573d6000803e3d6000fd5b505050506040513d60208110156200016b57600080fd5b505160601b6001600160601b03191660c05260408051635909c0d560e01b815290516001600160a01b03831691635909c0d5916004808301926020929190829003018186803b158015620001be57600080fd5b505afa158015620001d3573d6000803e3d6000fd5b505050506040513d6020811015620001ea57600080fd5b505160005560408051635a3d549360e01b815290516001600160a01b03831691635a3d5493916004808301926020929190829003018186803b1580156200023057600080fd5b505afa15801562000245573d6000803e3d6000fd5b505050506040513d60208110156200025c57600080fd5b505160015560408051630240bc6b60e21b8152905160009182916001600160a01b03851691630902f1ac916004808301926060929190829003018186803b158015620002a757600080fd5b505afa158015620002bc573d6000803e3d6000fd5b505050506040513d6060811015620002d357600080fd5b50805160208201516040909201516002805463ffffffff191663ffffffff909216919091179055925090506001600160701b038216158015906200031f57506001600160701b03811615155b62000371576040805162461bcd60e51b815260206004820181905260248201527f4578616d706c654f7261636c6553696d706c653a204e4f5f5245534552564553604482015290519081900360640190fd5b5050505050506200053d565b600080806200039685856001600160e01b036200045a16565b604080516001600160601b0319606094851b811660208084019190915293851b81166034830152825160288184030181526048830184528051908501207fff0000000000000000000000000000000000000000000000000000000000000060688401529a90941b9093166069840152607d8301989098527f197a29e2e90d809812f533e62529432f8e2741455e49d25365a66b4be2a453dd609d808401919091528851808403909101815260bd909201909752805196019590952095945050505050565b600080826001600160a01b0316846001600160a01b03161415620004b05760405162461bcd60e51b8152600401808060200182810382526023815260200180620011c66023913960400191505060405180910390fd5b826001600160a01b0316846001600160a01b031610620004d2578284620004d5565b83835b90925090506001600160a01b03821662000536576040805162461bcd60e51b815260206004820152601c60248201527f5265717569656d4c6962726172793a205a45524f5f4144445245535300000000604482015290519081900360640190fd5b9250929050565b60805160601c60a05160601c60c05160601c610c496200057d60003980610220528061044452508061017e52806101a45250806102f25250610c496000f3fe608060405234801561001057600080fd5b506004361061009e5760003560e01c8063a2e6204511610066578063a2e6204514610139578063a6bb453914610143578063b4d1d7951461014b578063c5700a0214610153578063d21220a7146101745761009e565b80630dfe1681146100a35780633ddac953146100c75780635909c0d5146101055780635a3d54931461010d5780635e6aaf2c14610115575b600080fd5b6100ab61017c565b604080516001600160a01b039092168252519081900360200190f35b6100f3600480360360408110156100dd57600080fd5b506001600160a01b0381351690602001356101a0565b60408051918252519081900360200190f35b6100f36102cd565b6100f36102d3565b61011d6102d9565b604080516001600160e01b039092168252519081900360200190f35b6101416102e8565b005b61011d610420565b6100f361042f565b61015b610436565b6040805163ffffffff9092168252519081900360200190f35b6100ab610442565b7f000000000000000000000000000000000000000000000000000000000000000081565b60007f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316836001600160a01b0316141561021e5760408051602081019091526003546001600160e01b0316815261020e90610209908463ffffffff61046616565b6104fa565b6001600160901b031690506102c7565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316836001600160a01b03161461028e5760405162461bcd60e51b8152600401808060200182810382526022815260200180610ba86022913960400191505060405180910390fd5b60408051602081019091526004546001600160e01b031681526102bb90610209908463ffffffff61046616565b6001600160901b031690505b92915050565b60005481565b60015481565b6004546001600160e01b031681565b60008060006103167f0000000000000000000000000000000000000000000000000000000000000000610501565b600254929550909350915063ffffffff9081168203906201518090821610156103705760405162461bcd60e51b8152600401808060200182810382526027815260200180610bca6027913960400191505060405180910390fd5b60405180602001604052808263ffffffff1660005487038161038e57fe5b046001600160e01b039081169091529051600380546001600160e01b031916919092161790556040805160208101909152600154819063ffffffff8416908603816103d557fe5b046001600160e01b039081169091529051600480546001600160e01b03191691909216179055506000929092556001556002805463ffffffff191663ffffffff909216919091179055565b6003546001600160e01b031681565b6201518081565b60025463ffffffff1681565b7f000000000000000000000000000000000000000000000000000000000000000081565b61046e6109be565b600082158061049457505082516001600160e01b03168281029083828161049157fe5b04145b6104e5576040805162461bcd60e51b815260206004820152601960248201527f4669786564506f696e743a3a6d756c3a206f766572666c6f7700000000000000604482015290519081900360640190fd5b60408051602081019091529081529392505050565b5160701c90565b600080600061050e6106f0565b9050836001600160a01b0316635909c0d56040518163ffffffff1660e01b815260040160206040518083038186803b15801561054957600080fd5b505afa15801561055d573d6000803e3d6000fd5b505050506040513d602081101561057357600080fd5b505160408051635a3d549360e01b815290519194506001600160a01b03861691635a3d549391600480820192602092909190829003018186803b1580156105b957600080fd5b505afa1580156105cd573d6000803e3d6000fd5b505050506040513d60208110156105e357600080fd5b505160408051630240bc6b60e21b81529051919350600091829182916001600160a01b03891691630902f1ac916004808301926060929190829003018186803b15801561062f57600080fd5b505afa158015610643573d6000803e3d6000fd5b505050506040513d606081101561065957600080fd5b5080516020820151604090920151909450909250905063ffffffff808216908516146106e65780840363ffffffff811661069f6001600160701b038086169087166106fa565b600001516001600160e01b031602870196508063ffffffff166106d4856001600160701b0316856001600160701b03166106fa565b516001600160e01b0316029590950194505b5050509193909250565b63ffffffff421690565b6107026109d1565b600082116107415760405162461bcd60e51b8152600401808060200182810382526026815260200180610b826026913960400191505060405180910390fd5b8261075b57506040805160208101909152600081526102c7565b6001600160901b0383116107f757600082607085901b8161077857fe5b0490506001600160e01b038111156107d7576040805162461bcd60e51b815260206004820152601e60248201527f4669786564506f696e743a3a6672616374696f6e3a206f766572666c6f770000604482015290519081900360640190fd5b6040518060200160405280826001600160e01b03168152509150506102c7565b600061080884600160701b85610866565b90506001600160e01b038111156107d7576040805162461bcd60e51b815260206004820152601e60248201527f4669786564506f696e743a3a6672616374696f6e3a206f766572666c6f770000604482015290519081900360640190fd5b60008060006108758686610921565b915091506000848061088357fe5b868809905082811115610897576001820391505b9182900391816108b5578483816108aa57fe5b04935050505061091a565b848210610909576040805162461bcd60e51b815260206004820152601a60248201527f46756c6c4d6174683a2046554c4c4449565f4f564552464c4f57000000000000604482015290519081900360640190fd5b61091483838761094e565b93505050505b9392505050565b6000808060001984860990508385029250828103915082811015610946576001820391505b509250929050565b6000818103821680838161095e57fe5b04925080858161096a57fe5b04945080816000038161097957fe5b60028581038087028203028087028203028087028203028087028203028087028203028087028203029586029003909402930460010193909302939093010292915050565b6040518060200160405280600081525090565b60408051602081019091526000815290565b60008060006109f28585610aa3565b604080516bffffffffffffffffffffffff19606094851b811660208084019190915293851b81166034830152825160288184030181526048830184528051908501206001600160f81b031960688401529a90941b9093166069840152607d8301989098527f197a29e2e90d809812f533e62529432f8e2741455e49d25365a66b4be2a453dd609d808401919091528851808403909101815260bd909201909752805196019590952095945050505050565b600080826001600160a01b0316846001600160a01b03161415610af75760405162461bcd60e51b8152600401808060200182810382526023815260200180610bf16023913960400191505060405180910390fd5b826001600160a01b0316846001600160a01b031610610b17578284610b1a565b83835b90925090506001600160a01b038216610b7a576040805162461bcd60e51b815260206004820152601c60248201527f5265717569656d4c6962726172793a205a45524f5f4144445245535300000000604482015290519081900360640190fd5b925092905056fe4669786564506f696e743a3a6672616374696f6e3a206469766973696f6e206279207a65726f4578616d706c654f7261636c6553696d706c653a20494e56414c49445f544f4b454e4578616d706c654f7261636c6553696d706c653a20504552494f445f4e4f545f454c41505345445265717569656d4c6962726172793a204944454e544943414c5f414444524553534553a26469706673582212206b0f6de18d44d083434932b495216e6a1bc0a5f58f6582f525175f7c4c606ca764736f6c634300060600335265717569656d4c6962726172793a204944454e544943414c5f414444524553534553";

export class ExampleOracleSimple__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    factory: string,
    tokenA: string,
    tokenB: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ExampleOracleSimple> {
    return super.deploy(
      factory,
      tokenA,
      tokenB,
      overrides || {}
    ) as Promise<ExampleOracleSimple>;
  }
  getDeployTransaction(
    factory: string,
    tokenA: string,
    tokenB: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(factory, tokenA, tokenB, overrides || {});
  }
  attach(address: string): ExampleOracleSimple {
    return super.attach(address) as ExampleOracleSimple;
  }
  connect(signer: Signer): ExampleOracleSimple__factory {
    return super.connect(signer) as ExampleOracleSimple__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ExampleOracleSimpleInterface {
    return new utils.Interface(_abi) as ExampleOracleSimpleInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ExampleOracleSimple {
    return new Contract(address, _abi, signerOrProvider) as ExampleOracleSimple;
  }
}
