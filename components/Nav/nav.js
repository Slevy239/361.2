import React, { Component } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';

import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import HomeIcon from '@mui/icons-material/Home';
import SettingsIcon from '@mui/icons-material/Settings';



class Nav extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {

        return (
            <div>
                <Box sx={{ flexGrow: 1 }}>
                    <AppBar position="static">
                        <Toolbar>
                           
                            <Button color="inherit" href='/app'><HomeIcon></HomeIcon></Button>
                            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                                TaskApp
                            </Typography>
                            <Button color="inherit" href='/settings'><SettingsIcon/></Button>

                        </Toolbar>
                    </AppBar>
                </Box> <br></br>
            </div>
        )
    }
}
export default Nav