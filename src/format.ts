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
