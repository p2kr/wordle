<script lang="ts">
	import Cell from '$lib/components/Cell.svelte';
	import Keyboard from '$lib/components/Keyboard.svelte';
	import { getWordleState } from '$lib/states/WordleState.svelte';
	import { getBgColor } from '$lib/utils/Util';

	const wordleState = getWordleState();
</script>

<div class="m-1 flex flex-col items-center">
	<table>
		<tbody>
			{#each [0, 1, 2, 3, 4, 5, 6] as row}
				<tr>
					{#each [0, 1, 2, 3, 4] as col}
						<Cell text={wordleState.currentFill?.[row]?.[col]} />
					{/each}
				</tr>
			{/each}
		</tbody>
	</table>
	<Keyboard />
</div>
