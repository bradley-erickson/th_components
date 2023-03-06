import React, {Component} from 'react';
import PropTypes from 'prop-types';

/**
 * A SwitchToggle component that can be toggled on or off.
 *
 * @component
 * @param {string} value - The current value of the component.
 * @param {string} name - The name of the component.
 * @param {function} onChange - A function that is called when the component is changed.
 * @param {string} [onText="On"] - The text to display when the component is in the on position.
 * @param {string} [offText="Off"] - The text to display when the component is in the off position.
 * @param {string} [onColor="green"] - The color to display when the component is in the on position.
 * @param {string} [offColor="red"] - The color to display when the component is in the off position.
 */
export default class SwitchToggle extends Component {
    constructor(props) {
        super(props);
        this.isOn = props.value === props.onText;
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.isOn = !this.isOn;
        this.props.onChange(this.isOn ? this.props.onText : this.props.offText);
    }

    render() {
        const {onText, offText, onColor, offColor} = this.props;
        const text = this.isOn ? onText : offText;
        const bgColor = this.isOn ? onColor : offColor;
        return (
            <div
                className={`toggle-switch ${this.isOn ? 'on' : 'off'}`}
                onClick={this.handleClick}
                style={{backgroundColor: bgColor}}
            >
                <div className="toggle-switch-handle"></div>
                <div className="toggle-switch-text">{text}</div>
            </div>
        );
    }
}

SwitchToggle.defaultProps = {
    onText: 'On',
    offText: 'Off',
    onColor: 'green',
    offColor: 'red',
};

SwitchToggle.propTypes = {
    /** The current value of the switch */
    value: PropTypes.string.isRequired,
    /** The name attribute of the radio buttons */
    name: PropTypes.string.isRequired,
    /** A function to be called when the switch is toggled */
    onChange: PropTypes.func.isRequired,
    /** The text to display when the switch is on */
    onText: PropTypes.string,
    /** The text to display when the switch is off */
    offText: PropTypes.string,
    /** The color of the switch when it is on */
    onColor: PropTypes.string,
    /** The color of the switch when it is off */
    offColor: PropTypes.string,
};
