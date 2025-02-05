<script lang="ts">
	import { getWordleState } from '$lib/states/WordleState.svelte';
	import { getBgColor } from '$lib/utils/Util';
	import { text } from '@sveltejs/kit';

	let props: {
		text: string;
	} = $props();

	const wordleState = getWordleState();
</script>

<button
	tabindex="-1"
	class="m-0.5 h-12 w-12 cursor-default border text-lg font-bold"
	style="background-color: {getBgColor(
		props.text,
		wordleState.greenLetters,
		wordleState.yellowLetters,
		wordleState.blackLetters
	)};"
>
	{props.text}
</button>
