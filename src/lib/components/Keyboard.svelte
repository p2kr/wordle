<script lang="ts">
	import { getWordleState } from '$lib/states/WordleState.svelte';
	import { getBgColor } from '$lib/utils/Util';

	let {
		answerWord,
		blackLetters,
		currentCursor,
		greenLetters,
		yellowLetters,
		currentFill,
		maxRows
	} = getWordleState();

	$effect(() => {
		console.log('Current fill: ', $state.snapshot(currentFill));
		console.log('Current cursor: ', $state.snapshot(currentCursor));
		console.log('Max rows: ', $state.snapshot(maxRows));
	});

	function onBtnClick(letter: string) {
		// Set next letter.
		if (currentCursor.col < answerWord.length) {
			currentFill[currentCursor.row][currentCursor.col++] = letter;
		}
	}

	function onSubmit() {
		// Reset cursor
		if (currentCursor.row < maxRows) {
			currentCursor.row++;
			currentCursor.col = 0;
		}
	}

	function removeLastLetter() {
		if (currentCursor.col > 0) {
			currentFill[currentCursor.row][--currentCursor.col] = '';
		}
	}
</script>

<div class="m-1 flex flex-col items-center">
	<div class="flex">
		{#each ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'] as letter}
			<button
				class="keyboard-btn"
				style="background-color: {getBgColor(letter, greenLetters, yellowLetters, blackLetters)};"
				onclick={() => onBtnClick(letter)}>{letter}</button
			>
		{/each}
	</div>
	<div class="flex">
		{#each ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'] as letter}
			<button
				class="keyboard-btn"
				style="background-color: {getBgColor(letter, greenLetters, yellowLetters, blackLetters)};"
				onclick={() => onBtnClick(letter)}>{letter}</button
			>
		{/each}
	</div>
	<div class="flex">
		<button class="keyboard-btn !w-16" onclick={onSubmit}>{'ENTER'}</button>
		{#each ['Z', 'X', 'C', 'V', 'B', 'N', 'M'] as letter}
			<button
				class="keyboard-btn"
				style="background-color: {getBgColor(letter, greenLetters, yellowLetters, blackLetters)};"
				onclick={() => onBtnClick(letter)}>{letter}</button
			>
		{/each}
		<button aria-label="Remove last letter" class="keyboard-btn !w-16" onclick={removeLastLetter}
			><i class="bi bi-backspace"></i></button
		>
	</div>
</div>

<style>
	.keyboard-btn {
		@apply m-1 w-10 rounded border bg-['#f3f4f6'] p-1 font-bold;

		&:disabled {
			opacity: 50%;
		}
	}
</style>
