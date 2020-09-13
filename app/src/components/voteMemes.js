import React from 'react';
import '../assets/css/styles.scss';
import { userContext } from '../userContext';

class VoteMemes extends React.Component {
    render() {
        return (
            <userContext.Consumer>{
                ({ authenticated, logout }) => {
                    if (authenticated) {
                        return (<div className="col-4 d-flex justify-content-end">
                            <button className="btn btn-vote-up mr-1"><i className="fa fa-thumbs-up"></i></button>
                            <button className="btn btn-vote-down"><i className="fa fa-thumbs-down"></i></button>
                        </div>);
                    }
                }
            }</userContext.Consumer>
        );
    }
}

export default VoteMemes;
