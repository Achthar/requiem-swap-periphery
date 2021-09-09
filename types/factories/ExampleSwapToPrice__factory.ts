/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  ExampleSwapToPrice,
  ExampleSwapToPriceInterface,
} from "../ExampleSwapToPrice";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "factory_",
        type: "address",
      },
      {
        internalType: "contract IApeRouter01",
        name: "router_",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "truePriceTokenA",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "truePriceTokenB",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "reserveA",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "reserveB",
        type: "uint256",
      },
    ],
    name: "computeProfitMaximizingTrade",
    outputs: [
      {
        internalType: "bool",
        name: "aToB",
        type: "bool",
      },
      {
        internalType: "uint256",
        name: "amountIn",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [],
    name: "factory",
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
    name: "router",
    outputs: [
      {
        internalType: "contract IApeRouter01",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
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
      {
        internalType: "uint256",
        name: "truePriceTokenA",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "truePriceTokenB",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "maxSpendTokenA",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "maxSpendTokenB",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "deadline",
        type: "uint256",
      },
    ],
    name: "swapToPrice",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60c060405234801561001057600080fd5b50604051610e54380380610e548339818101604052604081101561003357600080fd5b5080516020909101516001600160601b0319606092831b811660a052911b1660805260805160601c60a05160601c610dc761008d600039806101e652806104ca525080610276528061031952806104ee5250610dc76000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c8063bef90fd314610051578063c45a0155146100a8578063f887ea40146100cc578063fa653154146100d4575b600080fd5b6100a6600480360361010081101561006857600080fd5b506001600160a01b038135811691602081013582169160408201359160608101359160808201359160a08101359160c0820135169060e0013561011e565b005b6100b06104c8565b604080516001600160a01b039092168252519081900360200190f35b6100b06104ec565b610103600480360360808110156100ea57600080fd5b5080359060208101359060408101359060600135610510565b60408051921515835260208301919091528051918290030190f35b851580159061012c57508415155b61017d576040805162461bcd60e51b815260206004820152601e60248201527f4578616d706c6553776170546f50726963653a205a45524f5f50524943450000604482015290519081900360640190fd5b8315158061018a57508215155b6101db576040805162461bcd60e51b815260206004820152601e60248201527f4578616d706c6553776170546f50726963653a205a45524f5f5350454e440000604482015290519081900360640190fd5b60008060008061020c7f00000000000000000000000000000000000000000000000000000000000000008d8d6105f5565b9150915061021c8a8a8484610510565b9094509250600091508390506102325785610234565b865b905080821115610242578091505b60008361024f578a610251565b8b5b9050600084610260578c610262565b8b5b9050610270823330876106cf565b61029b827f00000000000000000000000000000000000000000000000000000000000000008661082c565b604080516002808252606080830184529260208301908036833701905050905082816000815181106102c957fe5b60200260200101906001600160a01b031690816001600160a01b03168152505081816001815181106102f757fe5b60200260200101906001600160a01b031690816001600160a01b0316815250507f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03166338ed1739866000848c8c6040518663ffffffff1660e01b81526004018086815260200185815260200180602001846001600160a01b03166001600160a01b03168152602001838152602001828103825285818151815260200191508051906020019060200280838360005b838110156103c55781810151838201526020016103ad565b505050509050019650505050505050600060405180830381600087803b1580156103ee57600080fd5b505af1158015610402573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052602081101561042b57600080fd5b810190808051604051939291908464010000000082111561044b57600080fd5b90830190602082018581111561046057600080fd5b825186602082028301116401000000008211171561047d57600080fd5b82525081516020918201928201910280838360005b838110156104aa578181015183820152602001610492565b50505050905001604052505050505050505050505050505050505050565b7f000000000000000000000000000000000000000000000000000000000000000081565b7f000000000000000000000000000000000000000000000000000000000000000081565b6000808583610525868863ffffffff61098016565b8161052c57fe5b041091506000610542858563ffffffff61098016565b905060006105986105686103e58661055a578a61055c565b895b9063ffffffff61098016565b61058b6103e861055c8861057c578b61057e565b8c5b879063ffffffff61098016565b8161059257fe5b046109e9565b905060006103e5856105bb576105b6876103e863ffffffff61098016565b6105cd565b6105cd886103e863ffffffff61098016565b816105d457fe5b0490506105e7828263ffffffff610b3116565b935050505094509492505050565b60008060006106048585610b81565b509050610612868686610c75565b50600080610621888888610c75565b6001600160a01b0316630902f1ac6040518163ffffffff1660e01b815260040160606040518083038186803b15801561065957600080fd5b505afa15801561066d573d6000803e3d6000fd5b505050506040513d606081101561068357600080fd5b5080516020909101516dffffffffffffffffffffffffffff91821693501690506001600160a01b03878116908416146106bd5780826106c0565b81815b90999098509650505050505050565b604080516001600160a01b0385811660248301528481166044830152606480830185905283518084039091018152608490920183526020820180516001600160e01b03166323b872dd60e01b17815292518251600094606094938a169392918291908083835b602083106107545780518252601f199092019160209182019101610735565b6001836020036101000a0380198251168184511680821785525050505050509050019150506000604051808303816000865af19150503d80600081146107b6576040519150601f19603f3d011682016040523d82523d6000602084013e6107bb565b606091505b50915091508180156107e95750805115806107e957508080602001905160208110156107e657600080fd5b50515b6108245760405162461bcd60e51b8152600401808060200182810382526031815260200180610d366031913960400191505060405180910390fd5b505050505050565b604080516001600160a01b038481166024830152604480830185905283518084039091018152606490920183526020820180516001600160e01b031663095ea7b360e01b178152925182516000946060949389169392918291908083835b602083106108a95780518252601f19909201916020918201910161088a565b6001836020036101000a0380198251168184511680821785525050505050509050019150506000604051808303816000865af19150503d806000811461090b576040519150601f19603f3d011682016040523d82523d6000602084013e610910565b606091505b509150915081801561093e57508051158061093e575080806020019051602081101561093b57600080fd5b50515b6109795760405162461bcd60e51b815260040180806020018281038252602b815260200180610d67602b913960400191505060405180910390fd5b5050505050565b600081158061099b5750508082028282828161099857fe5b04145b6109e3576040805162461bcd60e51b815260206004820152601460248201527364732d6d6174682d6d756c2d6f766572666c6f7760601b604482015290519081900360640190fd5b92915050565b6000816109f857506000610b2c565b816001600160801b8210610a115760809190911c9060401b5b680100000000000000008210610a2c5760409190911c9060201b5b6401000000008210610a435760209190911c9060101b5b620100008210610a585760109190911c9060081b5b6101008210610a6c5760089190911c9060041b5b60108210610a7f5760049190911c9060021b5b60088210610a8b5760011b5b6001818581610a9657fe5b048201901c90506001818581610aa857fe5b048201901c90506001818581610aba57fe5b048201901c90506001818581610acc57fe5b048201901c90506001818581610ade57fe5b048201901c90506001818581610af057fe5b048201901c90506001818581610b0257fe5b048201901c90506000818581610b1457fe5b049050808210610b245780610b26565b815b93505050505b919050565b808203828111156109e3576040805162461bcd60e51b815260206004820152601560248201527464732d6d6174682d7375622d756e646572666c6f7760581b604482015290519081900360640190fd5b600080826001600160a01b0316846001600160a01b03161415610beb576040805162461bcd60e51b815260206004820152601f60248201527f4170654c6962726172793a204944454e544943414c5f41444452455353455300604482015290519081900360640190fd5b826001600160a01b0316846001600160a01b031610610c0b578284610c0e565b83835b90925090506001600160a01b038216610c6e576040805162461bcd60e51b815260206004820152601860248201527f4170654c6962726172793a205a45524f5f414444524553530000000000000000604482015290519081900360640190fd5b9250929050565b6000806000610c848585610b81565b604080516bffffffffffffffffffffffff19606094851b811660208084019190915293851b81166034830152825160288184030181526048830184528051908501206001600160f81b031960688401529a90941b9093166069840152607d8301989098527ff4ccce374816856d11f00e4069e7cada164065686fbef53c6167a63ec2fd8c5b609d808401919091528851808403909101815260bd90920190975280519601959095209594505050505056fe5472616e7366657248656c7065723a3a7472616e7366657246726f6d3a207472616e7366657246726f6d206661696c65645472616e7366657248656c7065723a3a73616665417070726f76653a20617070726f7665206661696c6564a2646970667358221220ec05f37c4c8d663e1ed8c7ef37930ff332c1328c3e5e7f55ad38cc1deb316b9964736f6c63430006060033";

export class ExampleSwapToPrice__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    factory_: string,
    router_: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ExampleSwapToPrice> {
    return super.deploy(
      factory_,
      router_,
      overrides || {}
    ) as Promise<ExampleSwapToPrice>;
  }
  getDeployTransaction(
    factory_: string,
    router_: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(factory_, router_, overrides || {});
  }
  attach(address: string): ExampleSwapToPrice {
    return super.attach(address) as ExampleSwapToPrice;
  }
  connect(signer: Signer): ExampleSwapToPrice__factory {
    return super.connect(signer) as ExampleSwapToPrice__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ExampleSwapToPriceInterface {
    return new utils.Interface(_abi) as ExampleSwapToPriceInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ExampleSwapToPrice {
    return new Contract(address, _abi, signerOrProvider) as ExampleSwapToPrice;
  }
}
