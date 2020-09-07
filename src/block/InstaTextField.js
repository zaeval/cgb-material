import React from 'react';

import {Chip, ChipSet} from '@material/react-chips';
import TopAppBar from '@material/react-top-app-bar';
import TextField, {Input, HelperText} from '@material/react-text-field';
import Button from '@material/react-button';
import MaterialIcon from '@material/react-material-icon';
import {Body2, Headline6} from '@material/react-typography';

class Feedback extends React.Component {
	state = {
		feedback: '',
		selectedFeedbackChips: [],
	};

	render() {
		return (
			<div>
				<main className='feedback-page mdc-top-app-bar--fixed-adjust'>
					<div className='feedback-page__content'>
						<img
							className='feedback-logo'
							src='./assets/red_roses_logo.svg'
							alt='red roses logo'
						/>
						{this.renderMessage()}
						<ChipSet
							filter
							handleSelect={(selectedFeedbackChips) => this.setState({selectedFeedbackChips})}
						>
							<Chip id='fast' label='Fast Delivery'/>
							<Chip id='great_flowers' label='Great Flowers'/>
							<Chip id='nice_courier' label='Nice Courier'/>
							<Chip id='easy_order' label='Easy to Order'/>
						</ChipSet>
						{this.renderFeedbackTextField()}
						{this.renderSubmit()}
					</div>
				</main>
			</div>
		);
	}

	renderTopAppBar() {
		return (
			<TopAppBar
				title='Feedback'
				navigationIcon={<MaterialIcon
					icon='close'
					onClick={() => console.log('close feedback surface')}
				/>}
			/>
		);
	}

	renderMessage() {
		return (
			<div>
				<Headline6 className='mdc-theme--primary' tag='h2'>
					Thanks for spreading joy with Red Roses
				</Headline6>
				<Body2 className='message__subheader'>
					We would love to hear about your ordering experience.
				</Body2>
			</div>
		);
	}

	renderFeedbackTextField() {
		const helperText = (
			<HelperText persistent>
				Don&apos;t worry feedback is never shared with couriers
			</HelperText>
		);
		return (
			<div className='feedback-text-field__container'>
				<TextField
					label='Additional thoughts...'
					className='feedback-text-field'
					trailingIcon={<MaterialIcon icon='edit' />}
					helperText={helperText}
					outlined
				>
					<Input
						value={this.state.feedback}
						onChange={(evt) => this.setState({feedback: evt.target.value})}
					/>
				</TextField>
			</div>
		);
	}

	renderSubmit() {
		return (
			<Button
				raised
				onClick={() => console.log('submit!')}
			>
				Submit
			</Button>
		);
	}
}

export default Feedback;
