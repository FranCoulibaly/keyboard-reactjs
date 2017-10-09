(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.App = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _InstrumentKeyboards = require("./InstrumentKeyboards.jsx");

var _SwitchInstruments = require("./SwitchInstruments.jsx");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = exports.App = function (_React$Component) {
	_inherits(App, _React$Component);

	function App(props) {
		_classCallCheck(this, App);

		var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

		_this.state = {
			// instrument: props.drums,
			recording: false,
			playingBack: false
		};

		// this.switchInstrument = this.switchInstrument.bind(this);
		// this.recordSound = this.recordSound.bind(this);
		// this.playBackSong = this.playBackSong.bind(this);
		// this.discardSong = this.discardSong.bind(this);
		// this.saveSong = this.saveSong.bind(this);

		return _this;
	}

	_createClass(App, [{
		key: "render",
		value: function render() {

			var styles = {
				image: {
					backgroundImage: 'url(' + "./images/815.jpg" + ')',
					backgroundSize: "cover",
					margin: 0

				}
				// render SwitchInstruments here
			};return React.createElement(
				"div",
				{ style: styles.image },
				React.createElement(_SwitchInstruments.SwitchInstruments, null)
			);
		}
	}]);

	return App;
}(React.Component);

},{"./InstrumentKeyboards.jsx":2,"./SwitchInstruments.jsx":5}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.SynthKeyboard = exports.PianoKeyboard = exports.DrumKeyboard = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _KeyboardKey = require('./KeyboardKey.jsx');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DrumKeyboard = exports.DrumKeyboard = function (_React$Component) {
	_inherits(DrumKeyboard, _React$Component);

	function DrumKeyboard(props) {
		_classCallCheck(this, DrumKeyboard);

		var _this = _possibleConstructorReturn(this, (DrumKeyboard.__proto__ || Object.getPrototypeOf(DrumKeyboard)).call(this, props));

		_this.state = {};
		return _this;
	}

	_createClass(DrumKeyboard, [{
		key: 'render',
		value: function render() {
			var styles = {
				keys: {
					display: 'flex',
					flex: 1,
					alignItems: 'center',
					justifyContent: 'center',
					flexDirection: 'row',
					height: 150,
					paddingTop: 250,
					paddingBottom: 300
				}
			};

			return React.createElement(
				'div',
				{ style: styles.keys },
				React.createElement(_KeyboardKey.KeyboardKey, { keyChar: 'a', sound: 'clap', audioFile: './sounds/drums/clap.wav' }),
				React.createElement(_KeyboardKey.KeyboardKey, { keyChar: 's', sound: 'hihat', audioFile: './sounds/drums/hihat.wav' }),
				React.createElement(_KeyboardKey.KeyboardKey, { keyChar: 'd', sound: 'kick', audioFile: './sounds/drums/kick.wav' }),
				React.createElement(_KeyboardKey.KeyboardKey, { keyChar: 'f', sound: 'openhat', audioFile: './sounds/drums/openhat.wav' }),
				React.createElement(_KeyboardKey.KeyboardKey, { keyChar: 'g', sound: 'boom', audioFile: './sounds/drums/boom.wav' }),
				React.createElement(_KeyboardKey.KeyboardKey, { keyChar: 'h', sound: 'ride', audioFile: './sounds/drums/ride.wav' }),
				React.createElement(_KeyboardKey.KeyboardKey, { keyChar: 'j', sound: 'snare', audioFile: './sounds/drums/snare.wav' }),
				React.createElement(_KeyboardKey.KeyboardKey, { keyChar: 'k', sound: 'tom', audioFile: './sounds/drums/tom.wav' }),
				React.createElement(_KeyboardKey.KeyboardKey, { keyChar: 'l', sound: 'tink', audioFile: './sounds/drums/tink.wav' })
			);
		}
	}]);

	return DrumKeyboard;
}(React.Component);

