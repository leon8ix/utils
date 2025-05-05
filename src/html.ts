// > HTML

// export type HTMLEvent<T extends HTMLElement> = Event & {
// 	currentTarget: EventTarget & T;
// };

// export type InputEvent = Event & {
// 	currentTarget: EventTarget & HTMLInputElement;
// };

// export function doSelect(e: InputEvent) {
// 	e.currentTarget?.select?.();
// }

// export function newVal(e: InputEvent): number {
// 	return Number(e.currentTarget?.value || 0);
// }
