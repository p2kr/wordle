import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async () => {
	return {
		word: 'FEVER',
		date: new Date()
	};
};
