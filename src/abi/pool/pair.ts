export default [
  {
    inputs: [
      {
        internalType: 'enum CurveErrorCodes.Error',
        name: 'error',
        type: 'uint8',
      },
    ],
    name: 'BondingCurveError',
    type: 'error',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'address',
        name: 'oldRecipient',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'newRecipient',
        type: 'address',
      },
    ],
    name: 'AssetRecipientChange',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'uint128',
        name: 'oldDelta',
        type: 'uint128',
      },
      {
        indexed: false,
        internalType: 'uint128',
        name: 'newDelta',
        type: 'uint128',
      },
    ],
    name: 'DeltaUpdate',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'uint96',
        name: 'oldFee',
        type: 'uint96',
      },
      {
        indexed: false,
        internalType: 'uint96',
        name: 'newFee',
        type: 'uint96',
      },
    ],
    name: 'FeeUpdate',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'address',
        name: 'to',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256[]',
        name: 'tids',
        type: 'uint256[]',
      },
    ],
    name: 'NFTWithdrawal',
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
        internalType: 'uint128',
        name: 'oldSpotPrice',
        type: 'uint128',
      },
      {
        indexed: false,
        internalType: 'uint128',
        name: 'newSpotPrice',
        type: 'uint128',
      },
    ],
    name: 'SpotPriceUpdate',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'address',
        name: 'from',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'to',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'tp',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'price',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256[]',
        name: 'ids',
        type: 'uint256[]',
      },
    ],
    name: 'Swap',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'address',
        name: 'from',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
    ],
    name: 'TokenDeposit',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'address',
        name: 'to',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
    ],
    name: 'TokenWithdrawal',
    type: 'event',
  },
  {
    inputs: [],
    name: 'assetRecipient',
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
    inputs: [
      {
        internalType: 'address payable',
        name: 'target',
        type: 'address',
      },
      {
        internalType: 'bytes',
        name: 'data',
        type: 'bytes',
      },
    ],
    name: 'call',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address payable',
        name: 'newRecipient',
        type: 'address',
      },
    ],
    name: 'changeAssetRecipient',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint128',
        name: 'newDelta',
        type: 'uint128',
      },
    ],
    name: 'changeDelta',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint96',
        name: 'newFee',
        type: 'uint96',
      },
    ],
    name: 'changeFee',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint128',
        name: 'newSpotPrice',
        type: 'uint128',
      },
    ],
    name: 'changeSpotPrice',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'curve',
    outputs: [
      {
        internalType: 'contract ICurve',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'delta',
    outputs: [
      {
        internalType: 'uint128',
        name: '',
        type: 'uint128',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'factory',
    outputs: [
      {
        internalType: 'contract IPairFactoryLike',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'fee',
    outputs: [
      {
        internalType: 'uint96',
        name: '',
        type: 'uint96',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'getAllHeldIds',
    outputs: [
      {
        internalType: 'uint256[]',
        name: '',
        type: 'uint256[]',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'getAssetRecipient',
    outputs: [
      {
        internalType: 'address payable',
        name: '_assetRecipient',
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
        name: 'numNFTs',
        type: 'uint256',
      },
    ],
    name: 'getBuyNFTQuote',
    outputs: [
      {
        internalType: 'enum CurveErrorCodes.Error',
        name: 'error',
        type: 'uint8',
      },
      {
        internalType: 'uint256',
        name: 'newSpotPrice',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'newDelta',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'inputAmount',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'protocolFee',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'numNFTs',
        type: 'uint256',
      },
    ],
    name: 'getSellNFTQuote',
    outputs: [
      {
        internalType: 'enum CurveErrorCodes.Error',
        name: 'error',
        type: 'uint8',
      },
      {
        internalType: 'uint256',
        name: 'newSpotPrice',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'newDelta',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'outputAmount',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'protocolFee',
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
        name: '_factory',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_curve',
        type: 'address',
      },
      {
        internalType: 'contract IERC721',
        name: '_nft',
        type: 'address',
      },
      {
        internalType: 'enum Pair.PoolType',
        name: '_type',
        type: 'uint8',
      },
      {
        internalType: 'address',
        name: '_owner',
        type: 'address',
      },
      {
        internalType: 'address payable',
        name: '_assetRecipient',
        type: 'address',
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
    ],
    name: 'initialize',
    outputs: [],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bytes[]',
        name: 'calls',
        type: 'bytes[]',
      },
      {
        internalType: 'bool',
        name: 'revertOnFail',
        type: 'bool',
      },
    ],
    name: 'multicall',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'nft',
    outputs: [
      {
        internalType: 'contract IERC721',
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
        internalType: 'address',
        name: '',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
      {
        internalType: 'bytes',
        name: '',
        type: 'bytes',
      },
    ],
    name: 'onERC721Received',
    outputs: [
      {
        internalType: 'bytes4',
        name: '',
        type: 'bytes4',
      },
    ],
    stateMutability: 'nonpayable',
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
    name: 'pairVariant',
    outputs: [
      {
        internalType: 'enum IPairFactoryLike.PairVariant',
        name: '',
        type: 'uint8',
      },
    ],
    stateMutability: 'pure',
    type: 'function',
  },
  {
    inputs: [],
    name: 'poolType',
    outputs: [
      {
        internalType: 'enum Pair.PoolType',
        name: '',
        type: 'uint8',
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
    inputs: [],
    name: 'spotPrice',
    outputs: [
      {
        internalType: 'uint128',
        name: '',
        type: 'uint128',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256[]',
        name: 'nftIds',
        type: 'uint256[]',
      },
      {
        internalType: 'uint256',
        name: 'minExpectedTokenOutput',
        type: 'uint256',
      },
      {
        internalType: 'address payable',
        name: 'tokenRecipient',
        type: 'address',
      },
      {
        internalType: 'bool',
        name: 'isRouter',
        type: 'bool',
      },
      {
        internalType: 'address',
        name: 'routerCaller',
        type: 'address',
      },
    ],
    name: 'swapNFTsForToken',
    outputs: [
      {
        internalType: 'uint256',
        name: 'outputAmount',
        type: 'uint256',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'numNFTs',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'maxExpectedTokenInput',
        type: 'uint256',
      },
      {
        internalType: 'address',
        name: 'nftRecipient',
        type: 'address',
      },
      {
        internalType: 'bool',
        name: 'isRouter',
        type: 'bool',
      },
      {
        internalType: 'address',
        name: 'routerCaller',
        type: 'address',
      },
    ],
    name: 'swapTokenForAnyNFTs',
    outputs: [
      {
        internalType: 'uint256',
        name: 'inputAmount',
        type: 'uint256',
      },
    ],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256[]',
        name: 'nftIds',
        type: 'uint256[]',
      },
      {
        internalType: 'uint256',
        name: 'maxExpectedTokenInput',
        type: 'uint256',
      },
      {
        internalType: 'address',
        name: 'nftRecipient',
        type: 'address',
      },
      {
        internalType: 'bool',
        name: 'isRouter',
        type: 'bool',
      },
      {
        internalType: 'address',
        name: 'routerCaller',
        type: 'address',
      },
    ],
    name: 'swapTokenForSpecificNFTs',
    outputs: [
      {
        internalType: 'uint256',
        name: 'inputAmount',
        type: 'uint256',
      },
    ],
    stateMutability: 'payable',
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
    inputs: [],
    name: 'withdrawAllETH',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'contract ERC20',
        name: 'a',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
    ],
    name: 'withdrawERC20',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'contract IERC721',
        name: 'a',
        type: 'address',
      },
      {
        internalType: 'uint256[]',
        name: 'nftIds',
        type: 'uint256[]',
      },
    ],
    name: 'withdrawERC721',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
    ],
    name: 'withdrawETH',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    stateMutability: 'payable',
    type: 'receive',
  },
];
