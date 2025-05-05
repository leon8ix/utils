// > MATH

/** Math.round() with customizable precision, default=`1` */
export function rnd(x: number, prec: number = 1): number {
	return Math.round(x * Math.pow(10, prec)) / Math.pow(10, prec);
}

/** Math.min() and Math.max() combined for CSS-like clamp() */
export function clamp(min: number, val: number, max: number): number {
	return Math.min(Math.max(min, val), max);
}

export function isEven(i: number): boolean {
	return i % 2 === 0;
}

export function isOdd(i: number): boolean {
	return i % 2 === 1;
}

export function evenCeil(x: number): number {
	return Math.ceil(x / 2) * 2;
}

/** Rounds to three decimal places */
export function corr(num: number) {
	return rnd(num, 3);
}

/** Rounds to three decimal places, while ensuring a min value of 1 */
export function corr_min1(num: number) {
	return rnd(Math.max(1, num), 3);
}

/** Rounds to three decimal places, while replacing 0 with `not0` (default=`1`) */
export function corr_not0(num: number, not0 = 1) {
	return rnd(num || not0, 3);
}
