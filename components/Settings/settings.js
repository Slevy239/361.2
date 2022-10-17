import React, { Component } from 'react';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from '@mui/material';
import Nav from '../Nav/nav';


class Settings extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [

            ]

        }
    }
    saveSettings() {
        alert("Settings have been saved!");
    }

    deleteAll() {
        window.confirm("Are you sure you want to Delete all tasks?")
    }

    render() {

        return (
            <div>
                <Nav />
                <Card>
                    <CardContent>
                        <Typography variant="h5" component="div">
                            User Settings
                        </Typography>
                    </CardContent>
                </Card>
                <br />
                <FormControl>
                    <FormLabel>Notifications</FormLabel>
                    <RadioGroup>
                        <FormControlLabel value='yes' control={<Radio />} label='Yes' />
                        <FormControlLabel value='no' control={<Radio />} label='No' />

                    </RadioGroup>
                    <br></br>
                    <FormLabel>Display</FormLabel>
                    <RadioGroup>
                        <FormControlLabel value='dark' control={<Radio />} label='Dark' />
                        <FormControlLabel value='light' control={<Radio />} label='Light' />

                    </RadioGroup>

                </FormControl>
                <br />

                <div className='row'>
                    <Button onClick={this.saveSettings}>Save Settings</Button>
                </div>

                <div className='row'>
                    <Button color="error" onClick={this.deleteAll}>Delete All Tasks (this can't be undone) </Button>
                </div>

            </div>
        )
    }
}
export default Settings