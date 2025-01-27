import type { Chain } from './types';

const allChains = import.meta.glob('./chains/*.json', {
	eager: true
});

export const getIconUrl = (chainId: number | string) => {
	const chain = getChain(chainId);
	if (chain && chain.icon) {
		return `https://cdn.jsdelivr.net/gh/Amichain/chain-icons/${chain.icon.split('.')[1]}/${chain.icon}`;
	}
	return null;
};

export const getChain = (chainId: number | string): Chain | null => {
	if (typeof chainId === 'number') {
		chainId = chainId.toString();
	}
	for (const [chainPath, chain] of Object.entries(allChains) as [string, Chain][]) {
		if (chainPath.endsWith(`/${chainId}.json`)) {
			return chain;
		}
	}
	return null;
};
