/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { USDC, USDCInterface } from "../USDC";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "delegator",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "fromDelegate",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "toDelegate",
        type: "address",
      },
    ],
    name: "DelegateChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "delegate",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "previousBalance",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "newBalance",
        type: "uint256",
      },
    ],
    name: "DelegateVotesChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [],
    name: "DELEGATION_TYPEHASH",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "DOMAIN_TYPEHASH",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
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
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
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
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint32",
        name: "",
        type: "uint32",
      },
    ],
    name: "checkpoints",
    outputs: [
      {
        internalType: "uint32",
        name: "fromBlock",
        type: "uint32",
      },
      {
        internalType: "uint256",
        name: "votes",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
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
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "delegatee",
        type: "address",
      },
    ],
    name: "delegate",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "delegatee",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "nonce",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "expiry",
        type: "uint256",
      },
      {
        internalType: "uint8",
        name: "v",
        type: "uint8",
      },
      {
        internalType: "bytes32",
        name: "r",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "s",
        type: "bytes32",
      },
    ],
    name: "delegateBySig",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "delegator",
        type: "address",
      },
    ],
    name: "delegates",
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
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "getCurrentVotes",
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
    name: "getOwner",
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
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "blockNumber",
        type: "uint256",
      },
    ],
    name: "getPriorVotes",
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
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "mint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "mint",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "mint_natural",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "nonces",
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
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "numCheckpoints",
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
    inputs: [],
    name: "owner",
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
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
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
    inputs: [
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b50604051806040016040528060088152602001672aa9a21021b7b4b760c11b815250604051806040016040528060048152602001635553444360e01b815250600062000062620000ed60201b60201c565b600080546001600160a01b0319166001600160a01b0383169081178255604051929350917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908290a3508151620000c1906004906020850190620000f1565b508051620000d7906005906020840190620000f1565b50506006805460ff19166012179055506200018d565b3390565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106200013457805160ff191683800117855562000164565b8280016001018555821562000164579182015b828111156200016457825182559160200191906001019062000147565b506200017292915062000176565b5090565b5b8082111562000172576000815560010162000177565b611c65806200019d6000396000f3fe608060405234801561001057600080fd5b50600436106101c45760003560e01c8063782d6fe1116100f9578063a9059cbb11610097578063dd62ed3e11610071578063dd62ed3e146105a3578063e7a324dc146105d1578063f1127ed8146105d9578063f2fde38b1461062b576101c4565b8063a9059cbb1461050a578063b4b5ea5714610536578063c3cda5201461055c576101c4565b80638da5cb5b116100d35780638da5cb5b146104b157806395d89b41146104b9578063a0712d68146104c1578063a457c2d7146104de576101c4565b8063782d6fe1146104575780637ecebe0014610483578063893d20e8146104a9576101c4565b806339509351116101665780635c19a95c116101405780635c19a95c146103c45780636fcfff45146103ea57806370a0823114610429578063715018a61461044f576101c4565b8063395093511461032a57806340c10f1914610356578063587cde1e14610382576101c4565b806318160ddd116101a257806318160ddd146102b457806320606b70146102ce57806323b872dd146102d6578063313ce5671461030c576101c4565b8063039fd87a146101c957806306fdde03146101f7578063095ea7b314610274575b600080fd5b6101f5600480360360408110156101df57600080fd5b506001600160a01b038135169060200135610651565b005b6101ff6106f0565b6040805160208082528351818301528351919283929083019185019080838360005b83811015610239578181015183820152602001610221565b50505050905090810190601f1680156102665780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6102a06004803603604081101561028a57600080fd5b506001600160a01b038135169060200135610786565b604080519115158252519081900360200190f35b6102bc6107a4565b60408051918252519081900360200190f35b6102bc6107aa565b6102a0600480360360608110156102ec57600080fd5b506001600160a01b038135811691602081013590911690604001356107ce565b610314610855565b6040805160ff9092168252519081900360200190f35b6102a06004803603604081101561034057600080fd5b506001600160a01b03813516906020013561085e565b6101f56004803603604081101561036c57600080fd5b506001600160a01b0381351690602001356108ac565b6103a86004803603602081101561039857600080fd5b50356001600160a01b0316610933565b604080516001600160a01b039092168252519081900360200190f35b6101f5600480360360208110156103da57600080fd5b50356001600160a01b0316610951565b6104106004803603602081101561040057600080fd5b50356001600160a01b031661095e565b6040805163ffffffff9092168252519081900360200190f35b6102bc6004803603602081101561043f57600080fd5b50356001600160a01b0316610976565b6101f5610991565b6102bc6004803603604081101561046d57600080fd5b506001600160a01b038135169060200135610a33565b6102bc6004803603602081101561049957600080fd5b50356001600160a01b0316610c3b565b6103a8610c4d565b6103a8610c5c565b6101ff610c6b565b6102a0600480360360208110156104d757600080fd5b5035610ccc565b6102a0600480360360408110156104f457600080fd5b506001600160a01b038135169060200135610d3f565b6102a06004803603604081101561052057600080fd5b506001600160a01b038135169060200135610da7565b6102bc6004803603602081101561054c57600080fd5b50356001600160a01b0316610dbb565b6101f5600480360360c081101561057257600080fd5b506001600160a01b038135169060208101359060408101359060ff6060820135169060808101359060a00135610e1f565b6102bc600480360360408110156105b957600080fd5b506001600160a01b0381358116916020013516611092565b6102bc6110bd565b61060b600480360360408110156105ef57600080fd5b5080356001600160a01b0316906020013563ffffffff166110e1565b6040805163ffffffff909316835260208301919091528051918290030190f35b6101f56004803603602081101561064157600080fd5b50356001600160a01b031661110e565b61065961116f565b6000546001600160a01b039081169116146106a9576040805162461bcd60e51b81526020600482018190526024820152600080516020611b03833981519152604482015290519081900360640190fd5b6106bd8282670de0b6b3a764000002611173565b6001600160a01b038083166000908152600760205260408120546106ec9216670de0b6b3a76400008402611259565b5050565b60048054604080516020601f600260001961010060018816150201909516949094049384018190048102820181019092528281526060939092909183018282801561077c5780601f106107515761010080835404028352916020019161077c565b820191906000526020600020905b81548152906001019060200180831161075f57829003601f168201915b5050505050905090565b600061079a61079361116f565b848461139b565b5060015b92915050565b60035490565b7f8cad95687ba82c2ce50e74f7b754645e5117c3a5bec8151c0726d5857980a86681565b60006107db848484611487565b61084b846107e761116f565b61084685604051806060016040528060288152602001611ab5602891396001600160a01b038a1660009081526002602052604081209061082561116f565b6001600160a01b0316815260208101919091526040016000205491906115d9565b61139b565b5060019392505050565b60065460ff1690565b600061079a61086b61116f565b84610846856002600061087c61116f565b6001600160a01b03908116825260208083019390935260409182016000908120918c168152925290205490611670565b6108b461116f565b6000546001600160a01b03908116911614610904576040805162461bcd60e51b81526020600482018190526024820152600080516020611b03833981519152604482015290519081900360640190fd5b61090e8282611173565b6001600160a01b038083166000908152600760205260408120546106ec921683611259565b6001600160a01b039081166000908152600760205260409020541690565b61095b33826116ca565b50565b60096020526000908152604090205463ffffffff1681565b6001600160a01b031660009081526001602052604090205490565b61099961116f565b6000546001600160a01b039081169116146109e9576040805162461bcd60e51b81526020600482018190526024820152600080516020611b03833981519152604482015290519081900360640190fd5b600080546040516001600160a01b03909116907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908390a3600080546001600160a01b0319169055565b6000438210610a735760405162461bcd60e51b8152600401808060200182810382526027815260200180611b576027913960400191505060405180910390fd5b6001600160a01b03831660009081526009602052604090205463ffffffff1680610aa157600091505061079e565b6001600160a01b038416600090815260086020908152604080832063ffffffff600019860181168552925290912054168310610b10576001600160a01b03841660009081526008602090815260408083206000199490940163ffffffff1683529290522060010154905061079e565b6001600160a01b038416600090815260086020908152604080832083805290915290205463ffffffff16831015610b4b57600091505061079e565b600060001982015b8163ffffffff168163ffffffff161115610c0457600282820363ffffffff16048103610b7d611a08565b506001600160a01b038716600090815260086020908152604080832063ffffffff808616855290835292819020815180830190925280549093168082526001909301549181019190915290871415610bdf5760200151945061079e9350505050565b805163ffffffff16871115610bf657819350610bfd565b6001820392505b5050610b53565b506001600160a01b038516600090815260086020908152604080832063ffffffff9094168352929052206001015491505092915050565b600a6020526000908152604090205481565b6000610c57610c5c565b905090565b6000546001600160a01b031690565b60058054604080516020601f600260001961010060018816150201909516949094049384018190048102820181019092528281526060939092909183018282801561077c5780601f106107515761010080835404028352916020019161077c565b6000610cd661116f565b6000546001600160a01b03908116911614610d26576040805162461bcd60e51b81526020600482018190526024820152600080516020611b03833981519152604482015290519081900360640190fd5b610d37610d3161116f565b83611173565b506001919050565b600061079a610d4c61116f565b8461084685604051806060016040528060258152602001611be96025913960026000610d7661116f565b6001600160a01b03908116825260208083019390935260409182016000908120918d168152925290205491906115d9565b600061079a610db461116f565b8484611487565b6001600160a01b03811660009081526009602052604081205463ffffffff1680610de6576000610e18565b6001600160a01b038316600090815260086020908152604080832063ffffffff60001986011684529091529020600101545b9392505050565b60007f8cad95687ba82c2ce50e74f7b754645e5117c3a5bec8151c0726d5857980a866610e4a6106f0565b80519060200120610e5961175f565b60408051602080820195909552808201939093526060830191909152306080808401919091528151808403909101815260a0830182528051908401207fe48329057bfd03d55e49b547132e39cffd9c1820ad7b9d4c5307691425d15adf60c08401526001600160a01b038b1660e084015261010083018a90526101208084018a9052825180850390910181526101408401835280519085012061190160f01b6101608501526101628401829052610182808501829052835180860390910181526101a285018085528151918701919091206000918290526101c2860180865281905260ff8b166101e287015261020286018a90526102228601899052935192965090949293909260019261024280840193601f198301929081900390910190855afa158015610f8c573d6000803e3d6000fd5b5050604051601f1901519150506001600160a01b038116610fde5760405162461bcd60e51b8152600401808060200182810382526026815260200180611add6026913960400191505060405180910390fd5b6001600160a01b0381166000908152600a60205260409020805460018101909155891461103c5760405162461bcd60e51b8152600401808060200182810382526022815260200180611ba46022913960400191505060405180910390fd5b8742111561107b5760405162461bcd60e51b8152600401808060200182810382526026815260200180611a8f6026913960400191505060405180910390fd5b611085818b6116ca565b505050505b505050505050565b6001600160a01b03918216600090815260026020908152604080832093909416825291909152205490565b7fe48329057bfd03d55e49b547132e39cffd9c1820ad7b9d4c5307691425d15adf81565b60086020908152600092835260408084209091529082529020805460019091015463ffffffff9091169082565b61111661116f565b6000546001600160a01b03908116911614611166576040805162461bcd60e51b81526020600482018190526024820152600080516020611b03833981519152604482015290519081900360640190fd5b61095b81611763565b3390565b6001600160a01b0382166111ce576040805162461bcd60e51b815260206004820152601f60248201527f42455032303a206d696e7420746f20746865207a65726f206164647265737300604482015290519081900360640190fd5b6003546111db9082611670565b6003556001600160a01b0382166000908152600160205260409020546112019082611670565b6001600160a01b03831660008181526001602090815260408083209490945583518581529351929391927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9281900390910190a35050565b816001600160a01b0316836001600160a01b03161415801561127b5750600081115b15611396576001600160a01b0383161561130d576001600160a01b03831660009081526009602052604081205463ffffffff1690816112bb5760006112ed565b6001600160a01b038516600090815260086020908152604080832063ffffffff60001987011684529091529020600101545b905060006112fb8285611803565b905061130986848484611845565b5050505b6001600160a01b03821615611396576001600160a01b03821660009081526009602052604081205463ffffffff16908161134857600061137a565b6001600160a01b038416600090815260086020908152604080832063ffffffff60001987011684529091529020600101545b905060006113888285611670565b905061108a85848484611845565b505050565b6001600160a01b0383166113e05760405162461bcd60e51b8152600401808060200182810382526024815260200180611a456024913960400191505060405180910390fd5b6001600160a01b0382166114255760405162461bcd60e51b8152600401808060200182810382526022815260200180611c0e6022913960400191505060405180910390fd5b6001600160a01b03808416600081815260026020908152604080832094871680845294825291829020859055815185815291517f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9259281900390910190a3505050565b6001600160a01b0383166114cc5760405162461bcd60e51b8152600401808060200182810382526025815260200180611a206025913960400191505060405180910390fd5b6001600160a01b0382166115115760405162461bcd60e51b8152600401808060200182810382526023815260200180611bc66023913960400191505060405180910390fd5b61154e81604051806060016040528060268152602001611b7e602691396001600160a01b03861660009081526001602052604090205491906115d9565b6001600160a01b03808516600090815260016020526040808220939093559084168152205461157d9082611670565b6001600160a01b0380841660008181526001602090815260409182902094909455805185815290519193928716927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef92918290030190a3505050565b600081848411156116685760405162461bcd60e51b81526004018080602001828103825283818151815260200191508051906020019080838360005b8381101561162d578181015183820152602001611615565b50505050905090810190601f16801561165a5780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b505050900390565b600082820183811015610e18576040805162461bcd60e51b815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604482015290519081900360640190fd5b6001600160a01b03808316600090815260076020526040812054909116906116f184610976565b6001600160a01b0385811660008181526007602052604080822080546001600160a01b031916898616908117909155905194955093928616927f3134e8a2e6d97e929a7e54011ea5485d7d196dd5f0ba4d4ef95803e8e3fc257f9190a4611759828483611259565b50505050565b4690565b6001600160a01b0381166117a85760405162461bcd60e51b8152600401808060200182810382526026815260200180611a696026913960400191505060405180910390fd5b600080546040516001600160a01b03808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a3600080546001600160a01b0319166001600160a01b0392909216919091179055565b6000610e1883836040518060400160405280601e81526020017f536166654d6174683a207375627472616374696f6e206f766572666c6f7700008152506115d9565b600061186943604051806060016040528060348152602001611b23603491396119aa565b905060008463ffffffff161180156118b257506001600160a01b038516600090815260086020908152604080832063ffffffff6000198901811685529252909120548282169116145b156118ef576001600160a01b038516600090815260086020908152604080832063ffffffff60001989011684529091529020600101829055611960565b60408051808201825263ffffffff808416825260208083018681526001600160a01b038a166000818152600884528681208b8616825284528681209551865490861663ffffffff19918216178755925160019687015590815260099092529390208054928801909116919092161790555b604080518481526020810184905281516001600160a01b038816927fdec2bacdd2f05b59de34da9b523dff8be42e5e38e818c82fdb0bae774387a724928290030190a25050505050565b6000816401000000008410611a005760405162461bcd60e51b815260206004820181815283516024840152835190928392604490910191908501908083836000831561162d578181015183820152602001611615565b509192915050565b60408051808201909152600080825260208201529056fe42455032303a207472616e736665722066726f6d20746865207a65726f206164647265737342455032303a20617070726f76652066726f6d20746865207a65726f20616464726573734f776e61626c653a206e6577206f776e657220697320746865207a65726f206164647265737343414b453a3a64656c656761746542795369673a207369676e6174757265206578706972656442455032303a207472616e7366657220616d6f756e74206578636565647320616c6c6f77616e636543414b453a3a64656c656761746542795369673a20696e76616c6964207369676e61747572654f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657243414b453a3a5f7772697465436865636b706f696e743a20626c6f636b206e756d6265722065786365656473203332206269747343414b453a3a6765745072696f72566f7465733a206e6f74207965742064657465726d696e656442455032303a207472616e7366657220616d6f756e7420657863656564732062616c616e636543414b453a3a64656c656761746542795369673a20696e76616c6964206e6f6e636542455032303a207472616e7366657220746f20746865207a65726f206164647265737342455032303a2064656372656173656420616c6c6f77616e63652062656c6f77207a65726f42455032303a20617070726f766520746f20746865207a65726f2061646472657373a26469706673582212209a68fe00b961610b86f8ff549d0a6031aef4f5f523ae47cc848241212be2f76d64736f6c634300060c0033";

export class USDC__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<USDC> {
    return super.deploy(overrides || {}) as Promise<USDC>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): USDC {
    return super.attach(address) as USDC;
  }
  connect(signer: Signer): USDC__factory {
    return super.connect(signer) as USDC__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): USDCInterface {
    return new utils.Interface(_abi) as USDCInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): USDC {
    return new Contract(address, _abi, signerOrProvider) as USDC;
  }
}
