// types
type Text = string|number|null|void
type Key = Text
type Ref = string|Function
type Type = string|Function|Promise<any>|Element
type State = Object|Promise<Object>
type Return = State|Promise<State>|void
type Render = Element|number|string|null|void|Promise<any>|Array<any>|Function
type Event = EventListener|EventHandler

interface List {
	next: Element|List
	prev: Element|List
	length: number
}

interface Refs {
	[key: string]: any
}

interface createElement {
	(type: Type, props?: Props, ...children: Array<any>): Element
}

interface h extends createElement {}

interface EventHandler {
	(e: Event, props: object, state: object): Return
}

interface EventListener {
	handleEvent: EventHandler
}

interface Events {
	onabort?: Event
	onauxclick?: Event
	onbeforecopy?: Event
	onbeforecut?: Event
	onbeforepaste?: Event
	onblur?: Event
	oncancel?: Event
	oncanplay?: Event
	oncanplaythrough?: Event
	onchange?: Event
	onclick?: Event
	onclose?: Event
	oncontextmenu?: Event
	oncopy?: Event
	oncuechange?: Event
	oncut?: Event
	ondblclick?: Event
	ondrag?: Event
	ondragend?: Event
	ondragenter?: Event
	ondragleave?: Event
	ondragover?: Event
	ondragstart?: Event
	ondrop?: Event
	ondurationchange?: Event
	onemptied?: Event
	onended?: Event
	onerror?: Event
	onfocus?: Event
	ongotpointercapture?: Event
	oninput?: Event
	oninvalid?: Event
	onkeydown?: Event
	onkeypress?: Event
	onkeyup?: Event
	onload?: Event
	onloadeddata?: Event
	onloadedmetadata?: Event
	onloadstart?: Event
	onlostpointercapture?: Event
	onmousedown?: Event
	onmouseenter?: Event
	onmouseleave?: Event
	onmousemove?: Event
	onmouseout?: Event
	onmouseover?: Event
	onmouseup?: Event
	onmousewheel?: Event
	onpaste?: Event
	onpause?: Event
	onplay?: Event
	onplaying?: Event
	onpointercancel?: Event
	onpointerdown?: Event
	onpointerenter?: Event
	onpointerleave?: Event
	onpointermove?: Event
	onpointerout?: Event
	onpointerover?: Event
	onpointerup?: Event
	onprogress?: Event
	onratechange?: Event
	onreset?: Event
	onresize?: Event
	onscroll?: Event
	onsearch?: Event
	onseeked?: Event
	onseeking?: Event
	onselect?: Event
	onselectstart?: Event
	onshow?: Event
	onstalled?: Event
	onsubmit?: Event
	onsuspend?: Event
	ontimeupdate?: Event
	ontoggle?: Event
	onvolumechange?: Event
	onwaiting?: Event
	onwebkitfullscreenchange?: Event
	onwebkitfullscreenerror?: Event
	onwheel?: Event

