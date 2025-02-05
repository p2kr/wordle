<script lang="ts">
	import { getWordleState } from '$lib/states/WordleState.svelte';
	import { getBgColor } from '$lib/utils/Util';
	import { text } from '@sveltejs/kit';

	let props: {
		text: string;
	} = $props();

	const wordleState = getWordleState();
</script>

<td
	class="h-10 border font-semibold m-4 p-4"
	style="background-color: {getBgColor(
		props.text,
		wordleState.greenLetters,
		wordleState.yellowLetters,
		wordleState.blackLetters
	)};"
>
	{props.text}
</td>
