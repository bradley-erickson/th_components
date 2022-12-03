import React, { Component, useState } from 'react';
import PropTypes from 'prop-types';
import RBRow from 'react-bootstrap/Row';
import RBCol from 'react-bootstrap/Col';
import RBCard from 'react-bootstrap/Card';
import RBButton from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';

/**
 * ExampleComponent is an example component.
 * It takes a property, `label`, and
 * displays it.
 * It renders an input with the property `value`
 * which is editable by the user.
 */
export default class RoundInfoRow extends Component {
    render() {
        const [open, setOpen] = useState(false);

        const {id, class_name, data, setProps, loading_state} = this.props;
        const results = [data.game1.result, data.game2.result, data.game3.result].filter(x => x);
        const color = (results[results.length - 1] === 'w') ? 'bg-win' : (results[results.length - 1] === 'l') ? 'bg-loss' : 'bg-tie';
        return (
            <RBRow className={`${color} w-100 me-0`}>
                <RBCol xs={12}>
                    <RBCard>
                        <RBButton
                            onClick={() => setOpen(!open)}
                            aria-controls={`${id}-collapse`}
                            aria-expanded={open}
                        >
                            Click
                        </RBButton>
                    </RBCard>
                    <Collapse in={open} dimension='width'>
                        <div id={`${id}-collapse`}>
                            Inside!
                        </div>
                    </Collapse>
                </RBCol>
            </RBRow>
        );
    }
}

RoundInfoRow.defaultProps = {};

RoundInfoRow.propTypes = {
    /**
     * The ID used to identify this component in Dash callbacks.
     */
    id: PropTypes.string,

    /**
     * Classes for the outer most card.
     */
    class_name: PropTypes.string,

    /**
     * The data displayed on the card.
     */
    data: PropTypes.object,

    /**
     * Dash-assigned callback that should be called to report property changes
     * to Dash, to make them available for callbacks.
     */
    setProps: PropTypes.func,

    /**
     * Object that holds the loading state object coming from dash-renderer
     */
    loading_state: PropTypes.shape({
      /**
       * Determines if the component is loading or not
       */
      is_loading: PropTypes.bool,
      /**
       * Holds which property is loading
       */
      prop_name: PropTypes.string,
      /**
       * Holds the name of the component that is loading
       */
      component_name: PropTypes.string
    })
};
