import SwitchInstruments from "./SwitchInstruments.jsx"
import App from "./App.jsx"

export class SaveSounds extends React.Component {
	constructor(props) {
		super(props);
		this.onKeyPlay = this.onKeyPlay.bind(this);

		this.state = {
			isRecording: false,
			recording: []
		};
	}


	onKeyPlay(){

		
		this.state.recording.push(this.props.keyPressed);
		this.setState({
			isRecording: true,
			recording: [this.props.keyPressed]
		});	
		console.log("new array: " + this.state.recording);
		return this.state.recording;
	}

	render() {
		return (
			<button 
			)
	}

}