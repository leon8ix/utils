/// <reference lib="dom" />

// > DOM TYPES

export type HTMLEvent<T extends HTMLElement> = Event & {
	currentTarget: EventTarget & T;
};

export type InputEvent = Event & {
	currentTarget: EventTarget & HTMLInputElement;
};
