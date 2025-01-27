# Chainlist library

All evm chains info in a single place!

## Install

### Using npm

`npm i @amichain/chainlist`

#### Import (CommonJS):

```javascript
const chainlist = require('@amichain/chainlist');
```

#### Import (Typescript):

```typescript
import chainlist from '@amichain/chainlist';
```

### Vanilla JS (not recommended)

```html
<script src="https://cdn.staticdelivr.com/npm/@amichain/chainlist@0.1.0/dist/chainlist.umd.cjs"></script>
<script>
	// You can access to `chainlist` here
	console.log(chainlist.getChain(1)); // Example
</script>
```

In this example, we are using [staticdelivr CDN service](https://staticdelivr.com) (jsdelivr.net doesn't handle .cjs mimeType properly).

## Usage

### Get all chains

```javascript
const allChains = chainlist.chains();
```

### Get a single chain

(The chain ID can be a number or a string)

```javascript
const ethereum = chainlist.getChain(1);
```

### Get icon URL for the given chain ID

(The chain ID can be a number or a string)

```javascript
const ethereumIconUrl = chainlist.getIconUrl(1);
```

This will return a generated URL from [`jsdelivr.net`](https://jsdelivr.net) that make it able to use it regardless of raw GitHub cors policy.

# Contribute

Please follow these instructions to add or update a chain:

## Add your logo

1. Prepare your logo:  
   Prefer the SVG format and optimize the file with [svgomg.net](https://svgomg.net).
2. Fork the [@Amichain/chain-icons](https://github.com/Amichain/chain-icons/) repository and add your logo to the folder corresponding to your file extension.
3. Create a [pull request](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request).

## Add chain data

1. Prepare a JSON file containing your chain data:

    ```json
    {
    	"chainId": 1,
    	"name": "Your chain name",
    	"rpc": ["https://rpc.yourchain.com"],
    	"ws": ["wss://optional-websocket-rpc.yourchain.com"],
    	"explorers": [
    		{
    			"name": "YourChain Explorer Name",
    			"url": "https://explorer.yourchain.com"
    		}
    	],
    	"nativeCurrency": {
    		"name": "YourCoin",
    		"symbol": "SYMBOL",
    		"decimals": 18
    	},
    	"website": "https://yourchain.com",
    	"icon": "<your-chain-id>.<your-logo-extension>",
    	"testnet": true,
    	"faucets": ["http://optional-faucet-url.yourchain.com"]
    }
    ```

    For testnet chains:

    - `testnet: true` is required.
    - `faucets` is required, but can be an empty array if there is no faucet.

    For mainNet chains:

    - `testnet` can be set to `false` but is not required.
    - `faucets` should not be added.

    For any chain:

    - `ws` is required, but can be empty if there is no WebSocket RPC.
    - `icon` should have the same extension as the logo added to [@Amichain/chain-icons](https://github.com/Amichain/chain-icons/).  
       Example: `1.svg` for ethereum mainNet.
    - All other fields are required.

2. Fork the [@Amichain/chainlist](https://github.com/Amichain/chainlist/) repository and add your json file to `/src/chains/<your-chain-id>.json`.
3. Create a [pull request](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request).
