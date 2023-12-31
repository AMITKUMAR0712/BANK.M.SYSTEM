import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Typography } from '@material-ui/core';
import axios from 'axios';

class Close extends Component {
    constructor(props) {
        super(props);
        this.state = {
            num: '',
            pin: '',
            transferee: ''
        };
    }

    render() {
        return (
            <>
                <div style={{ display: 'flex', marginTop: 60 }}>
                    <div style={{ flex: 1 }} />
                    <table>
                        <tr>
                            <td width={200}>
                                <Typography>Account Number*</Typography>
                            </td>
                            <td>
                                <TextField required value={this.state.num} onChange={e => this.setState({ num: e.target.value })} />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <Typography>PIN*</Typography>
                            </td>
                            <td>
                                <TextField type="password" required value={this.state.pin} onChange={e => this.setState({ pin: e.target.value })} />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <Typography>Transfer Account Number</Typography>
                            </td>
                            <td>
                                <TextField value={this.state.transferee} onChange={e => this.setState({ transferee: e.target.value })} />
                            </td>
                        </tr>
                    </table>
                    <div style={{ flex: 1 }} />
                </div>

                <div style={{ display: 'flex' }}>
                    <div style={{ flex: 1 }} />
                    <Button color='primary' onClick={async () => {
                        const response = await axios({
                            url: 'http://localhost:5000/close',
                            method: 'GET',
                            params: this.state
                        });

                        alert(response.data);
                    }} variant='contained' style={{ marginTop: 40 }}><Typography><b>Close Account</b></Typography></Button>
                    <div style={{ flex: 1 }} />
                </div>
            </>
        );
    }
}

export default Close;