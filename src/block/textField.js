import React from 'react';

import TextField, {Input, HelperText} from '@material/react-text-field';
import MaterialIcon from '@material/react-material-icon';
class MTextField extends React.Component{
	constructor(props) {
		super(...arguments);
		this.props = props;
		this.state = {
			feedback: '',
			selectedFeedbackChips: [],
		};
	}
	render(){
		return(
			<TextField
				label='Additional thoughts...'
				className='feedback-text-field'
				trailingIcon={<MaterialIcon icon='edit'/>}
				helperText="hello"
				outlined
			>
				<Input
					value={this.state.feedback}
					onChange={(evt) => this.setState({feedback: evt.target.value})}
				/>
			</TextField>
		)
	}
}
export default MTextField;
