import React from 'react';
import { withRouter } from 'react-router';
import './Home.scss';
import { RouteComponentProps } from 'react-router-dom';
import Button from '@material-ui/core/Button/Button';

interface Props extends RouteComponentProps {

}

interface State {

}

class Home extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div className="Home">
                <h1>Home Page</h1>
                <Button variant="contained"
                    color="primary"
                    size="small"
                    onClick={(e) => this.props.history.push({
                        pathname: 'login'
                    })}>
                    Login
                </Button>
                <Button variant="contained"
                    color="primary"
                    size="small"
                    onClick={(e) => this.props.history.push({
                        pathname: 'register'
                    })}>
                    Register
                </Button>
            </div>
        );
    }
}

export default withRouter(Home);

