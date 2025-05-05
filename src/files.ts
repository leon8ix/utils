// > FILES

export function fileSize(bytes: number, separator = ' '): string {
	const units = ['B', 'KiB', 'MiB', 'GiB', 'TiB'];
	let size = bytes;
	let i = 0;
	while (size > 512) {
		size /= 1024;
		i++;
	}
	size = Math.round(size * 10) / 10;
	return '' + size + separator + units[i];
}

// export function loadSVG(svgStr: string): SVGSVGElement | null {
// 	try {
// 		const parser = new DOMParser();
// 		const svgDoc = parser.parseFromString(svgStr, 'image/svg+xml');
// 		const svgElement = svgDoc.querySelector('svg');
// 		return svgElement;
// 	} catch (_err) {
// 		return null;
// 	}
// }
