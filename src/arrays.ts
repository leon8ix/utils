// > ARRAYS

export function makeArray<T>(length: number, mappingFunction: (i: number) => T): T[] {
	return Array.from({ length }, (_, i) => mappingFunction(i));
}
