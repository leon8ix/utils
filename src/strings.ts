// > STRINGS

/** Camel case (`camelCase`) to kebab case (`kebab-case`) */
export function camelToDash(string: string): string {
	return string.replaceAll(/[A-Z]/g, (str) => '-' + str.toLowerCase());
}

/** Camel case (`camelCase`) to kebab case (`kebab-case`),
 * preserving all possible camel case html atts (`viewBox`|`preserveAspectRatio`) */
export function camelToDashAttSafe(string: string): string {
	const keepCase = string === 'viewBox' || string === 'preserveAspectRatio';
	return keepCase ? string : camelToDash(string);
}

/** Kebab case (`kebab-case`) to camel case (`camelCase`) */
export function dashToCamel(string: string): string {
	return string.replaceAll(/-[a-z]/gi, (str) => str.replace('-', '').toUpperCase());
}

/** Limit sting to char length, if exceeded, an ellipsis (`…`) is appended */
export function limitString(str: string, maxLength: number): string {
	return str.length <= maxLength ? str : str.slice(0, maxLength - 3) + '…';
}

/** Very basic id generator, outputs ids like `X1261981986`, uses Math.random() */
export function genId(): string {
	return 'X' + String(Math.random()).slice(-10);
}

/** Checks whether string is all capital letters
 * - lowercaseness is determined by whether toLocaleUpperCase() changes something */
export function isUppercase(string: string): boolean {
	return string === string.toLocaleUpperCase();
}

/** Ratio of uppercase chars in string.
 *  - lowercaseness is determined by whether toLocaleUpperCase() changes something
 *  - `aaa = 0`, `aaBB = 0.5`, `ABC1 = 1` */
export function uppercaseFactor(text: string) {
	let uc = 0;
	let c = '';
	for (c of text) isUppercase(c) && uc++;
	return uc / text.length;
}

/**
 * Capitalizes the first letter of each word and lower-cases the rest \
 * e.g. `this STRING` becomes `This String`
 */
export function toBasicTitleCase(string: string): string {
	return string
		.split(' ')
		.map((s) => (s[0] || '').toLocaleUpperCase() + s.slice(1).toLocaleLowerCase())
		.join(' ');
}
