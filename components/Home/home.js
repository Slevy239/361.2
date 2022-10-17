import React, { Component } from 'react';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';


class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
       
        return (
            <div>
                <Card>
                    <CardContent>
                        <Typography variant="h5" component="div">
                            Welcome To the Application
                        </Typography>
                    </CardContent>
                </Card>
                <Link to='/app'>
                    <Button variant="contained">Log In</Button>
                </Link>
                <Button variant='outlined'>Create Account</Button>
            </div>
        )
    }
}
export default Home