import React from 'react';
import { withRouter } from 'react-router';
import './Login.scss';
import Button from '@material-ui/core/Button/Button';
import TextField from '@material-ui/core/TextField';
import { RouteComponentProps } from 'react-router-dom';
import Api from '../../utils/Api';

interface Props extends RouteComponentProps {

}

interface State {
    username: string;
    password: string;
}

class Login extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props);
        this.state = {
            username: "",
            password: ""
        }
    }

    loginButtonHandler = () => {

        if (!this.state.username?.length || ! this.state.password?.length) {
            return;
        }

        Api.login({ username: this.state.username, password: this.state.password })
            .then(res => console.log('Login: ', res))
            .catch(err => console.error('Login error : ', err));
    }

    changeField = (event: any, field: String) => {

        switch (field) {
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

    render() {
        return (
            <div className="Login">
                <form className="LoginForm">

                    <TextField id="standard-basic"
                        label="Username/Email"
                        onChange={(e) => this.changeField(e, 'username')}
                    />

                    <TextField id="standard-basic"
                        label="Password"
                        onChange={(e) => this.changeField(e, 'password')}
                    />

                    <Button className="LoginFormButton"
                        variant="contained"
                        color="primary"
                        size="small"
                        onClick={this.loginButtonHandler}>
                        Login
                    </Button>
                    <Button className="LoginFormButtonBack"
                        variant="contained"
                        color="primary"
                        size="small"
                        onClick={(e) => this.props.history.push({
                            pathname: 'home'
                        })}>
                        Home
                    </Button>
                </form>
            </div>
        );
    }
}

export default withRouter(Login); 