/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { FixedPoint, FixedPointInterface } from "../FixedPoint";

const _abi = [
  {
    inputs: [],
    name: "Q112",
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
    name: "RESOLUTION",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x60b9610025600b82828239805160001a60731461001857fe5b30600052607381538281f3fe7300000000000000000000000000000000000000003014608060405260043610603d5760003560e01c80633bf7a83e146042578063552f888a14605a575b600080fd5b60486076565b60408051918252519081900360200190f35b6060607e565b6040805160ff9092168252519081900360200190f35b600160701b81565b60708156fea264697066735822122068737aa812ccde085ab7044d372a0cc8055a0c14df67a4912f4d2a1f8ef8fc2f64736f6c63430006060033";

export class FixedPoint__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<FixedPoint> {
    return super.deploy(overrides || {}) as Promise<FixedPoint>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): FixedPoint {
    return super.attach(address) as FixedPoint;
  }
  connect(signer: Signer): FixedPoint__factory {
    return super.connect(signer) as FixedPoint__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): FixedPointInterface {
    return new utils.Interface(_abi) as FixedPointInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): FixedPoint {
    return new Contract(address, _abi, signerOrProvider) as FixedPoint;
  }
}
