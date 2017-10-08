
import {DrumKeyboard} from "./InstrumentKeyboards.jsx"
import {KeyboardKey} from "./KeyboardKey.jsx"

export class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			instrument: props.drums,
			recording: false,
			playingBack: false
		};

		// this.switchInstrument = this.switchInstrument.bind(this);
		// this.recordSound = this.recordSound.bind(this);
		// this.playBackSong = this.playBackSong.bind(this);
		// this.discardSong = this.discardSong.bind(this);
		// this.saveSong = this.saveSong.bind(this);

	}

	render() {

		const styles = {
			image: {
				backgroundImage: 'url(' + "./images/815.jpg" + ')',
				backgroundSize: "cover",
				margin: 0,

			}
		}
		return (<div style={styles.image}> 
			<DrumKeyboard />
			</div>)
	}
}



