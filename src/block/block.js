/**
 * BLOCK: cgb-material
 *
 * Registering a basic block with Gutenberg.
 * Simple block, renders and saves the same content without any interactivity.
 */

//  Import CSS.
import './editor.scss';
import './style.scss';
import MaterialIcon from "@material/react-material-icon";
import TextField, {Input} from "@material/react-text-field";
import React from "react";

const { __ } = wp.i18n; // Import __() from wp.i18n
const { registerBlockType } = wp.blocks; // Import registerBlockType() from wp.blocks

/**
 * Register: aa Gutenberg Block.
 *
 * Registers a new block provided a unique name and an object defining its
 * behavior. Once registered, the block is made editor as an option to any
 * editor interface where blocks are implemented.
 *
 * @link https://wordpress.org/gutenberg/handbook/block-api/
 * @param  {string}   name     Block name.
 * @param  {Object}   settings Block settings.
 * @return {?WPBlock}          The block, if it has been successfully
 *                             registered; otherwise `undefined`.
 */
registerBlockType( 'cgb/block-cgb-material', {
	// Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.
	title: __( '인스타 폰트' ), // Block title.
	icon: 'instagram', // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.
	category: 'common', // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.
	keywords: [
		__( 'cgb-material' ),
		__( 'CGB Example' ),
		__( 'create-guten-block' ),
	],

	/**
	 * The edit function describes the structure of your block in the context of the editor.
	 * This represents what the editor will render when the block is used.
	 *
	 * The "edit" property must be a valid function.
	 *
	 * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/
	 *
	 * @param {Object} props Props.
	 * @returns {Mixed} JSX Component.
	 */
	edit: class extends Component {
		constructor(props) {
			super(...arguments);
			this.props = props;
			this.state = {
				feedback: '',
				selectedFeedbackChips: [],
			};
		}
		// Creates a <p class='wp-block-cgb-block-cgb-material'></p>.
		render() {
			const { className, attributes: { blockTitle = '' } = {} } = this.props;
			return (

				<div className={className}>
					<TextField
						label='Additional thoughts...'
						className='feedback-text-field'
						trailingIcon={<MaterialIcon icon='edit'/>}
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
	},

	/**
	 * The save function defines the way in which the different attributes should be combined
	 * into the final markup, which is then serialized by Gutenberg into post_content.
	 *
	 * The "save" property must be specified and must be a valid function.
	 *
	 * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/
	 *
	 * @param {Object} props Props.
	 * @returns {Mixed} JSX Frontend HTML.
	 */
	save: class extends Component {
		constructor(props) {
			super(...arguments);
			this.props = props;
			this.state = {
				feedback: '',
				selectedFeedbackChips: [],
			};
		}
		// Creates a <p class='wp-block-cgb-block-cgb-material'></p>.
		render() {
			const { className, attributes: { blockTitle = '' } = {} } = this.props;

			return (
				<div className={className}>
					<TextField
						label='Additional thoughts...'
						className='feedback-text-field'
						trailingIcon={<MaterialIcon icon='edit'/>}
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
	},
} );
