import {join} from 'path'
import {terser} from "rollup-plugin-terser"
import size from 'rollup-plugin-size'

const options = {mangle: true, compress: false}
const defaults = {
	onwarn(warning, warn) {
		switch (warning.code) {
			case 'CIRCULAR_DEPENDENCY':
				return
			default:
				warn(warning)
		}
	},
	treeshake: {propertyReadSideEffects: false},
	context: 'this'
}

export default ({configSrc = './', configInput = join(configSrc, 'index.js')}) => {
	return [
		{
			...defaults,
			input: configInput,
			output: [{file: join(configSrc, 'dist', 'dyo.umd.js'), format: 'umd', name: 'dyo', freeze: false, sourcemap: true}],
			plugins: [terser(options), size()]
		},
		{
			...defaults,
			input: configInput,
			output: [{file: join(configSrc, 'dist', 'dyo.esm.js'), format: 'esm', name: 'dyo', freeze: false, sourcemap: true}],
			plugins: [terser(options), size()]
		}
	]
}
