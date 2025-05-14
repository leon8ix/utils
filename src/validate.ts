import { clamp } from './math';

export function tBool(d: any, def: boolean) {
	return typeof d === 'boolean' ? d : def;
}

export function tString(d: any, def: string, allowEmpty = false): string {
	return typeof d === 'string' ? (allowEmpty ? d : d || def) : def;
}

export function tEnum<T extends any>(d: any, def: T, allowed: T[]): T {
	return allowed.includes(d) ? d : def;
}

/** `NaN` will also be replaced by def */
export function tFloat(d: any, def: number, { min = -Infinity, max = Infinity } = {}) {
	return clamp(min, typeof d === 'number' && !isNaN(d) ? d : def, max);
}

/** `NaN` will also be replaced by def */
export function tInt(...props: Parameters<typeof tFloat>) {
	return Math.round(tFloat(...props));
}
