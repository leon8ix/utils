import { clamp } from './math';

export function tBool<T extends any>(v: any, def: T): boolean | T {
	return typeof v === 'boolean' ? v : def;
}

export function tString<T extends any>(v: any, def: T, allowEmpty = false): string | T {
	return typeof v === 'string' ? (allowEmpty ? v : v || def) : def;
}

export function tEnum<T extends any>(v: any, def: T, allowed: T[]): T {
	return allowed.includes(v) ? v : def;
}

/** `NaN` will also be replaced by def */
export function tFloat<T extends any>(v: any, def: T, { min = -Infinity, max = Infinity } = {}): number | T {
	if (typeof v !== 'number' || isNaN(v)) return def;
	return clamp(min, v, max);
}

/** `NaN` will also be replaced by def */
export function tInt<T extends any>(...props: Parameters<typeof tFloat<T>>): number | T {
	const v = tFloat(...props);
	return typeof v === 'number' ? Math.round(v) : v;
}
