// > DATA-TYPES

export function nullish(value: any): value is undefined | null {
	return value === undefined || value === null;
}

/** Checks if is `string` that contains actual content and `not just spaces` */
export function texty(value: any): value is string {
	return typeof value === 'string' && value.trim().length >= 1;
}

/**
 * NUMBOOL (numeric boolean)
 * used in multiplication for optional parameters, shorter than conditionals with 0
 */
export function nb(condition: any): 1 | 0 {
	return Boolean(condition) ? 1 : 0;
}