var PianoKeyboard = exports.PianoKeyboard = function (_React$Component2) {
	_inherits(PianoKeyboard, _React$Component2);

	function PianoKeyboard(props) {
		_classCallCheck(this, PianoKeyboard);

		var _this2 = _possibleConstructorReturn(this, (PianoKeyboard.__proto__ || Object.getPrototypeOf(PianoKeyboard)).call(this, props));

		_this2.state = {};
		return _this2;
	}

	_createClass(PianoKeyboard, [{
		key: 'render',
		value: function render() {
			var styles = {
				keys: {
					display: 'flex',
					flex: 1,
					alignItems: 'center',
					justifyContent: 'center',
					flexDirection: 'row',
					height: 150,
					paddingTop: 250,
					paddingBottom: 300
				}
			};

			return React.createElement(
				'div',
				{ style: styles.keys },
				React.createElement(_KeyboardKey.KeyboardKey, { keyChar: 'a', sound: 'c', audioFile: './sounds/piano/grandpianoC-a.wav' }),
				React.createElement(_KeyboardKey.KeyboardKey, { keyChar: 's', sound: 'd', audioFile: './sounds/piano/grandpianoD-s.wav' }),
				React.createElement(_KeyboardKey.KeyboardKey, { keyChar: 'd', sound: 'e', audioFile: './sounds/piano/grandpianoE-d.wav' }),
				React.createElement(_KeyboardKey.KeyboardKey, { keyChar: 'f', sound: 'f', audioFile: './sounds/piano/grandpianoF-f.wav' }),
				React.createElement(_KeyboardKey.KeyboardKey, { keyChar: 'g', sound: 'g', audioFile: './sounds/piano/grandpianoG-g.wav' }),
				React.createElement(_KeyboardKey.KeyboardKey, { keyChar: 'h', sound: 'a', audioFile: './sounds/piano/grandpianoA-h.wav' }),
				React.createElement(_KeyboardKey.KeyboardKey, { keyChar: 'j', sound: 'b', audioFile: './sounds/piano/grandpianoB-j.wav' }),
				React.createElement(_KeyboardKey.KeyboardKey, { keyChar: 'k', sound: 'c', audioFile: './sounds/piano/grandpianoC-k.wav' }),
				React.createElement(_KeyboardKey.KeyboardKey, { keyChar: 'l', sound: 'd', audioFile: './sounds/piano/grandpianoD-l.wav' })
			);
		}
	}]);

	return PianoKeyboard;
}(React.Component);

var SynthKeyboard = exports.SynthKeyboard = function (_React$Component3) {
	_inherits(SynthKeyboard, _React$Component3);

	function SynthKeyboard(props) {
		_classCallCheck(this, SynthKeyboard);

		var _this3 = _possibleConstructorReturn(this, (SynthKeyboard.__proto__ || Object.getPrototypeOf(SynthKeyboard)).call(this, props));

		_this3.state = {};
		return _this3;
	}

	_createClass(SynthKeyboard, [{
		key: 'render',
		value: function render() {
			var styles = {
				keys: {
					display: 'flex',
					flex: 1,
					alignItems: 'center',
					justifyContent: 'center',
					flexDirection: 'row',
					height: 150,
					paddingTop: 250,
					paddingBottom: 300
				}
			};

			return React.createElement(
				'div',
				{ style: styles.keys },
				React.createElement(_KeyboardKey.KeyboardKey, { keyChar: 'a', sound: 'c', audioFile: './sounds/synth/synthC-a.wav' }),
				React.createElement(_KeyboardKey.KeyboardKey, { keyChar: 's', sound: 'd', audioFile: './sounds/synth/synthD-s.wav' }),
				React.createElement(_KeyboardKey.KeyboardKey, { keyChar: 'd', sound: 'e', audioFile: './sounds/synth/synthE-d.wav' }),
				React.createElement(_KeyboardKey.KeyboardKey, { keyChar: 'f', sound: 'f', audioFile: './sounds/synth/synthF-f.wav' }),
				React.createElement(_KeyboardKey.KeyboardKey, { keyChar: 'g', sound: 'g', audioFile: './sounds/synth/synthG-g.wav' }),
				React.createElement(_KeyboardKey.KeyboardKey, { keyChar: 'h', sound: 'a', audioFile: './sounds/synth/synthA-h.wav' }),
				React.createElement(_KeyboardKey.KeyboardKey, { keyChar: 'j', sound: 'b', audioFile: './sounds/synth/synthB-j.wav' }),
				React.createElement(_KeyboardKey.KeyboardKey, { keyChar: 'k', sound: 'c', audioFile: './sounds/synth/synthC-k.wav' }),
				React.createElement(_KeyboardKey.KeyboardKey, { keyChar: 'l', sound: 'd', audioFile: './sounds/synth/synthD-l.wav' })
			);
		}
	}]);

	return SynthKeyboard;
}(React.Component);

},{"./KeyboardKey.jsx":3}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var KeyboardKey = exports.KeyboardKey = function (_React$Component) {
	_inherits(KeyboardKey, _React$Component);

	function KeyboardKey(props) {
		_classCallCheck(this, KeyboardKey);

		var _this = _possibleConstructorReturn(this, (KeyboardKey.__proto__ || Object.getPrototypeOf(KeyboardKey)).call(this, props));

		_this.state = {
			isPlaying: false
		};

		_this.handleKeyPress = _this.handleKeyPress.bind(_this);
		return _this;
	}

	_createClass(KeyboardKey, [{
		key: 'handleKeyPress',
		value: function handleKeyPress(event) {
			console.log("KeyPress triggered: ", event.key);
			var audio = new Audio(this.props.audioFile);

			if (event.key === this.props.keyChar) {
				audio.currentTime = 0;
				audio.play();
				this.setState({
					isPlaying: true
				});
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

			var styles = {
				key: {
					border: 'solid white',
					borderRadius: '50%',
					margin: 16,
					paddingTop: 16,
					paddingBottom: 8,
					width: 80,
					textAlign: 'center',
					color: 'white'

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
				}

			};

			console.log(this.state.isPlaying);
			return React.createElement(
				'div',
				null,
				React.createElement(
					'div',
					{
						onKeyPress: function onKeyPress(event) {
							return _this2.handleKeyPress(event);
						},
						style: styles.key },
					React.createElement(
						'kbd',
						{ style: styles.kbd },
						this.props.keyChar
					),
					React.createElement(
						'span',
						{ style: styles.sound },
						this.props.sound
					)
				)
			);
		}
	}]);

	return KeyboardKey;
}(React.Component);

},{}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.SetInstrument = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _SwitchInstruments = require("./SwitchInstruments.jsx");

