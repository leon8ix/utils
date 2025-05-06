/** Uses JSON as intermediate step, so only basic data types are supported */
export function deepClone<T extends Record<string, any>>(obj: T): T {
	return JSON.parse(JSON.stringify(obj));
}

/** Overwrites the target object for all keys present in the source object, leaves the rest untouched */
export function maskObject<T extends Record<any, any>>(targetObj: T, sourceObj: T) {
	for (const key in sourceObj) targetObj[key] = sourceObj[key];
}

/** Replaces all everything in the target object with the source object's contents, keeps the ref, only shallow */
export function replaceObject<T extends Record<any, any>>(targetObj: T, sourceObj: T) {
	const keys = new Set<keyof T>([...Object.keys(targetObj), ...Object.keys(sourceObj)]);
	for (const key of keys) key in sourceObj ? (targetObj[key] = sourceObj[key]) : delete targetObj[key];
}

export function getKeyOf<T extends object>(
	obj: T,
	key: keyof T | string | null | undefined,
	def: keyof T | string | null | undefined = null
): keyof T {
	if (key !== null && key !== undefined && key in obj) return key as keyof T;
	if (def !== null && def !== undefined && def in obj) return def as keyof T;
	return (Object.keys(obj)[0] || '') as keyof T;
}

export function getValueOf<T extends object>(
	obj: T,
	key: keyof T | string | null | undefined,
	def: keyof T | string | null | undefined = null
): T[keyof T] {
	return obj[getKeyOf(obj, key, def)];
}
