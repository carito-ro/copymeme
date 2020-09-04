import React from 'react';
import './login.scss.scss';
class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            islogActive: props.islogActive,
        };
    }
    render() {
        return (
            <div classname="modal-dialog modal-dialog-scrollable">
                ...
            </div>
        );
    }
}

export default Login;
