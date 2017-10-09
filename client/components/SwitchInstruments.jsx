import {DrumKeyboard} from "./InstrumentKeyboards.jsx"
import {PianoKeyboard} from "./InstrumentKeyboards.jsx"
import {SynthKeyboard} from "./InstrumentKeyboards.jsx"
import {SetInstrument} from "./SetInstrument.jsx"

export class SwitchInstruments extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			instrument: "piano"
		};
		this.setPiano = this.setPiano.bind(this);
		this.setDrums = this.setDrums.bind(this);
		this.setSynth = this.setSynth.bind(this);
		
	}
		
		

		setPiano(){
			this.setState({
				instrument: "piano"
			});
		}

		setDrums(){
			this.setState({
				instrument: "drums"
			});
		}

		setSynth(){
			this.setState({
				instrument: "synth"
			});
		}

	render() {
		console.log("Current state: " + this.state.instrument);
		return (
			<div>
				<button instrument="piano" onClick={this.setPiano}> Piano </button>
				<button instrument="drums" onClick={this.setDrums}> Drums </button>
				<button instrument="synth" onClick={this.setSynth}> Synth </button>

				<SetInstrument instrument={this.state.instrument}/>
				<SaveSounds instrument={this.state.instrument} />
			</div>
			)

		
	}
}


















