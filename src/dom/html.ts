/// <reference lib="dom" />

import { HTMLEvent, InputEvent } from './types';

// > HTML

export function doSelect(e: InputEvent) {
	e.currentTarget?.select?.();
}

export function newVal(e: InputEvent): number {
	return Number(e.currentTarget?.value || 0);
}

/**
 * Intended for oncontextmenu event, will prevent all right clicks, \
 * except for targets `<input>` and `<textarea>`, where the user might want to copy/paste/... \
 * but can theoretically be used for any event
 */
export function preventAllButInputs(e: HTMLEvent<HTMLElement>) {
	const n = (e.target as HTMLElement | null)?.nodeName;
	if (n !== 'INPUT' && n !== 'TEXTAREA') e.preventDefault();
}
