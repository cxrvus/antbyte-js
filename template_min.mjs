// @ts-check

import { ant, run } from "../antbyte-js/lib.mjs"

run({
	cfg: {},
	ants: {
		1: ant("main", () => ({
			// ...
		})),
	},
})