	onAbort?: Event
	onAuxClick?: Event
	onBeforeCopy?: Event
	onBeforeCut?: Event
	onBeforePaste?: Event
	onBlur?: Event
	onCancel?: Event
	onCanPlay?: Event
	onCanPlayThrough?: Event
	onChange?: Event
	onClick?: Event
	onClose?: Event
	onContextMenu?: Event
	onCopy?: Event
	onCueChange?: Event
	onCut?: Event
	onDblClick?: Event
	onDrag?: Event
	onDragEnd?: Event
	onDragEnter?: Event
	onDragLeave?: Event
	onDragOver?: Event
	onDragStart?: Event
	onDrop?: Event
	onDurationChange?: Event
	onEmptied?: Event
	onEnded?: Event
	onError?: Event
	onFocus?: Event
	onGotPointerCapture?: Event
	onInput?: Event
	onInvalid?: Event
	onKeydown?: Event
	onKeypress?: Event
	onKeyup?: Event
	onLoad?: Event
	onLoadedData?: Event
	onLoadedMetaData?: Event
	onLoadStart?: Event
	onLostPointerCapture?: Event
	onMouseDown?: Event
	onMouseEnter?: Event
	onMouseLeave?: Event
	onMouseMove?: Event
	onMouseOut?: Event
	onMouseOver?: Event
	onMouseUp?: Event
	onMouseWheel?: Event
	onPaste?: Event
	onPause?: Event
	onPlay?: Event
	onPlaying?: Event
	onPointerCancel?: Event
	onPointerDown?: Event
	onPointerEnter?: Event
	onPointerLeave?: Event
	onPointerMove?: Event
	onPointerOut?: Event
	onPointerOver?: Event
	onPointerUp?: Event
	onProgress?: Event
	onRateChange?: Event
	onReset?: Event
	onResize?: Event
	onScroll?: Event
	onSearch?: Event
	onSeeked?: Event
	onSeeking?: Event
	onSelect?: Event
	onSelectStart?: Event
	onShow?: Event
	onStalled?: Event
	onSubmit?: Event
	onSuspend?: Event
	onTimeUpdate?: Event
	onToggle?: Event
	onVolumeChange?: Event
	onWaiting?: Event
	onWebkitFullScreenChange?: Event
	onWebkitFullScreenError?: Event
	onWheel?: Event
}

interface Props extends Events {
	[props: string]: any
	children?: any
	ref?: Ref
	key?: Key
	className?: Text
	class?: Text
	id?: Text
	checked?: boolean
	value?: Text
	style?: string|object
	href?: Text
	width?: Text
	height?: Text
	defaultValue?: Text
	hidden?: boolean
	dangerouslySetInnerHTML?: {__html: any}
}

interface Element {
	id: number
	work: number
	keyed: boolean
	xmlns: string
	key: Key
	ref: Ref
	type: Type
	props: Props
	children: List
	owner: any
	instance: any
	event: any
	DOM: any
	context: any
	parent: any
	host: any
	next: any
	prev: any
}

interface isValidElement {
	(element: any): boolean
}

interface findDOMNode {
	(component: any): Node
}

interface Children {
	forEach: (children: any, callback: Function) => void
	map: (children: any, callback: Function) => Array<any>
	toArray: (children: any) => Array<any>
	count: (children: any) => number
	only: (children: Element) => Element
}

interface render {
	(subject: any, target?: Node, callback?: Function): void
}

interface renderToStream {
	(subject: any, target?: object, callback?: Function): void
}

interface renderToString {
	(subject: any, target?: object, callback?: Function): void
}

interface Component<P, S> {
  componentWillUpdate(nextProps: P, nextState: S): Return
  componentDidUpdate(prevProps: P, prevState: S): Return
  componentWillMount(): Return
	componentWillUnmount(node: Node): Return
  componentDidMount(node: Node): Promise<any>|void
}

declare global {
	namespace dio {
		export const version: string
		export const h: h
		export const createElement: createElement
		export const isValidElement: isValidElement
		export const findDOMNode: findDOMNode
		export const Children: Children

		export const render: render
		export const renderToString: renderToString
		export const renderToStream: renderToStream

		export abstract class Component<P, S> {
			readonly state: Readonly<S>
			readonly props: Readonly<P>
			readonly context: Readonly<Object>
			readonly refs: Refs
			
			forceUpdate (callback?: () => Return): void
			setState<K extends keyof S>(state: Pick<S, K>, callback?: () => Return): void
			
			constructor (props: Readonly<P>)
			abstract shouldComponentUpdate(nextProps: P, nextState: S): boolean
			abstract render(props: Readonly<P>, state: Readonly<S>): Render
		}
	}

	const h: h

	namespace JSX {
		interface Element {}
		interface ElementClass extends Component<Props, State> {}
		interface ElementAttributesProperty {props: any}
		interface ElementChildrenAttribute {children: any}
		interface IntrinsicAttributes extends Props {}
		interface IntrinsicClassAttributes extends Props {}
		interface IntrinsicElements {[props: string]: any}
	}
}

export = dio