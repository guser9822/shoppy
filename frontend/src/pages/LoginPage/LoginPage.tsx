import React from 'react';
import {withRouter } from 'react-router';
import './LoginPage.scss';
import Login from '../../components/Login/Login';
import { RouteComponentProps } from 'react-router-dom';

interface Props extends RouteComponentProps {

}

interface State {

}

class LoginPage extends React.Component<Props,State> {

    constructor(props: Props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div className="LoginPage">
                <Login />
            </div>
        );
    }
}

export default withRouter(LoginPage);

