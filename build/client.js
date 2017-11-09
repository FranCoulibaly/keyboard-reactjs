(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.App = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _SwitchInstruments = require("./SwitchInstruments.jsx");

var _Styles = require("./Styles.jsx");

var _InstrumentKeyboards = require("./InstrumentKeyboards.jsx");

var _KeyboardKey = require("./KeyboardKey.jsx");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = exports.App = function (_React$Component) {
	_inherits(App, _React$Component);

	function App(props) {
		_classCallCheck(this, App);

		var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

		_this.state = {
			// isPlaying: false,
			instrument: "piano"
		};
		_this.changeInstrument = _this.changeInstrument.bind(_this);
		return _this;
	}
	// onPlay(played){
	// 	this.setState({
	// 		isPlaying: played
	// 	});
	// }

	_createClass(App, [{
		key: "changeInstrument",
		value: function changeInstrument(newInstrument) {
			this.setState({
				instrument: newInstrument
			});
		}
	}, {
		key: "render",
		value: function render() {
			switch (this.state.instrument) {
				case "piano":
					return React.createElement(
						"div",
						{ style: _Styles.Styles.image },
						React.createElement(_SwitchInstruments.SwitchInstruments, { instrument: this.state.instrument, onClick: this.changeInstrument }),
						React.createElement(_InstrumentKeyboards.PianoKeyboard, null)
					);
					break;
				case "drums":
					return React.createElement(
						"div",
						{ style: _Styles.Styles.image },
						React.createElement(_SwitchInstruments.SwitchInstruments, { instrument: this.state.instrument, onClick: this.changeInstrument }),
						React.createElement(_InstrumentKeyboards.DrumKeyboard, null)
					);
					break;
				case "synth":
					return React.createElement(
						"div",
						{ style: _Styles.Styles.image },
						React.createElement(_SwitchInstruments.SwitchInstruments, { instrument: this.state.instrument, onClick: this.changeInstrument }),
						React.createElement(_InstrumentKeyboards.SynthKeyboard, null)
					);
			}
		}
	}]);

	return App;
}(React.Component);

},{"./InstrumentKeyboards.jsx":2,"./KeyboardKey.jsx":3,"./Styles.jsx":4,"./SwitchInstruments.jsx":5}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.SynthKeyboard = exports.PianoKeyboard = exports.DrumKeyboard = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _KeyboardKey = require("./KeyboardKey.jsx");

var _Styles = require("./Styles.jsx");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DrumKeyboard = exports.DrumKeyboard = function (_React$Component) {
	_inherits(DrumKeyboard, _React$Component);

	function DrumKeyboard() {
		_classCallCheck(this, DrumKeyboard);

		return _possibleConstructorReturn(this, (DrumKeyboard.__proto__ || Object.getPrototypeOf(DrumKeyboard)).apply(this, arguments));
	}

	_createClass(DrumKeyboard, [{
		key: "render",
		value: function render() {
			return React.createElement(
				"div",
				{ style: _Styles.Styles.keys },
				React.createElement(_KeyboardKey.KeyboardKey, { keyChar: "a", sound: "clap", audioFile: "./sounds/drums/clap.wav" }),
				React.createElement(_KeyboardKey.KeyboardKey, { keyChar: "s", sound: "hihat", audioFile: "./sounds/drums/hihat.wav" }),
				React.createElement(_KeyboardKey.KeyboardKey, { keyChar: "d", sound: "kick", audioFile: "./sounds/drums/kick.wav" }),
				React.createElement(_KeyboardKey.KeyboardKey, { keyChar: "f", sound: "openhat", audioFile: "./sounds/drums/openhat.wav" }),
				React.createElement(_KeyboardKey.KeyboardKey, { keyChar: "g", sound: "boom", audioFile: "./sounds/drums/boom.wav" }),
				React.createElement(_KeyboardKey.KeyboardKey, { keyChar: "h", sound: "ride", audioFile: "./sounds/drums/ride.wav" }),
				React.createElement(_KeyboardKey.KeyboardKey, { keyChar: "j", sound: "snare", audioFile: "./sounds/drums/snare.wav" }),
				React.createElement(_KeyboardKey.KeyboardKey, { keyChar: "k", sound: "tom", audioFile: "./sounds/drums/tom.wav" }),
				React.createElement(_KeyboardKey.KeyboardKey, { keyChar: "l", sound: "tink", audioFile: "./sounds/drums/tink.wav" })
			);
		}
	}]);

	return DrumKeyboard;
}(React.Component);

