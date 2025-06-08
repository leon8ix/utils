/** Creates arbitrary delay, mainly for testing, so you can `await delay(1000)` */
export function delay(ms: number): Promise<void> {
	return new Promise<void>((res) => setTimeout(() => res(), ms));
}
