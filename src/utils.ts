// // > PRINT

// export function getSheetCount(pageCount: number, duplex: boolean = true) {
// 	return duplex ? Math.ceil(pageCount / 2) : pageCount;
// }

// export function mirror(pos: number, space: number, doMirror = true): number {
// 	return doMirror ? space - pos : pos;
// }

// /** This mirrors the array both in direction and in space */
// export function mirrorArr(poss: number[], space: number, doMirror = true): number[] {
// 	return doMirror ? poss.map((pos) => mirror(pos, space)).reverse() : poss;
// }
