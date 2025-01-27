// Import files
import { Chain } from './types';
export type { Chain } from './types';

const chainsData = import.meta.glob('./chains/*.json', {
	eager: true
});

// Format objects
const chainsObj = Object.fromEntries(
	Object.entries(chainsData).map(([chainPath, chainData]) => {
		return [chainPath.split('/').pop()?.replace('.json', ''), chainData];
	})
);

// Export objects
export const chains: Chain[] = JSON.parse(JSON.stringify(chainsObj));

// Utils
export * from './utils';
