import React, { Component, useState } from 'react';
import PropTypes from 'prop-types';
import RBRow from 'react-bootstrap/Row';
import RBCol from 'react-bootstrap/Col';
import RBCard from 'react-bootstrap/Card';
import Collapse from 'react-bootstrap/Collapse';
import Badge from 'react-bootstrap/Badge';

/**
 * ExampleComponent is an example component.
 * It takes a property, `label`, and
 * displays it.
 * It renders an input with the property `value`
 * which is editable by the user.
 */
const RoundInfoRow = React.forwardRef((props, ref) => {

    const {id, class_name, data, is_open, setProps, loading_state} = props;

    // TODO check for empty data
    if (data === undefined) {
        return (
            <div/>
        );
    }

    const results = data.games.map(x => x.result);
    const color = (results[results.length - 1] === 'w') ? 'bg-win' : (results[results.length - 1] === 'l') ? 'bg-loss' : 'bg-tie';

    const header_icons = data.opponent.src.map((x, index) => {
        return (
            <img
                key={`image-${index}`}
                src={x}
                className='me-1'
                style={{maxHeight: '35px'}}
            />
        )
    })

    const games = data.games.map(x => {
        const tags = x.tags.map(x => {
            return (
                <Badge
                    key={x}
                    className='me-1 border'
                    text='dark'
                    bg='light'
                >
                    {x}
                </Badge>
            )
        })
        return (
            <RBCard
                key={`game-${x.game}`}
                className='border-0 px-2 py-1 bg-transparent'
            >
                <div>
                    <strong key='game-text'>{`G${x.game}`}</strong>
                    <Badge
                        key='game-result'
                        className='ms-2 rounded-circle font-monospace'
                        bg={x.result === 'w' ? 'success' : x.result === 'l' ? 'primary': 'secondary'}
                    >
                        {x.result.toUpperCase()}
                    </Badge>
                    <Badge
                        key='game-flip'
                        className={`ms-2 rounded-circle font-monospace ${x.flip === 1 ? 'border-0' : 'border'}`}
                        text={x.flip === 1 ? 'light' : 'dark'}
                        bg={x.flip === 1 ? 'dark' : 'light'}
                    >
                        {x.flip}
                    </Badge>
                    <div
                        key='game-tags'
                        className={tags.length === 0 ? 'd-none' : ''}
                    >
                        {tags}
                    </div>
                    <small
                        key='game-notes'
                        className={x.notes === 0 ? 'd-none' : ''}
                    >
                        {x.notes}
                    </small>
                </div>
            </RBCard>
        )
    })

    return (
        <RBRow className={`${color} g-0 ${class_name}`}>
            <RBCol
                xs={12}
                className='pe-0'
            >
                <RBCard className='d-flex flex-row align-items-center px-1'>
                    {data.round}
                    <h4 className='ms-2 my-2'>
                        <span key='opp-icons'>{header_icons}</span>
                        <span key='opp-deck'>{data.opponent.name}</span>
                    </h4>
                    <span className='ms-4'>{results.join('').toUpperCase()}</span>
                </RBCard>
                <Collapse in={is_open}>
                    <div ref={ref}>
                        {games}
                    </div>
                </Collapse>
            </RBCol>
        </RBRow>
    );
});

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
     * Whether collapse is currently open.
     */
    is_open: PropTypes.bool,

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

export default RoundInfoRow;
