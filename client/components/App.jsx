
import {SwitchInstruments} from "./SwitchInstruments.jsx";
import {Styles} from "./Styles.jsx";
import {DrumKeyboard} from "./InstrumentKeyboards.jsx";
import {PianoKeyboard} from "./InstrumentKeyboards.jsx";
import {SynthKeyboard} from "./InstrumentKeyboards.jsx";
import {KeyboardKey} from "./KeyboardKey.jsx";

export class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			// isPlaying: false,
			instrument: "piano"
		};
		this.changeInstrument = this.changeInstrument.bind(this);
	}
	// onPlay(played){
	// 	this.setState({
	// 		isPlaying: played
	// 	});
	// }
	
	changeInstrument(newInstrument){
		this.setState({
			instrument: newInstrument
		});
	}

	render() {
		switch (this.state.instrument) {
			case "piano":
				return (
					<div style={Styles.image}>
					<SwitchInstruments instrument={this.state.instrument} onClick={this.changeInstrument}/>
					<PianoKeyboard />
					</div>
					);
				break;
			case "drums":
				return (
					<div style={Styles.image}>
					<SwitchInstruments instrument={this.state.instrument} onClick={this.changeInstrument}/>
					<DrumKeyboard />
					</div>
					);
				break;
			case "synth":
				return (
					<div style={Styles.image}>
					<SwitchInstruments instrument={this.state.instrument} onClick={this.changeInstrument}/>
					<SynthKeyboard />
					</div>
					);
		}
	}
}



