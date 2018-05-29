
import {SwitchInstruments} from "./SwitchInstruments.jsx";
import {Styles} from "./Styles.jsx";
import {KeyboardKey} from "./KeyboardKey.jsx";

export class App extends React.Component {
	constructor(props){
		super(props);

		this.state = {
			instrument: "piano",
		};
		this.changeInstrument = this.changeInstrument.bind(this);
	}

	changeInstrument(newInstrument){
		this.setState({
			instrument: newInstrument
		});
	}

	render(){
		switch (this.state.instrument){
			case "piano":
				return (
					<div>
						<SwitchInstruments instrument={this.state.instrument} onClick={this.changeInstrument}/>
						<div style={Styles.keys} >
							<KeyboardKey keyChar="a" sound="c" audioFile="./sounds/piano/grandpianoC-a.wav" />
							<KeyboardKey keyChar="s" sound="d" audioFile="./sounds/piano/grandpianoD-s.wav" />
							<KeyboardKey keyChar="d" sound="e" audioFile="./sounds/piano/grandpianoE-d.wav" />
							<KeyboardKey keyChar="f" sound="f" audioFile="./sounds/piano/grandpianoF-f.wav" />
							<KeyboardKey keyChar="g" sound="g" audioFile="./sounds/piano/grandpianoG-g.wav" />
							<KeyboardKey keyChar="h" sound="a" audioFile="./sounds/piano/grandpianoA-h.wav" />
							<KeyboardKey keyChar="j" sound="b" audioFile="./sounds/piano/grandpianoB-j.wav" />
							<KeyboardKey keyChar="k" sound="c" audioFile="./sounds/piano/grandpianoC-k.wav" />
							<KeyboardKey keyChar="l" sound="d" audioFile="./sounds/piano/grandpianoD-l.wav" />
						</div>
					</div>
				);
				break;
			case "drums":
				return (
					<div>
						<SwitchInstruments instrument={this.state.instrument} onClick={this.changeInstrument}/>
						<div style={Styles.keys}>
							<KeyboardKey keyChar="a" sound="clap" audioFile="./sounds/drums/clap.wav" />
							<KeyboardKey keyChar="s" sound="hihat" audioFile="./sounds/drums/hihat.wav" />
							<KeyboardKey keyChar="d" sound="kick" audioFile="./sounds/drums/kick.wav" />
							<KeyboardKey keyChar="f" sound="openhat" audioFile="./sounds/drums/openhat.wav" />
							<KeyboardKey keyChar="g" sound="boom" audioFile="./sounds/drums/boom.wav" />
							<KeyboardKey keyChar="h" sound="ride" audioFile="./sounds/drums/ride.wav" />
							<KeyboardKey keyChar="j" sound="snare" audioFile="./sounds/drums/snare.wav" />
							<KeyboardKey keyChar="k" sound="tom" audioFile="./sounds/drums/tom.wav" />
							<KeyboardKey keyChar="l" sound="tink" audioFile="./sounds/drums/tink.wav" />
						</div>
					</div>
				);
				break;
			case "synth":
				return (
					<div>
						<SwitchInstruments instrument={this.state.instrument} onClick={this.changeInstrument}/>
						<div style={Styles.keys}>
							<KeyboardKey keyChar="a" sound="c" audioFile="./sounds/synth/synthC-a.wav" />
							<KeyboardKey keyChar="s" sound="d" audioFile="./sounds/synth/synthD-s.wav" />
							<KeyboardKey keyChar="d" sound="e" audioFile="./sounds/synth/synthE-d.wav" />
							<KeyboardKey keyChar="f" sound="f" audioFile="./sounds/synth/synthF-f.wav" />
							<KeyboardKey keyChar="g" sound="g" audioFile="./sounds/synth/synthG-g.wav" />
							<KeyboardKey keyChar="h" sound="a" audioFile="./sounds/synth/synthA-h.wav" />
							<KeyboardKey keyChar="j" sound="b" audioFile="./sounds/synth/synthB-j.wav" />
							<KeyboardKey keyChar="k" sound="c" audioFile="./sounds/synth/synthC-k.wav" />
							<KeyboardKey keyChar="l" sound="d" audioFile="./sounds/synth/synthD-l.wav" />
						</div>
					</div>
				);
		}
	}
}



