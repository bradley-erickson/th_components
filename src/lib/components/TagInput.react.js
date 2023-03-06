import React, {Component} from 'react';
import PropTypes from 'prop-types';

/**
 * A component for displaying and editing a list of tags.
 * 
 * @component
 * @param {Array} value - An array of tags to be displayed
 * @param {Array} options - An array of suggested tags for autocomplete
 * @param {Function} onChange - A function to be called when a new tag is added
 * @param {Function} onRemove - A function to be called when a tag is removed
 * @param {String} color - The background color of each tag
 */
export default class TagInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newTag: '',
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleAddTag = this.handleAddTag.bind(this);
        this.handleKeyDown = this.handleKeyDown.bind(this);
        this.handleRemoveTag = this.handleRemoveTag.bind(this);
    }

    handleChange(event) {
        this.setState({newTag: event.target.value});
    };

    handleAddTag(event) {
        const newTag = event.target.value.trim();
        if (newTag !== '' && !this.props.value.includes(newTag)) {
            event.preventDefault();
            this.props.onChange(newTag.trim());
            this.setState({newTag: ''});
        }
    };

    handleKeyDown(event) {
        const newTag = event.target.value.trim();
        if (
            event.key === 'Enter' &&
            newTag !== '' &&
            !this.props.value.includes(newTag)
        ) {
            event.preventDefault();
            this.props.onChange(newTag.trim());
            this.setState({newTag: ''});
        }
    };
    handleRemoveTag(tag) {
        this.props.onRemove(tag);
    };

    render() {
        const {value, options, color} = this.props;
        const {newTag} = this.state;
        return (
            <div className="taginput">
                {value.map((tag) => (
                    <span
                        key={tag}
                        className="tag"
                        style={{backgroundColor: color}}
                    >
                        {tag}
                        <button
                            className="fas fa-times"
                            onClick={() => this.handleRemoveTag(tag)}
                        />
                    </span>
                ))}
                <input
                    type="text"
                    value={newTag}
                    placeholder="Add tag"
                    onChange={this.handleChange}
                    onBlur={this.handleAddTag}
                    onKeyDown={this.handleKeyDown}
                    list="tagOptions"
                    className="input"
                />
                <datalist id="tagOptions" className="datalist">
                    {options.map((option) => (
                        <option key={option} value={option} />
                    ))}
                </datalist>
            </div>
        );
    }
}

TagInput.defaultProps = {
    color: 'blue'
}

TagInput.propTypes = {
    /** An array of tags to be displayed */
    value: PropTypes.arrayOf(PropTypes.string),
    /** An array of suggested tags for autocomplete */
    options: PropTypes.arrayOf(PropTypes.string),
    /** A function to be called when a new tag is added */
    onChange: PropTypes.func.isRequired,
    /** A function to be called when a tag is removed */
    onRemove: PropTypes.func.isRequired,
    /** The background color of each tag */
    color: PropTypes.string
};
