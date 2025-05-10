/** Array with specified length, e.g. `FixedArray<string, 4>` equals `[string,string,string,string]` */
export type FixedArray<T, L extends number, R extends unknown[] = []> = R['length'] extends L
	? R
	: FixedArray<T, L, [T, ...R]>;

/**
 * Extract the union of all property names from each member of a union type `T` \
 * e.g. `KeysOfUnion<{a: number} | {b: string, c: boolean}>` equals `"a" | "b" | "c"`
 */
export type KeysOfUnion<T> = T extends T ? keyof T : never;

/** Shortcut for `null | undefined` */
export type Nullish = null | undefined;
