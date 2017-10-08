import {KeyboardKey} from "./KeyboardKey.jsx";


export class DrumKeyboard extends React.Component {
	constructor(props) {
		super(props);

		this.state = {};
		// this.setAudioFile = this.setAudioFile.bind(this);
	}


	// setAudioFile(event) {
	// 	let audioFile = "./"
	// 	switch(event.key) {
	// 		case "a":
	// 		audioFile = "./sounds/drums/clap.wav";
	// 		break;
	// 		case "s":
	// 		audioFile = "./sounds/drums/hihat.wav";
	// 		break;
	// 		default: console.log('default');

	// 		break;
	// 	}


	// }

	render(){
		const styles = {
			keys: {
				display: 'flex',
				flex: 1,
				alignItems: 'center',
				justifyContent: 'center',
				flexDirection: 'row',
				height: 150,
				paddingTop: 250,
				paddingBottom: 300,
			}
		}

		return (
			<div style={styles.keys}>
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
		)
	}

}