var PianoKeyboard = exports.PianoKeyboard = function (_React$Component2) {
	_inherits(PianoKeyboard, _React$Component2);

	function PianoKeyboard() {
		_classCallCheck(this, PianoKeyboard);

		return _possibleConstructorReturn(this, (PianoKeyboard.__proto__ || Object.getPrototypeOf(PianoKeyboard)).apply(this, arguments));
	}

	_createClass(PianoKeyboard, [{
		key: "render",
		value: function render() {
			return React.createElement(
				"div",
				{ style: _Styles.Styles.keys },
				React.createElement(_KeyboardKey.KeyboardKey, { keyChar: "a", sound: "c", audioFile: "./sounds/piano/grandpianoC-a.wav" }),
				React.createElement(_KeyboardKey.KeyboardKey, { keyChar: "s", sound: "d", audioFile: "./sounds/piano/grandpianoD-s.wav" }),
				React.createElement(_KeyboardKey.KeyboardKey, { keyChar: "d", sound: "e", audioFile: "./sounds/piano/grandpianoE-d.wav" }),
				React.createElement(_KeyboardKey.KeyboardKey, { keyChar: "f", sound: "f", audioFile: "./sounds/piano/grandpianoF-f.wav" }),
				React.createElement(_KeyboardKey.KeyboardKey, { keyChar: "g", sound: "g", audioFile: "./sounds/piano/grandpianoG-g.wav" }),
				React.createElement(_KeyboardKey.KeyboardKey, { keyChar: "h", sound: "a", audioFile: "./sounds/piano/grandpianoA-h.wav" }),
				React.createElement(_KeyboardKey.KeyboardKey, { keyChar: "j", sound: "b", audioFile: "./sounds/piano/grandpianoB-j.wav" }),
				React.createElement(_KeyboardKey.KeyboardKey, { keyChar: "k", sound: "c", audioFile: "./sounds/piano/grandpianoC-k.wav" }),
				React.createElement(_KeyboardKey.KeyboardKey, { keyChar: "l", sound: "d", audioFile: "./sounds/piano/grandpianoD-l.wav" })
			);
		}
	}]);

	return PianoKeyboard;
}(React.Component);

