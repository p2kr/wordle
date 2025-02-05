export function getBgColor(
	letter: string,
	greenLetters?: string[],
	yellowLetters?: string[],
	blackLetters?: string[]
) {
	if (greenLetters?.includes(letter)) {
		return 'lightgreen';
	} else if (yellowLetters?.includes(letter)) {
		return 'gold';
	} else if (blackLetters?.includes(letter)) {
		return 'darkgrey';
	} else {
		return '#f3f4f6';
	}
}
