import {Styles} from "./Styles.jsx";

export class SwitchInstruments extends React.Component {
	constructor(props){
		super(props);

		this.handleClick = this.handleClick.bind(this);	
	}
	
	handleClick(event){
		const instrument = event.target.value;
		this.props.onClick(instrument);
	}

	render(){
		return (
			<div>
				<button value="piano" onClick={this.handleClick} style={Styles.button}> Piano </button>
				<button value="drums" onClick={this.handleClick} style={Styles.button}> Drums </button>
				<button value="synth" onClick={this.handleClick} style={Styles.button}> Synth </button>
			</div>
			);	
	}
}


















