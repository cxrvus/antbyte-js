// @ts-check
/** @import * as AntByte from "../antbyte-js/lib" AntByte */

import { ant, run,  size, bits, byte } from "../antbyte-js/lib.mjs"

run({
	cfg: {
		...size(32),
		// ...
	},
	ants: {
		1: ant("main", () => {
			// ...
			return {
				// ...
			}
		}),
	},
})
