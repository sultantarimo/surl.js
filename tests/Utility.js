import {registry} from '../src/Utility.js'

describe('Utility', () => {
	const pr = process, ev = process.env, pm = Promise, wm = WeakMap, sm = Symbol

	before(() => (globalThis.Promise = '', globalThis.WeakMap = '', globalThis.Symbol = ''))
	after(() => (globalThis.Promise = pm, globalThis.WeakMap = wm, globalThis.Symbol = sm))

	it('should support WeakMap fallback', async () => {
		const stack = []
		const refs = {}

		refs.current = registry()

		stack.push(refs.current.set(refs, 10).get(refs), refs.current.has(refs))
		stack.push(refs.current.get({}), refs.current.has({}))

		assert.deepEqual(stack, [10, true, undefined, false])
	})

	it('should support @@iterator fallback', async () => {
		const {iterator} = await import('../src/Utility.js?')

		assert.deepEqual([iterator], ['@@iterator'])
	})

	it('should support process detection outside node', async () => {
		const {environment} = await import('../src/Utility.js?')

		try {
			process.env = 'development'
			assert.equal(environment(), 'development')
			delete globalThis.process
			assert.equal(environment(), '')
		} finally {
			globalThis.process = pr
			process.env = ev
		}

		assert.equal(process, pr)
		assert.equal(process.env, ev)
	})
})
