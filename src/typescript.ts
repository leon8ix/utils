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

/** Extracts the keys of `O` for which a value of type `T` is assignable to the property type */
export type KeysWhereAllowed<O extends Record<string, any>, T> = {
	[K in keyof O]-?: [T] extends [Exclude<O[K], undefined>] ? K : never;
}[keyof O];

/** Makes all keys required and removes `undefined` as an allowed value */
export type CompleteObject<O extends Record<string, any>> = { [K in keyof O]-?: Exclude<O[K], undefined> };

/** Formats complex and composited object types into simple object structure */
export type Prettify<T> = {
	[K in keyof T]: T[K];
} & {};

/** Allows for passing any string, but keeps auto-complete working */
export type StringSuggest<T extends string> = T | (string & {});
