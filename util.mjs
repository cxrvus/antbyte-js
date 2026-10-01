// @ts-check

/** @param {...boolean} params  */
export function byte(...params) {
	let result = 0
	for (let i = 0; i < params.length; i++) {
		if (params[i]) result |= (1 << (params.length - 1 - i))
	}
	return result
}

/** @param {number} count @param {number} value @returns {boolean[]}  */
export function bits(count, value) {
	if (value > (2 ** count - 1)) {
		throw new RangeError(`the number ${value} cannot be displayed using ${count} bytes`)
	} else if (value < 0) {
		throw new RangeError(`cannot display negative number ${value}`)
	} 

	const result = []
	for (let i = count - 1; i >= 0; i--) {
		result[count - 1 - i] = (value & (1 << i)) !== 0
	}
	return result
}


// config wrappers

/** @param {number} value */
export const size = value => ({ height: value, width: value})


// wrapper functions for 1-8 bits

/** @param {number} value @returns {boolean[]}  */
export const bits_2 = value => bits(2, value);

/** @param {number} value @returns {boolean[]}  */
export const bits_3 = value => bits(3, value);

/** @param {number} value @returns {boolean[]}  */
export const bits_4 = value => bits(4, value);

/** @param {number} value @returns {boolean[]}  */
export const bits_5 = value => bits(5, value);

/** @param {number} value @returns {boolean[]}  */
export const bits_6 = value => bits(6, value);

/** @param {number} value @returns {boolean[]}  */
export const bits_7 = value => bits(7, value);

/** @param {number} value @returns {boolean[]}  */
export const bits_8 = value => bits(8, value);


// other wrappers

/** @returns {import('./lib').World} */
export const newWorld = () => ({ cfg: {}, ants: {} })

export const $0 = false;
export const $1 = true;

/** @param {string} msg */
export const err = msg => console.error(msg)

// from stdlib.ant

/** @param {boolean[]} params @returns {boolean} */
export const and = (...params) => params.every(x => x)

/** @param {boolean[]} params @returns {boolean} */
export const or = (...params) => !params.every(x => !x)

/** @param {boolean[]} params @returns {boolean[]} */
export const inv = (...params) => params.map(x => !x)


// manually created pins

export const PINS =
[
  {
    "pin": "AntId",
    "code": "A_ID",
    "size": 8,
    "io_type": null
  },
  {
    "pin": "ChildLayer",
    "code": "A_LYR",
    "size": 3,
    "io_type": "Output"
  },
  {
    "pin": "ChildLeft",
    "code": "A_LFT",
    "size": 1,
    "io_type": "Output"
  },
  {
    "pin": "ChildMem",
    "code": "A_MEM",
    "size": 8,
    "io_type": "Output"
  },
  {
    "pin": "ChildRotation",
    "code": "A_ROT",
    "size": 8,
    "io_type": "Output"
  },
  {
    "pin": "BirthTick",
    "code": "INL",
    "size": 1,
    "io_type": "Input"
  },
  {
    "pin": "TileColor",
    "code": "COL",
    "size": 8,
    "io_type": null
  },
  {
    "pin": "TileZero",
    "code": "CLR",
    "size": 1,
    "io_type": null
  },
  {
    "pin": "Die",
    "code": "DIE",
    "size": 1,
    "io_type": "Output"
  },
  {
    "pin": "Clock",
    "code": "EVR",
    "size": 8,
    "io_type": "Input"
  },
  {
    "pin": "Halt",
    "code": "HLT",
    "size": 1,
    "io_type": null
  },
  {
    "pin": "Kill",
    "code": "KLL",
    "size": 1,
    "io_type": "Output"
  },
  {
    "pin": "RotateLeft",
    "code": "LFT",
    "size": 1,
    "io_type": "Output"
  },
  {
    "pin": "Mem",
    "code": "MEM",
    "size": 8,
    "io_type": null
  },
  {
    "pin": "Noise",
    "code": "RND",
    "size": 8,
    "io_type": "Input"
  },
  {
    "pin": "Probability",
    "code": "PRB",
    "size": 8,
    "io_type": "Input"
  },
  {
    "pin": "Rotation",
    "code": "ROT",
    "size": 8,
    "io_type": null
  },
  {
    "pin": "Signal",
    "code": "SIG",
    "size": 8,
    "io_type": null
  },
  {
    "pin": "Counter",
    "code": "CTR",
    "size": 8,
    "io_type": "Input"
  },
  {
    "pin": "TieBreaker",
    "code": "TBK",
    "size": 1,
    "io_type": "Output"
  },
  {
    "pin": "NearbyAnt",
    "code": "OBS",
    "size": 8,
    "io_type": "Input"
  },
  {
    "pin": "NearbyId",
    "code": "N_ID",
    "size": 64,
    "io_type": "Input"
  },
  {
    "pin": "NearbyTile",
    "code": "N_COL",
    "size": 64,
    "io_type": "Input"
  },
  {
    "pin": "NearbyMem",
    "code": "N_MEM",
    "size": 64,
    "io_type": "Input"
  },
  {
    "pin": "Wait",
    "code": "SLP",
    "size": 8,
    "io_type": "Output"
  },
  {
    "pin": "ExtIn",
    "code": "X_IN",
    "size": 16,
    "io_type": "Input"
  },
  {
    "pin": "ExtOut",
    "code": "X_OUT",
    "size": 16,
    "io_type": "Output"
  },
  {
    "pin": "RotateZero",
    "code": "RST",
    "size": 1,
    "io_type": null
  }
]

