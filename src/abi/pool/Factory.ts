export default [
  {
    inputs: [
      {
        internalType: 'address',
        name: '_pairEnumerableETH',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_pairMissingEnumerableETH',
        type: 'address',
      },
      {
        internalType: 'address payable',
        name: '_protocolFeeRecipient',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: '_protocolFeeMultiplier',
        type: 'uint256',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'constructor',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'address',
        name: 'bondingCurve',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'bool',
        name: 'isAllowed',
        type: 'bool',
      },
    ],
    name: 'BondingCurveStatusUpdate',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'address',
        name: 'target',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'bool',
        name: 'isAllowed',
        type: 'bool',
      },
    ],
    name: 'CallTargetStatusUpdate',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'address',
        name: 'poolAddress',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256[]',
        name: 'ids',
        type: 'uint256[]',
      },
    ],
    name: 'NFTDeposit',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'address',
        name: 'poolAddress',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'owner',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'nft',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'curve',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'assetRecipient',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'enum Pair.PoolType',
        name: 'poolType',
        type: 'uint8',
      },
      {
        indexed: false,
        internalType: 'uint128',
        name: 'delta',
        type: 'uint128',
      },
      {
        indexed: false,
        internalType: 'uint96',
        name: 'fee',
        type: 'uint96',
      },
      {
        indexed: false,
        internalType: 'uint128',
        name: 'spotPrice',
        type: 'uint128',
      },
    ],
    name: 'NewPair',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'previousOwner',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'newOwner',
        type: 'address',
      },
    ],
    name: 'OwnershipTransferred',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'uint256',
        name: 'newMultiplier',
        type: 'uint256',
      },
    ],
    name: 'ProtocolFeeMultiplierUpdate',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'address',
        name: 'recipientAddress',
        type: 'address',
      },
    ],
    name: 'ProtocolFeeRecipientUpdate',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'address',
        name: 'router',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'bool',
        name: 'isAllowed',
        type: 'bool',
      },
    ],
    name: 'RouterStatusUpdate',
    type: 'event',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    name: 'bondingCurveAllowed',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    name: 'callAllowed',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '_protocolFeeMultiplier',
        type: 'uint256',
      },
    ],
    name: 'changeProtocolFeeMultiplier',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address payable',
        name: '_protocolFeeRecipient',
        type: 'address',
      },
    ],
    name: 'changeProtocolFeeRecipient',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'contract IERC721',
        name: '_nft',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_bondingCurve',
        type: 'address',
      },
      {
        internalType: 'address payable',
        name: '_assetRecipient',
        type: 'address',
      },
      {
        internalType: 'enum Pair.PoolType',
        name: '_poolType',
        type: 'uint8',
      },
      {
        internalType: 'uint128',
        name: '_delta',
        type: 'uint128',
      },
      {
        internalType: 'uint96',
        name: '_fee',
        type: 'uint96',
      },
      {
        internalType: 'uint128',
        name: '_spotPrice',
        type: 'uint128',
      },
      {
        internalType: 'uint256[]',
        name: '_initialNFTIDs',
        type: 'uint256[]',
      },
    ],
    name: 'createPairETH',
    outputs: [
      {
        internalType: 'address',
        name: 'pair',
        type: 'address',
      },
    ],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'contract IERC721',
        name: '_nft',
        type: 'address',
      },
      {
        internalType: 'uint256[]',
        name: 'ids',
        type: 'uint256[]',
      },
      {
        internalType: 'address',
        name: 'recipient',
        type: 'address',
      },
    ],
    name: 'depositNFTs',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'getPairLength',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    name: 'isPair',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'owner',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'pairEnumerableETH',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'pairMissingEnumerableETH',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    name: 'pairs',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'protocolFeeMultiplier',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'protocolFeeRecipient',
    outputs: [
      {
        internalType: 'address payable',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'renounceOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    name: 'routerStatus',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'bondingCurve',
        type: 'address',
      },
      {
        internalType: 'bool',
        name: 'isAllowed',
        type: 'bool',
      },
    ],
    name: 'setBondingCurveAllowed',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address payable',
        name: 'target',
        type: 'address',
      },
      {
        internalType: 'bool',
        name: 'isAllowed',
        type: 'bool',
      },
    ],
    name: 'setCallAllowed',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_pair',
        type: 'address',
      },
    ],
    name: 'setPairEnumerableETH',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_pair',
        type: 'address',
      },
    ],
    name: 'setPairMissingEnumerableETH',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_router',
        type: 'address',
      },
      {
        internalType: 'bool',
        name: 'isAllowed',
        type: 'bool',
      },
    ],
    name: 'setRouterAllowed',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'newOwner',
        type: 'address',
      },
    ],
    name: 'transferOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'contract ERC20',
        name: 'token',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
    ],
    name: 'withdrawERC20ProtocolFees',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'withdrawETHProtocolFees',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    stateMutability: 'payable',
    type: 'receive',
  },
];
