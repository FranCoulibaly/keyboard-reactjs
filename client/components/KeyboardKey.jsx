
export class KeyboardKey extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			isPlaying:false
		};

		this.handleKeyPress = this.handleKeyPress.bind(this);           
	}

	handleKeyPress(event) {
		console.log("KeyPress triggered: ", event.key);
				const audio = new Audio(this.props.audioFile);

		if (event.key === this.props.keyChar){
			audio.currentTime = 0;
			audio.play();
			this.setState({
				isPlaying: true
			});
		 }
	}

	componentDidMount(){
		document.addEventListener('keypress', this.handleKeyPress);

	}

	componentWillUnmount(){
		document.removeEventListener('keypress', this.handleKeyPress);
	}

	

	render() {
		const styles = {
			key: {
				border: 'solid white',
				borderRadius: .5,
				margin: 16,
				paddingTop: 16,
				paddingBottom: 8,
				width: 80,
				textAlign: 'center',
				color: 'white',
		
			},
			kbd: {
				display: 'block',
				fontSize: 50,
				textTransform: 'uppercase',
			},
			sound: {
				fontSize: 15,
				textTransform: 'uppercase',
				letterSpacing: 1.5,
				color: '#ffc600',
				fontFamily: 'sans-serif',
			}

		}
		return (
			<div >
				<div
				onKeyPress={(event) => this.handleKeyPress(event)}
				style={styles.key}>
					<kbd style={styles.kbd}>{this.props.keyChar}</kbd>
					<span style={styles.sound}>{this.props.sound}</span>
				</div>
			</div>
		);
	}
}


