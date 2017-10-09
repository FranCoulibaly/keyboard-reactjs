import {SwitchInstruments} from "./SwitchInstruments.jsx"
import {DrumKeyboard} from "./InstrumentKeyboards.jsx"
import {PianoKeyboard} from "./InstrumentKeyboards.jsx"
import {SynthKeyboard} from "./InstrumentKeyboards.jsx"

export class SetInstrument extends React.Component {
	constructor(props) {
		super(props);


	}
	render(){
		console.log(this.props.instrument);
			switch (this.props.instrument) {
				case "piano":
					return <PianoKeyboard />
					break;
				case "drums":
					return <DrumKeyboard />
					break;
				case "synth":
					return <SynthKeyboard />
			}
		}

}