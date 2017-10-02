var Symbol = window.Symbol || function (d) { return 'Symbol('+d+')' }
var WeakMap = window.WeakMap || WeakHash
var Promise = window.Promise || noop

var requestAnimationFrame = window.requestAnimationFrame || function (callback) { setTimeout(callback, 16) }
var defineProperty = Object.defineProperty
var defineProperties = Object.defineProperties
var hasOwnProperty = Object.hasOwnProperty
var isArray = Array.isArray
var SymbolIterator = Symbol.iterator || '@@iterator'
var SymbolError = Symbol('Error')
var SymbolElement = Symbol('Element')
var SymbolComponent = Symbol('Component')
var DOMMap = new WeakMap()
