import { rnd } from './math';

// > FORMATTING

export function unit(value: number, unit = 'mm', prec = 1) {
	return rnd(value, prec) + ' ' + unit;
}

export function unitBy(value1: number, value2: number, unit = 'mm', prec = 1) {
	return rnd(value1, prec) + ' × ' + rnd(value2, prec) + ' ' + unit;
}

export function unitUnequalBy(value1: number, value2: number, unit0 = 'mm', prec = 1) {
	return value1 === value2 ? unit(value1, unit0, prec) : unitBy(value1, value2, unit0, prec);
}

/**
 * Adds zeros in the beginning to normalize the number length \
 * Default length = `2` \
 * If the number is bigger than length allows, the number is left unchanged and will exceed the length
 * - preNullify(8, 2) => '08'
 * - preNullify(80, 2) => '80'
 * - preNullify(800, 2) => '800'
 */
export function preNullify(number: number, length = 2): string {
	const strNum = String(isNaN(number) ? 0 : number);
	if (strNum.length > length) return strNum;
	return ('0'.repeat(length) + strNum).slice(length * -1);
}
