<script lang="ts">
	export let data;
</script>

<h1>This page is Server Side</h1>

<ul>
	{#each data.doctors as doctor}
		<li>{doctor.user.name}</li>
	{/each}
</ul>
