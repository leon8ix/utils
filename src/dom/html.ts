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

/** Selects element and highlights value of HTMLInputElement or HTMLTextAreaElement */
export function selct(selector: string) {
	const el = typeof document !== 'undefined' && document.querySelector(selector);
	if (!el) return;
	(el instanceof HTMLInputElement || el instanceof HTMLTextAreaElement) && el.select();
}

/** Clicks button, checkbox or similar clickable HTMLElement */
export function click(selector: string) {
	const el = typeof document !== 'undefined' && document.querySelector(selector);
	if (!el) return;
	el instanceof HTMLElement && el.click();
}

/** Cycles through radios of the same radio group using name attribute */
export function cycle(name: string) {
	if (typeof document === 'undefined') return;
	const els = Array.from(document.querySelectorAll<HTMLInputElement>(`input[type=radio][name="${name}"]`));
	if (!els.length) return;
	const currI = els.findIndex((el) => el.checked);
	const toI = currI === -1 ? 0 : (currI + 1) % els.length;
	els[toI]?.click();
}
