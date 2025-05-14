// > ARRAYS

export function makeArray<T>(length: number, mappingFunction: (i: number) => T): T[] {
	return Array.from({ length }, (_, i) => mappingFunction(i));
}

/** Throws on invalid index */
export function moveArrayItem<T extends any[]>(array: T, iFrom: number, iTo: number): T {
	if (iFrom < 0 || iFrom >= array.length || iTo < 0 || iTo > array.length) {
		throw new Error('Invalid index');
	}
	const [element] = array.splice(iFrom, 1);
	array.splice(iTo, 0, element);
	return array;
}
