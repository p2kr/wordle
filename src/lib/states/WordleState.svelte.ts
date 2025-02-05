import { getContext, setContext } from 'svelte';

type WordleStateType = {
	answerWord: string;
	greenLetters: string[];
	yellowLetters: string[];
	blackLetters: string[];
	currentCursor: {
		row: number;
		col: number;
	};
	currentFill: string[][];
	maxRows: number;
};

class WordleState implements WordleStateType {
	answerWord = $state<string>('ADIEU');
	greenLetters = $state<string[]>([]);
	yellowLetters = $state<string[]>([]);
	blackLetters = $state<string[]>([]);
	currentCursor = $state({ row: 0, col: 0 });
	currentFill = $state<string[][]>([]);
	maxRows = $state(6);

	constructor(ansWord: string, maxRows?: number) {
		this.answerWord = ansWord.trim().toUpperCase();
		if (maxRows) {
			this.maxRows = maxRows;
		}
		this.currentFill = Array.from({ length: this.maxRows }, () =>
			Array.from({ length: this.answerWord.length }, () => '')
		);
	}
}

const WORDLE_STATE_CTX = 'WORDLE_STATE_CTX';

export function setWordleState(answerWord: string, maxRows?: number) {
	const wordleState = new WordleState(answerWord, maxRows);
	setContext(WORDLE_STATE_CTX, wordleState);
}

export function getWordleState() {
	return getContext<WordleStateType>(WORDLE_STATE_CTX);
}
