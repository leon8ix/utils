/// <reference lib="dom" />

import { InputEvent } from './types';

// > HTML

export function doSelect(e: InputEvent) {
	e.currentTarget?.select?.();
}

export function newVal(e: InputEvent): number {
	return Number(e.currentTarget?.value || 0);
}
