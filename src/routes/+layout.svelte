<script lang="ts">
	import { setWordleState } from '$lib/states/WordleState.svelte';
	import '../app.css';
	let { children, data } = $props();

	setWordleState(data.word);
</script>

<svelte:head>
	<title>{'Wordle'}</title>
</svelte:head>

{@render children()}