var _InstrumentKeyboards = require("./InstrumentKeyboards.jsx");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SetInstrument = exports.SetInstrument = function (_React$Component) {
	_inherits(SetInstrument, _React$Component);

	function SetInstrument(props) {
		_classCallCheck(this, SetInstrument);

		return _possibleConstructorReturn(this, (SetInstrument.__proto__ || Object.getPrototypeOf(SetInstrument)).call(this, props));
	}

	_createClass(SetInstrument, [{
		key: "render",
		value: function render() {
			console.log(this.props.instrument);
			switch (this.props.instrument) {
				case "piano":
					return React.createElement(_InstrumentKeyboards.PianoKeyboard, null);
					break;
				case "drums":
					return React.createElement(_InstrumentKeyboards.DrumKeyboard, null);
					break;
				case "synth":
					return React.createElement(_InstrumentKeyboards.SynthKeyboard, null);
			}
		}
	}]);

	return SetInstrument;
}(React.Component);

},{"./InstrumentKeyboards.jsx":2,"./SwitchInstruments.jsx":5}],5:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.SwitchInstruments = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _InstrumentKeyboards = require("./InstrumentKeyboards.jsx");

var _SetInstrument = require("./SetInstrument.jsx");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SwitchInstruments = exports.SwitchInstruments = function (_React$Component) {
	_inherits(SwitchInstruments, _React$Component);

	function SwitchInstruments(props) {
		_classCallCheck(this, SwitchInstruments);

		var _this = _possibleConstructorReturn(this, (SwitchInstruments.__proto__ || Object.getPrototypeOf(SwitchInstruments)).call(this, props));

		_this.state = {
			instrument: "piano"
		};
		_this.setPiano = _this.setPiano.bind(_this);
		_this.setDrums = _this.setDrums.bind(_this);
		_this.setSynth = _this.setSynth.bind(_this);

		return _this;
	}

	_createClass(SwitchInstruments, [{
		key: "setPiano",
		value: function setPiano() {
			this.setState({
				instrument: "piano"
			});
		}
	}, {
		key: "setDrums",
		value: function setDrums() {
			this.setState({
				instrument: "drums"
			});
		}
	}, {
		key: "setSynth",
		value: function setSynth() {
			this.setState({
				instrument: "synth"
			});
		}
	}, {
		key: "render",
		value: function render() {
			console.log("Current state: " + this.state.instrument);
			return React.createElement(
				"div",
				null,
				React.createElement(
					"button",
					{ instrument: "piano", onClick: this.setPiano },
					" Piano "
				),
				React.createElement(
					"button",
					{ instrument: "drums", onClick: this.setDrums },
					" Drums "
				),
				React.createElement(
					"button",
					{ instrument: "synth", onClick: this.setSynth },
					" Synth "
				),
				React.createElement(_SetInstrument.SetInstrument, { instrument: this.state.instrument })
			);
		}
	}]);

	return SwitchInstruments;
}(React.Component);

},{"./InstrumentKeyboards.jsx":2,"./SetInstrument.jsx":4}],6:[function(require,module,exports){
"use strict";

var _App = require("./components/App.jsx");

// import styles from "../public/stylesheets/style.css";

function renderApp() {
	ReactDOM.render(React.createElement(_App.App, null), document.getElementById("app"));
}

document.addEventListener("DOMContentLoaded", renderApp);

if (document.getElementById("app")) renderApp();

},{"./components/App.jsx":1}]},{},[6]);