var SynthKeyboard = exports.SynthKeyboard = function (_React$Component3) {
	_inherits(SynthKeyboard, _React$Component3);

	function SynthKeyboard() {
		_classCallCheck(this, SynthKeyboard);

		return _possibleConstructorReturn(this, (SynthKeyboard.__proto__ || Object.getPrototypeOf(SynthKeyboard)).apply(this, arguments));
	}

	_createClass(SynthKeyboard, [{
		key: "render",
		value: function render() {
			return React.createElement(
				"div",
				{ style: _Styles.Styles.keys },
				React.createElement(_KeyboardKey.KeyboardKey, { keyChar: "a", sound: "c", audioFile: "./sounds/synth/synthC-a.wav" }),
				React.createElement(_KeyboardKey.KeyboardKey, { keyChar: "s", sound: "d", audioFile: "./sounds/synth/synthD-s.wav" }),
				React.createElement(_KeyboardKey.KeyboardKey, { keyChar: "d", sound: "e", audioFile: "./sounds/synth/synthE-d.wav" }),
				React.createElement(_KeyboardKey.KeyboardKey, { keyChar: "f", sound: "f", audioFile: "./sounds/synth/synthF-f.wav" }),
				React.createElement(_KeyboardKey.KeyboardKey, { keyChar: "g", sound: "g", audioFile: "./sounds/synth/synthG-g.wav" }),
				React.createElement(_KeyboardKey.KeyboardKey, { keyChar: "h", sound: "a", audioFile: "./sounds/synth/synthA-h.wav" }),
				React.createElement(_KeyboardKey.KeyboardKey, { keyChar: "j", sound: "b", audioFile: "./sounds/synth/synthB-j.wav" }),
				React.createElement(_KeyboardKey.KeyboardKey, { keyChar: "k", sound: "c", audioFile: "./sounds/synth/synthC-k.wav" }),
				React.createElement(_KeyboardKey.KeyboardKey, { keyChar: "l", sound: "d", audioFile: "./sounds/synth/synthD-l.wav" })
			);
		}
	}]);

	return SynthKeyboard;
}(React.Component);

},{"./KeyboardKey.jsx":3,"./Styles.jsx":4}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.KeyboardKey = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Styles = require('./Styles.jsx');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var KeyboardKey = exports.KeyboardKey = function (_React$Component) {
	_inherits(KeyboardKey, _React$Component);

	function KeyboardKey(props) {
		_classCallCheck(this, KeyboardKey);

		var _this = _possibleConstructorReturn(this, (KeyboardKey.__proto__ || Object.getPrototypeOf(KeyboardKey)).call(this, props));

		_this.handleKeyPress = _this.handleKeyPress.bind(_this);
		return _this;
	}

	_createClass(KeyboardKey, [{
		key: 'handleKeyPress',
		value: function handleKeyPress(event) {
			// console.log("KeyPress triggered: ", event.key);
			var audio = new Audio(this.props.audioFile);

			if (event.key === this.props.keyChar) {
				audio.currentTime = 0;
				audio.play();
				// this.props.onKeyPress({
				// 	isPlaying: true
				// });
			}
		}
	}, {
		key: 'componentDidMount',
		value: function componentDidMount() {
			document.addEventListener('keypress', this.handleKeyPress);
		}
	}, {
		key: 'componentWillUnmount',
		value: function componentWillUnmount() {
			document.removeEventListener('keypress', this.handleKeyPress);
		}
	}, {
		key: 'render',
		value: function render() {
			var _this2 = this;

			return React.createElement(
				'div',
				null,
				React.createElement(
					'div',
					{
						onKeyPress: function onKeyPress(event) {
							return _this2.handleKeyPress(event);
						},
						style: _Styles.Styles.key },
					React.createElement(
						'kbd',
						{ style: _Styles.Styles.kbd },
						this.props.keyChar
					),
					React.createElement(
						'span',
						{ style: _Styles.Styles.sound },
						this.props.sound
					)
				)
			);
		}
	}]);

	return KeyboardKey;
}(React.Component);

},{"./Styles.jsx":4}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
var Styles = exports.Styles = {
	keys: {
		display: 'flex',
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		flexDirection: 'row',
		height: 150,
		paddingTop: 250,
		paddingBottom: 355
	},
	kbd: {
		display: 'block',
		fontSize: 50,
		textTransform: 'uppercase'
	},
	sound: {
		fontSize: 10,
		textTransform: 'uppercase',
		letterSpacing: 1.5,
		color: '#ffc600',
		fontFamily: 'sans-serif'
	},
	playing: {
		tranform: 'scale(1.1)',
		borderColor: '#cc3184',
		boxShadow: '0 0 1rem #cc3184'
	},
	key: {
		border: 'solid #cc3184',
		borderRadius: '50%',
		margin: 16,
		paddingTop: 16,
		paddingBottom: 8,
		width: 80,
		textAlign: 'center',
		color: 'white',
		borderColor: '#cc3184',
		boxShadow: '0 0 1rem #cc3184'
	},
	button: {
		border: 'solid #eecc3a',
		margin: 10,
		borderRadius: '20%',
		paddingTop: 5,
		paddingBottom: 8,
		width: 50,
		textAlign: 'center',
		color: '#eecc3a',
		backgroundColor: 'transparent'
	}
};

},{}],5:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.SwitchInstruments = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Styles = require("./Styles.jsx");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SwitchInstruments = exports.SwitchInstruments = function (_React$Component) {
	_inherits(SwitchInstruments, _React$Component);

	function SwitchInstruments(props) {
		_classCallCheck(this, SwitchInstruments);

		var _this = _possibleConstructorReturn(this, (SwitchInstruments.__proto__ || Object.getPrototypeOf(SwitchInstruments)).call(this, props));

		_this.handleClick = _this.handleClick.bind(_this);
		return _this;
	}

	_createClass(SwitchInstruments, [{
		key: "handleClick",
		value: function handleClick(e) {
			var instrument = e.target.value;
			this.props.onClick(instrument);
		}
	}, {
		key: "render",
		value: function render() {
			return React.createElement(
				"div",
				null,
				React.createElement(
					"button",
					{ value: "piano", onClick: this.handleClick, style: _Styles.Styles.button },
					" Piano "
				),
				React.createElement(
					"button",
					{ value: "drums", onClick: this.handleClick, style: _Styles.Styles.button },
					" Drums "
				),
				React.createElement(
					"button",
					{ value: "synth", onClick: this.handleClick, style: _Styles.Styles.button },
					" Synth "
				)
			);
		}
	}]);

	return SwitchInstruments;
}(React.Component);

},{"./Styles.jsx":4}],6:[function(require,module,exports){
"use strict";

var _App = require("./components/App.jsx");

function renderApp() {
	ReactDOM.render(React.createElement(_App.App, null), document.getElementById("app"));
}

document.addEventListener("DOMContentLoaded", renderApp);

if (document.getElementById("app")) renderApp();

},{"./components/App.jsx":1}]},{},[6]);
