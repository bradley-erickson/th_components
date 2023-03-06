/* eslint no-magic-numbers: 0 */
import React, {Component} from 'react';

// import { RoundInfoRow } from '../lib';
import EditableTable from '../lib/components/EditableTable.react';

import './styles.css';
import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {

    constructor() {
        super();
        this.state = {
            value: ''
        };
        this.setProps = this.setProps.bind(this);
    }

    setProps(newProps) {
        this.setState(newProps);
    }

    render() {
        return (
            <div>
                <EditableTable
                    data={[{winner: 'P1', first: 'P2', p1Tags: ['bro'], p2Tags: ['bro2']}]}
                    tagOptions={[]}
                    setProps={this.setProps}
                />
            </div>
        )
    }
}

export default App;
