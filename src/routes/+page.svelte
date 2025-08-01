<script lang="ts">
	import { createQuery } from '@tanstack/svelte-query';
	import { api } from '$lib/api';

	const doctorsQuery = createQuery({
		queryKey: ['doctors'],
		queryFn: async () => {
			const res = await api.GET('/api/doctors/');
			if (res.error) throw new Error(res.error.detail?.[0]?.msg ?? 'Bilinməyən xəta');
			return res.data;
		}
	});
</script>

<h1>This page is client side</h1>

{#if $doctorsQuery.isLoading}
	<p>Yüklənir...</p>
{:else if $doctorsQuery.isError}
	<p>Xəta: {$doctorsQuery.error.message}</p>
{:else if $doctorsQuery.data}
	<ul>
		{#each $doctorsQuery.data as doctor}
			<li>{doctor.user.name}</li>
		{/each}
	</ul>
{/if}
