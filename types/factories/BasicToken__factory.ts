/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { BasicToken, BasicTokenInterface } from "../BasicToken";

const _abi = [
  {
    constant: true,
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        name: "_owner",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "_to",
        type: "address",
      },
      {
        name: "_value",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        name: "",
        type: "bool",
      },
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50610246806100206000396000f3006080604052600436106100565763ffffffff7c010000000000000000000000000000000000000000000000000000000060003504166318160ddd811461005b57806370a0823114610082578063a9059cbb146100a3575b600080fd5b34801561006757600080fd5b506100706100db565b60408051918252519081900360200190f35b34801561008e57600080fd5b50610070600160a060020a03600435166100e1565b3480156100af57600080fd5b506100c7600160a060020a03600435166024356100fc565b604080519115158252519081900360200190f35b60015490565b600160a060020a031660009081526020819052604090205490565b6000600160a060020a038316151561011357600080fd5b600160a060020a03331660009081526020819052604090205482111561013857600080fd5b600160a060020a033316600090815260208190526040902054610161908363ffffffff6101f516565b600160a060020a033381166000908152602081905260408082209390935590851681522054610196908363ffffffff61020716565b600160a060020a03808516600081815260208181526040918290209490945580518681529051919333909316927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef92918290030190a350600192915050565b60008282111561020157fe5b50900390565b8181018281101561021457fe5b929150505600a165627a7a7230582000352fda82a74bd85fe7af713332888cb29e0bf55acb34ec5a59e6a9ebfd57cc0029";

export class BasicToken__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<BasicToken> {
    return super.deploy(overrides || {}) as Promise<BasicToken>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): BasicToken {
    return super.attach(address) as BasicToken;
  }
  connect(signer: Signer): BasicToken__factory {
    return super.connect(signer) as BasicToken__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): BasicTokenInterface {
    return new utils.Interface(_abi) as BasicTokenInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): BasicToken {
    return new Contract(address, _abi, signerOrProvider) as BasicToken;
  }
}
