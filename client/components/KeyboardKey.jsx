import {Styles} from "./Styles.jsx";

export class KeyboardKey extends React.Component {
	constructor(props){
		super(props);

		this.handleKeyPress = this.handleKeyPress.bind(this);    
	}

	handleKeyPress(event){
		const audio = new Audio(this.props.audioFile);

		if (event.key === this.props.keyChar){
			audio.currentTime = 0;
			audio.play();
		 }	
	}

	componentDidMount(){
		document.addEventListener('keypress', this.handleKeyPress);
	}

	componentWillUnmount(){
		document.removeEventListener('keypress', this.handleKeyPress);
	}

	render(){
		return (
			<div >
				<div
				onKeyPress={(event) => this.handleKeyPress(event)}
				style={Styles.key}>
					<kbd style={Styles.kbd}>{this.props.keyChar}</kbd>
					<span style={Styles.sound}>{this.props.sound}</span>
				</div>
			</div>
		);
	}
}
					

