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

export const PINS = [
  {
    "pin": "SpawnId",
    "code": "A",
    "size": 8,
    "io_type": "Output"
  },
  {
    "pin": "SpawnDir",
    "code": "AD",
    "size": 3,
    "io_type": "Output"
  },
  {
    "pin": "SpawnMem",
    "code": "AM",
    "size": 8,
    "io_type": "Output"
  },
  {
    "pin": "Cell",
    "code": "C",
    "size": 8,
    "io_type": null
  },
  {
    "pin": "Clear",
    "code": "CC",
    "size": 1,
    "io_type": null
  },
  {
    "pin": "Dir",
    "code": "D",
    "size": 3,
    "io_type": "Output"
  },
  {
    "pin": "Dash",
    "code": "DD",
    "size": 1,
    "io_type": "Output"
  },
  {
    "pin": "Halt",
    "code": "H",
    "size": 1,
    "io_type": "Output"
  },
  {
    "pin": "Init",
    "code": "J",
    "size": 1,
    "io_type": "Input"
  },
  {
    "pin": "ExtIn",
    "code": "K",
    "size": 8,
    "io_type": "Input"
  },
  {
    "pin": "Mem",
    "code": "M",
    "size": 8,
    "io_type": null
  },
  {
    "pin": "Random",
    "code": "R",
    "size": 8,
    "io_type": "Input"
  },
  {
    "pin": "Chance",
    "code": "RR",
    "size": 8,
    "io_type": "Input"
  },
  {
    "pin": "Signal",
    "code": "S",
    "size": 8,
    "io_type": null
  },
  {
    "pin": "Time",
    "code": "T",
    "size": 8,
    "io_type": "Input"
  },
  {
    "pin": "Pulse",
    "code": "TT",
    "size": 8,
    "io_type": "Input"
  },
  {
    "pin": "NearbyAnt",
    "code": "V",
    "size": 8,
    "io_type": "Input"
  },
  {
    "pin": "NearbyId",
    "code": "VA",
    "size": 64,
    "io_type": "Input"
  },
  {
    "pin": "NearbyCell",
    "code": "VC",
    "size": 64,
    "io_type": "Input"
  },
  {
    "pin": "NearbyMem",
    "code": "VM",
    "size": 64,
    "io_type": "Input"
  },
  {
    "pin": "Wait",
    "code": "W",
    "size": 8,
    "io_type": "Output"
  },
  {
    "pin": "ExtOut",
    "code": "X",
    "size": 8,
    "io_type": "Output"
  },
  {
    "pin": "Die",
    "code": "Z",
    "size": 1,
    "io_type": "Output"
  },
  {
    "pin": "Kill",
    "code": "ZZ",
    "size": 1,
    "io_type": "Output"
  }
];
