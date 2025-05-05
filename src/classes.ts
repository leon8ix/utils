/**
 * OBRAY: Object-Array,
 * immutable data structure that provides both indexed access
 * and array methods like forEach while keeping the order intact
 */
export class Obray<T extends { key: string }> {
	readonly arr: readonly T[];
	readonly index: Map<string, T>;
	readonly length: number;

	at: T[]['at'];
	forEach: T[]['forEach'];
	map: T[]['map'];
	find: T[]['find'];
	filter: T[]['filter'];
	includes: T[]['includes'];

	constructor(arr: KeyedObject<T>[]) {
		this.arr = arr;
		this.index = new Map();
		this.length = arr.length;

		arr.forEach((entry) => this.index.set(entry.key, entry));

		this.at = arr.at.bind(this.arr);
		this.forEach = arr.forEach.bind(this.arr);
		this.map = arr.map.bind(this.arr);
		this.find = arr.find.bind(this.arr);
		this.filter = arr.filter.bind(this.arr);
		this.includes = arr.includes.bind(this.arr);
	}

	get<K extends string>(key: K) {
		// (A) dynamic string → T | undefined
		// (B) literal in T['key'] → exact entry
		// (C) literal not in T['key'] → undefined
		return this.index.get(key) as [string] extends [K]
			? T | undefined
			: K extends T['key']
			? Extract<T, { key: K }>
			: undefined;
	}

	[Symbol.iterator]() {
		let index = 0;
		const arr = this.arr;
		return {
			next: () => (index < arr.length ? { done: false, value: arr[index++] } : { done: true, value: undefined }),
		};
	}
}

type KeyedObject<T extends Record<string, any>> = { key: string } & T;
