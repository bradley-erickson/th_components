import React, {Component} from 'react';
import PropTypes from 'prop-types';

import TagInput from './TagInput.react';
import SwitchToggle from './SwtichToggle.react';

export default class SimpleGameRow extends Component {
    constructor(props) {
        super(props);

        const {winner, first, p1Tags, p2Tags} = props.rowData;

        this.state = {
            winner,
            first,
            p1Tags,
            p2Tags,
        };
        this.handleWinner = this.handleWinner.bind(this);
        this.handleCoin = this.handleCoin.bind(this);
        this.handleAddP1Tag = this.handleAddP1Tag.bind(this);
        this.handleAddP2Tag = this.handleAddP2Tag.bind(this);
        this.handleRemoveP1Tag = this.handleRemoveP1Tag.bind(this);
        this.handleRemoveP2Tag = this.handleRemoveP2Tag.bind(this);
        this.handleSave = this.handleSave.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
    }

    componentDidUpdate(prevProps) {
        const {winner, first, p1Tags, p2Tags} = this.props.rowData;
        if (prevProps.rowData !== this.props.rowData) {
            this.setState({winner, first, p1Tags, p2Tags});
        }
    }

    handleWinner(winner) {
        this.setState({winner: winner});
    }

    handleCoin(flip) {
        this.setState({first: flip});
    }

    handleAddP1Tag(newTag) {
        const {p1Tags} = this.state;
        const newTags = [...new Set([...p1Tags, newTag])];
        this.setState({p1Tags: newTags});
    }

    handleAddP2Tag(newTag) {
        const {p2Tags} = this.state;
        const newTags = [...new Set([...p2Tags, newTag])];
        this.setState({p2Tags: newTags});
    }

    handleRemoveP1Tag(remTag) {
        const {p1Tags} = this.state;
        const updatedValue = p1Tags.filter((t) => t !== remTag);
        this.setState({p1Tags: updatedValue});
    }
    handleRemoveP2Tag(remTag) {
        const {p2Tags} = this.state;
        const updatedValue = p2Tags.filter((t) => t !== remTag);
        this.setState({p2Tags: updatedValue});
    }

    handleSave() {
        const {index, onSave} = this.props;
        const {winner, first, p1Tags, p2Tags} = this.state;
        onSave(index, {winner, first, p1Tags, p2Tags});
    }

    handleCancel() {
        const {rowData, onCancel} = this.props;
        this.setState({
            winner: rowData.winner,
            first: rowData.first,
            p1Tags: rowData.p1Tags,
            p2Tags: rowData.p2Tags,
        });
        onCancel();
    }

    render() {
        const {
            index,
            rowData,
            tagOptions,
            isEditMode,
            onEdit,
            onDelete,
            p1Color,
            p2Color,
        } = this.props;
        const {winner, first, p1Tags, p2Tags} = this.state;

        return (
            <tr>
                <td className="w-100">
                    {isEditMode ? (
                        <>
                            <div className="editrow-toggle">
                                <span>Winner:</span>
                                <div className="ms-1 d-inline-block">
                                    <SwitchToggle
                                        onChange={this.handleWinner}
                                        name="winner"
                                        value={winner}
                                        onText="P1"
                                        offText="P2"
                                        onColor={p1Color}
                                        offColor={p2Color}
                                    />
                                </div>
                            </div>
                            <div className="editrow-toggle">
                                <span>Went first:</span>
                                <div className="ms-1 d-inline-block">
                                    <SwitchToggle
                                        onChange={this.handleCoin}
                                        name="first"
                                        value={first}
                                        onText="P1"
                                        offText="P2"
                                        onColor={p1Color}
                                        offColor={p2Color}
                                    />
                                </div>
                            </div>
                            <div className="d-flex row align-middle">
                                P1 tags:
                                <div className="ms-1 d-inline-block">
                                    <TagInput
                                        options={tagOptions}
                                        value={p1Tags}
                                        onChange={this.handleAddP1Tag}
                                        onRemove={this.handleRemoveP1Tag}
                                        color={p1Color}
                                    />
                                </div>
                            </div>
                            <div className="d-flex row align-middle">
                                P2 tags:
                                <div className="ms-1 d-inline-block">
                                    <TagInput
                                        options={tagOptions}
                                        value={p2Tags}
                                        onChange={this.handleAddP2Tag}
                                        onRemove={this.handleRemoveP2Tag}
                                        color={p2Color}
                                    />
                                </div>
                            </div>
                        </>
                    ) : (
                        `Game ${index+1} - ${rowData.winner}`
                    )}
                </td>
                <td className='w-auto text-nowrap'>
                    {isEditMode ? (
                        <>
                            <button
                                className="btn"
                                onClick={this.handleSave}
                                title="Save"
                            >
                                <i className="fas fa-save" />
                                <span className="ms-1 d-none d-lg-inline">
                                    Save
                                </span>
                            </button>
                            <button
                                className="btn"
                                onClick={this.handleCancel}
                                title="Cancel"
                            >
                                <i className="fas fa-times" />
                                <span className="ms-1 d-none d-lg-inline">
                                    Cancel
                                </span>
                            </button>
                        </>
                    ) : (
                        <>
                            <button
                                className="btn"
                                onClick={() => onEdit(index)}
                                title="Edit"
                            >
                                <i className="fas fa-edit" />
                                <span className="ms-1 d-none d-lg-inline">
                                    Edit
                                </span>
                            </button>
                            <button
                                className="btn"
                                onClick={() => onDelete(index)}
                                title="Delete"
                            >
                                <i className="fas fa-trash" />
                                <span className="ms-1 d-none d-lg-inline">
                                    Delete
                                </span>
                            </button>
                        </>
                    )}
                </td>
            </tr>
        );
    }
}

SimpleGameRow.defaultProps = {
    p1Color: '#d9534f',
    p2Color: '#f0ad4e',
};

SimpleGameRow.propTypes = {
    index: PropTypes.number,
    rowData: PropTypes.shape({
        winner: PropTypes.string,
        first: PropTypes.string,
        p1Tags: PropTypes.arrayOf(PropTypes.string),
        p2Tags: PropTypes.arrayOf(PropTypes.string),
    }),
    tagOptions: PropTypes.arrayOf(PropTypes.string),
    isEditMode: PropTypes.bool,
    onEdit: PropTypes.func,
    onDelete: PropTypes.func,
    onSave: PropTypes.func,
    onCancel: PropTypes.func,
    p1Color: PropTypes.string,
    p2Color: PropTypes.string,
};
