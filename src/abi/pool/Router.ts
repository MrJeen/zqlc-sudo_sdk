export default [
  {
    inputs: [
      {
        internalType: 'contract IPairFactoryLike',
        name: '_factory',
        type: 'address',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'constructor',
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
    inputs: [
      {
        internalType: 'contract IERC721',
        name: 'nft',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'from',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'to',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'id',
        type: 'uint256',
      },
    ],
    name: 'pairTransferNFTFrom',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        components: [
          {
            components: [
              {
                internalType: 'contract Pair',
                name: 'pair',
                type: 'address',
              },
              {
                internalType: 'uint256',
                name: 'numItems',
                type: 'uint256',
              },
            ],
            internalType: 'struct Router.PairSwapAny',
            name: 'swapInfo',
            type: 'tuple',
          },
          {
            internalType: 'uint256',
            name: 'maxCost',
            type: 'uint256',
          },
        ],
        internalType: 'struct Router.RobustPairSwapAny[]',
        name: 'swapList',
        type: 'tuple[]',
      },
      {
        internalType: 'address payable',
        name: 'ethRecipient',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'nftRecipient',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'deadline',
        type: 'uint256',
      },
    ],
    name: 'robustSwapETHForAnyNFTs',
    outputs: [
      {
        internalType: 'uint256',
        name: 'remainingValue',
        type: 'uint256',
      },
    ],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [
      {
        components: [
          {
            components: [
              {
                internalType: 'contract Pair',
                name: 'pair',
                type: 'address',
              },
              {
                internalType: 'uint256[]',
                name: 'nftIds',
                type: 'uint256[]',
              },
            ],
            internalType: 'struct Router.PairSwapSpecific',
            name: 'swapInfo',
            type: 'tuple',
          },
          {
            internalType: 'uint256',
            name: 'maxCost',
            type: 'uint256',
          },
        ],
        internalType: 'struct Router.RobustPairSwapSpecific[]',
        name: 'swapList',
        type: 'tuple[]',
      },
      {
        internalType: 'address payable',
        name: 'ethRecipient',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'nftRecipient',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'deadline',
        type: 'uint256',
      },
    ],
    name: 'robustSwapETHForSpecificNFTs',
    outputs: [
      {
        internalType: 'uint256',
        name: 'remainingValue',
        type: 'uint256',
      },
    ],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [
      {
        components: [
          {
            components: [
              {
                components: [
                  {
                    internalType: 'contract Pair',
                    name: 'pair',
                    type: 'address',
                  },
                  {
                    internalType: 'uint256[]',
                    name: 'nftIds',
                    type: 'uint256[]',
                  },
                ],
                internalType: 'struct Router.PairSwapSpecific',
                name: 'swapInfo',
                type: 'tuple',
              },
              {
                internalType: 'uint256',
                name: 'maxCost',
                type: 'uint256',
              },
            ],
            internalType: 'struct Router.RobustPairSwapSpecific[]',
            name: 'tokenToNFTTrades',
            type: 'tuple[]',
          },
          {
            components: [
              {
                components: [
                  {
                    internalType: 'contract Pair',
                    name: 'pair',
                    type: 'address',
                  },
                  {
                    internalType: 'uint256[]',
                    name: 'nftIds',
                    type: 'uint256[]',
                  },
                ],
                internalType: 'struct Router.PairSwapSpecific',
                name: 'swapInfo',
                type: 'tuple',
              },
              {
                internalType: 'uint256',
                name: 'minOutput',
                type: 'uint256',
              },
            ],
            internalType: 'struct Router.RobustPairSwapSpecificForToken[]',
            name: 'nftToTokenTrades',
            type: 'tuple[]',
          },
          {
            internalType: 'uint256',
            name: 'inputAmount',
            type: 'uint256',
          },
          {
            internalType: 'address payable',
            name: 'tokenRecipient',
            type: 'address',
          },
          {
            internalType: 'address',
            name: 'nftRecipient',
            type: 'address',
          },
        ],
        internalType: 'struct Router.RobustPairNFTsFoTokenAndTokenforNFTsTrade',
        name: 'params',
        type: 'tuple',
      },
    ],
    name: 'robustSwapETHForSpecificNFTsAndNFTsToToken',
    outputs: [
      {
        internalType: 'uint256',
        name: 'remainingValue',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'outputAmount',
        type: 'uint256',
      },
    ],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [
      {
        components: [
          {
            components: [
              {
                internalType: 'contract Pair',
                name: 'pair',
                type: 'address',
              },
              {
                internalType: 'uint256[]',
                name: 'nftIds',
                type: 'uint256[]',
              },
            ],
            internalType: 'struct Router.PairSwapSpecific',
            name: 'swapInfo',
            type: 'tuple',
          },
          {
            internalType: 'uint256',
            name: 'minOutput',
            type: 'uint256',
          },
        ],
        internalType: 'struct Router.RobustPairSwapSpecificForToken[]',
        name: 'swapList',
        type: 'tuple[]',
      },
      {
        internalType: 'address payable',
        name: 'tokenRecipient',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'deadline',
        type: 'uint256',
      },
    ],
    name: 'robustSwapNFTsForToken',
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
        internalType: 'address',
        name: '_factory',
        type: 'address',
      },
    ],
    name: 'setFactory',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: 'contract Pair',
            name: 'pair',
            type: 'address',
          },
          {
            internalType: 'uint256',
            name: 'numItems',
            type: 'uint256',
          },
        ],
        internalType: 'struct Router.PairSwapAny[]',
        name: 'swapList',
        type: 'tuple[]',
      },
      {
        internalType: 'address payable',
        name: 'ethRecipient',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'nftRecipient',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'deadline',
        type: 'uint256',
      },
    ],
    name: 'swapETHForAnyNFTs',
    outputs: [
      {
        internalType: 'uint256',
        name: 'remainingValue',
        type: 'uint256',
      },
    ],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: 'contract Pair',
            name: 'pair',
            type: 'address',
          },
          {
            internalType: 'uint256[]',
            name: 'nftIds',
            type: 'uint256[]',
          },
        ],
        internalType: 'struct Router.PairSwapSpecific[]',
        name: 'swapList',
        type: 'tuple[]',
      },
      {
        internalType: 'address payable',
        name: 'ethRecipient',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'nftRecipient',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'deadline',
        type: 'uint256',
      },
    ],
    name: 'swapETHForSpecificNFTs',
    outputs: [
      {
        internalType: 'uint256',
        name: 'remainingValue',
        type: 'uint256',
      },
    ],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [
      {
        components: [
          {
            components: [
              {
                internalType: 'contract Pair',
                name: 'pair',
                type: 'address',
              },
              {
                internalType: 'uint256[]',
                name: 'nftIds',
                type: 'uint256[]',
              },
            ],
            internalType: 'struct Router.PairSwapSpecific[]',
            name: 'nftToTokenTrades',
            type: 'tuple[]',
          },
          {
            components: [
              {
                internalType: 'contract Pair',
                name: 'pair',
                type: 'address',
              },
              {
                internalType: 'uint256',
                name: 'numItems',
                type: 'uint256',
              },
            ],
            internalType: 'struct Router.PairSwapAny[]',
            name: 'tokenToNFTTrades',
            type: 'tuple[]',
          },
        ],
        internalType: 'struct Router.NFTsForAnyNFTsTrade',
        name: 'trade',
        type: 'tuple',
      },
      {
        internalType: 'uint256',
        name: 'minOutput',
        type: 'uint256',
      },
      {
        internalType: 'address payable',
        name: 'ethRecipient',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'nftRecipient',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'deadline',
        type: 'uint256',
      },
    ],
    name: 'swapNFTsForAnyNFTsThroughETH',
    outputs: [
      {
        internalType: 'uint256',
        name: 'outputAmount',
        type: 'uint256',
      },
    ],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [
      {
        components: [
          {
            components: [
              {
                internalType: 'contract Pair',
                name: 'pair',
                type: 'address',
              },
              {
                internalType: 'uint256[]',
                name: 'nftIds',
                type: 'uint256[]',
              },
            ],
            internalType: 'struct Router.PairSwapSpecific[]',
            name: 'nftToTokenTrades',
            type: 'tuple[]',
          },
          {
            components: [
              {
                internalType: 'contract Pair',
                name: 'pair',
                type: 'address',
              },
              {
                internalType: 'uint256[]',
                name: 'nftIds',
                type: 'uint256[]',
              },
            ],
            internalType: 'struct Router.PairSwapSpecific[]',
            name: 'tokenToNFTTrades',
            type: 'tuple[]',
          },
        ],
        internalType: 'struct Router.NFTsForSpecificNFTsTrade',
        name: 'trade',
        type: 'tuple',
      },
      {
        internalType: 'uint256',
        name: 'minOutput',
        type: 'uint256',
      },
      {
        internalType: 'address payable',
        name: 'ethRecipient',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'nftRecipient',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'deadline',
        type: 'uint256',
      },
    ],
    name: 'swapNFTsForSpecificNFTsThroughETH',
    outputs: [
      {
        internalType: 'uint256',
        name: 'outputAmount',
        type: 'uint256',
      },
    ],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: 'contract Pair',
            name: 'pair',
            type: 'address',
          },
          {
            internalType: 'uint256[]',
            name: 'nftIds',
            type: 'uint256[]',
          },
        ],
        internalType: 'struct Router.PairSwapSpecific[]',
        name: 'swapList',
        type: 'tuple[]',
      },
      {
        internalType: 'uint256',
        name: 'minOutput',
        type: 'uint256',
      },
      {
        internalType: 'address',
        name: 'tokenRecipient',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'deadline',
        type: 'uint256',
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
    stateMutability: 'payable',
    type: 'receive',
  },
];
