import React, {Component} from 'react';
import PropTypes from 'prop-types';

import SimpleGameRow from './SimpleGameRow';

export default class EditableTable extends Component {
    constructor(props) {
        super(props);

        const uniqueTags = props.data.reduce((accumulator, currentObject) => {
            const allTags = [...currentObject.p1Tags, ...currentObject.p2Tags];
            const uniqueTagsInObject = new Set(allTags);
            return [...accumulator, ...uniqueTagsInObject];
        }, []);

        let savedData;
        try {
            savedData = JSON.parse(localStorage.getItem('editabletable-data'));
        } catch (error) {
            console.error('Error parsing saved data:', error);
        }

        this.state = {
            data: savedData || props.data,
            editIndex: -1,
            tagOptions: uniqueTags,
        };
        this.handleAddRow = this.handleAddRow.bind(this);
        this.handleClear = this.handleClear.bind(this);
        this.handleSaveRow = this.handleSaveRow.bind(this);
        this.handleCancelRow = this.handleCancelRow.bind(this);
        this.handleEditRow = this.handleEditRow.bind(this);
        this.handleDeleteRow = this.handleDeleteRow.bind(this);
    }

    componentDidUpdate() {
        const { data } = this.state;
        localStorage.setItem('editabletable-data', JSON.stringify(data));
    }

    handleAddRow() {
        const {data} = this.state;
        const newData = [
            ...data,
            {winner: 'P1', first: 'P1', p1Tags: [], p2Tags: []},
        ];
        this.setState({data: newData, editIndex: newData.length - 1});
    }

    handleClear() {
        const confirmed = window.confirm('Are you sure you want to do this?');
        if (confirmed) {
            this.setState({data: [], editIndex: -1});
        }
    }

    handleSaveRow(index, newData) {
        const {data, tagOptions} = this.state;
        const updatedData = [...data];
        updatedData[index] = newData;

        const newTagOptions = [...tagOptions];
        newData.p1Tags.forEach((tag) => {
            if (!newTagOptions.includes(tag)) {
                newTagOptions.push(tag);
            }
        });
        newData.p2Tags.forEach((tag) => {
            if (!newTagOptions.includes(tag)) {
                newTagOptions.push(tag);
            }
        });
        this.props.setProps({data: updatedData});
        this.setState({
            data: updatedData,
            editIndex: -1,
            tagOptions: newTagOptions,
        });
    }

    handleCancelRow() {
        this.setState({editIndex: -1});
    }

    handleEditRow(index) {
        this.setState({editIndex: index});
    }

    handleDeleteRow(index) {
        const confirmed = window.confirm('Are you sure you want to do this?');
        if (confirmed) {
            const {data} = this.state;
            const updatedData = [
                ...data.slice(0, index),
                ...data.slice(index + 1),
            ];
            this.setState({data: updatedData, editIndex: -1});
        }
    }

    render() {
        const {data, editIndex, tagOptions} = this.state;
        const {id, class_name, p1Color, p2Color} = this.props;

        return (
            <div id={id} className={class_name || ''}>
                <table className="editabletable">
                    <tbody>
                        {data.map((row, index) => (
                            <SimpleGameRow
                                key={index}
                                index={index}
                                rowData={row}
                                tagOptions={tagOptions}
                                isEditMode={index === editIndex}
                                onSave={this.handleSaveRow}
                                onCancel={this.handleCancelRow}
                                onEdit={this.handleEditRow}
                                onDelete={this.handleDeleteRow}
                                p1Color={p1Color}
                                p2Color={p2Color}
                            />
                        ))}
                    </tbody>
                </table>
                <button className="btn" onClick={this.handleAddRow}>
                    <i className="fas fa-plus me-1" />
                    Add Row
                </button>
                <button className="btn" onClick={this.handleClear}>
                    <i className="fas fa-trash me-1" />
                    Clear Data
                </button>
            </div>
        );
    }
}

EditableTable.defaultProps = {
    p1Color: 'red',
    p2Color: 'blue',
};

EditableTable.propTypes = {
    /**
     * The ID used to identify this component in Dash callbacks.
     */
    id: PropTypes.string,
    /**
     * Classes for the outer most card.
     */
    class_name: PropTypes.string,
    /** An array of objects representing the rows of the table */
    data: PropTypes.arrayOf(
        PropTypes.shape({
            /** The name of the winner */
            winner: PropTypes.string,
            /** The name of the player that went first */
            first: PropTypes.string,
            /** An array of tags associated with player 1 */
            p1Tags: PropTypes.arrayOf(PropTypes.string),
            /** An array of tags associated with player 2 */
            p2Tags: PropTypes.arrayOf(PropTypes.string),
        })
    ),
    /**
     * Dash-assigned callback that should be called to report property changes
     * to Dash, to make them available for callbacks.
     */
    setProps: PropTypes.func,

    /** Color associated with P1 */
    p1Color: PropTypes.string,
    /** Color associated with P2 */
    p2Color: PropTypes.string,
};
