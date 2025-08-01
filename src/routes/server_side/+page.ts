// +page.ts
import type { PageLoad } from './$types';
import { api } from '$lib/api';

export const load: PageLoad = async () => {
	const { data, error } = await api.GET('/api/doctors/');
	if (error) throw error;
	return { doctors: data };
};
