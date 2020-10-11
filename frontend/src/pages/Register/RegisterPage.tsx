import React from 'react';
import { withRouter } from 'react-router';
import './RegisterPage.scss';
import { RouteComponentProps } from 'react-router-dom';
import Register from '../../components/Register/Register';

interface Props extends RouteComponentProps {

}

interface State {
}

class RegisterPage extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div className="RegisterPage">
                <Register />
            </div>
        );
    }
}

export default withRouter(RegisterPage); 