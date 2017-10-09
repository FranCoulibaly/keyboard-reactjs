import SwitchInstruments from "./SwitchInstruments.jsx"
import 

export class SaveSounds extends React.Component {
	constructor(props) {
		super(props);

		this.state = [{
				instrument: this.props.instrument,
				keypressed: this.props.keypressed
				// timeStamp: null
				}];
		this.saveDown = this.saveDown.bind(this);
	}

	saveDown(){
		this.setState(prevState => {
			const oldArray = [prevState.instrument, prevState.keypressed];
			const newArray = oldArray.concat([{
				instrument: this.props.instrument,
				keypressed: this.props.keypressed
			}]);
		})
		return this.state;
	}
render() {
	console.log("new array:" + this.state)
	return (
		<button onClick={this.saveDown}> Save </button>
		)
}

}