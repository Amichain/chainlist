export type Chain = {
	testnet?: boolean;
	name: string;
	rpc: string[];
	ws: string[];
	nativeCurrency: {
		name: string;
		symbol: string;
		decimals: number;
	};
	website: string;
	chainId: number;
	explorers: {
		name: string;
		url: string;
	}[];
	faucets?: string[];
	deprecated?: boolean;
	icon: string | null;
} & ({ testnet: true; faucets: string[] } | { testnet?: false | undefined; faucets?: string[] });

export const chains: Chain[];
export const getChain: (chainId: number | string) => Chain;
export const getIconUrl: (chainId: number | string) => string;
