import React from 'react';
import { withRouter } from 'react-router';
import './Register.scss';
import Button from '@material-ui/core/Button/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import { RouteComponentProps } from 'react-router-dom';
import { User } from '../../model/User';
import Api from '../../utils/Api';
import bcryptjs from 'bcryptjs';

interface Props extends RouteComponentProps {

}

interface State {
    firstName: string,
    lastName: string,
    address: string,
    email: string,
    username: string,
    password: string,
    open: boolean,
    message: string
}

class Register extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            address: '',
            email: '',
            username: '',
            password: '',
            open: false,
            message: '',
        }
    }

    confirmRegistration = () => {
        const userInfo: User = {
            firstName: this.state.firstName,
            lastname: this.state.lastName,
            username: this.state.username,
            password: this.state.password,
            address: this.state.address,
            email: this.state.email,
            roles: ['USER']
        };

        Api.isUserRegistered(userInfo)
            .then(res => {

                console.log('Is user registered: ', res);
                this.setState({
                    open: true,
                    message: "Username or email already in use",
                })
            }).catch(err => {

                if (err.response.status === 404) {

                    const saltRounds = 10;
                    bcryptjs.genSalt(saltRounds, (err, salt) => {
                        bcryptjs.hash(userInfo.password, salt, (err, hashedPassword) => {
                            userInfo.password = hashedPassword;
                            Api.registerNewUser(userInfo).then(res => {
                                console.log('User registered ', res);
                                this.setState({
                                    open: true,
                                    message: "User successfull registered",
                                });
                            }).catch(err => console.error('Register user error : ', err));
                        });
                    });
                }
            });
    }

    changeField = (event: any, field: String) => {

        switch (field) {
            case 'firstName':
                this.setState({
                    firstName: event.target.value
                })
                break;
            case 'lastName':
                this.setState({
                    lastName: event.target.value
                })
                break;
            case 'address':
                this.setState({
                    address: event.target.value
                })
                break;
            case 'email':
                this.setState({
                    email: event.target.value
                })
                break;
            case 'username':
                this.setState({
                    username: event.target.value
                })
                break;
            case 'password':
                this.setState({
                    password: event.target.value
                })
                break;

        }
    }

    handleClose = () => {
        this.setState({
            open: false,
        })
    };

    render() {
        return (
            <div className="Register">
                <form className="RegisterForm">

                    <TextField id="firstName"
                        label="First Name"
                        type="text"
                        value={this.state.firstName}
                        onChange={(e) => this.changeField(e, 'firstName')}
                    />

                    <TextField id="lastName"
                        label="Last Name"
                        type="text"
                        value={this.state.lastName}
                        onChange={(e) => this.changeField(e, 'lastName')}
                    />

                    <TextField id="address"
                        label="Address"
                        type="text"
                        value={this.state.address}
                        onChange={(e) => this.changeField(e, 'address')}
                    />

                    <TextField id="email"
                        label="Email"
                        type="email"
                        value={this.state.email}
                        onChange={(e) => this.changeField(e, 'email')}
                    />

                    <TextField id="username"
                        label="Username"
                        type="text"
                        value={this.state.username}
                        onChange={(e) => this.changeField(e, 'username')}
                    />

                    <TextField id="password"
                        label="Password"
                        type="password"
                        value={this.state.password}
                        onChange={(e) => this.changeField(e, 'password')}
                    />

                    <Button className="RegisterFormConfirmButton"
                        variant="contained"
                        color="primary"
                        size="small"
                        onClick={this.confirmRegistration}>
                        Confirm
                    </Button>

                    <Button className="RegisterPageFormClearButton"
                        variant="contained"
                        color="primary"
                        size="small"
                        onClick={(e) => this.setState({
                            firstName: '',
                            lastName: '',
                            address: '',
                            email: '',
                            username: '',
                            password: '',
                        })}>
                        Clear
                    </Button>

                    <Button className="RegisterPageFormBackButton"
                        variant="contained"
                        color="primary"
                        size="small"
                        onClick={(e) => this.props.history.push({
                            pathname: 'home'
                        })}>
                        Back
                    </Button>
                </form>

                <div className="RegisterPageDialogContainer">
                    <Dialog
                        open={this.state.open}
                        onClose={this.handleClose}
                        aria-labelledby="alert-dialog-title"
                        aria-describedby="alert-dialog-description"
                    >
                        <DialogContent>
                            <DialogContentText id="alert-dialog-slide-description">
                                {this.state.message}
                            </DialogContentText>
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={this.handleClose} color="primary">
                                Back
                            </Button>
                        </DialogActions>
                    </Dialog>
                </div>

            </div>
        );
    }
}

export default withRouter(Register); 