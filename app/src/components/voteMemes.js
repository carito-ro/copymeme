import React from 'react';
import '../assets/css/styles.scss';
import { userContext } from '../userContext';

class VoteMemes extends React.Component {
    constructor(props) {
        super(props);

    }
    handleVote = (event) => {
        event.preventDefault();
        this.props.submitVote(
            {
                //      author: this.context.user._id,
                type: event.target.value // 0 negativo 1 positivo
            });
    }
    render() {
        return (
            <userContext.Consumer>{
                ({ authenticated, logout }) => {
                    if (authenticated) {
                        return (<div className="col-4 d-flex justify-content-end">
                            <button className="btn btn-vote-up mr-1" onClick={this.handleVote} value="1"><i className="fa fa-thumbs-up"></i></button>
                            <button className="btn btn-vote-down" onClick={this.handleVote} value="0"><i className="fa fa-thumbs-down"></i></button>
                        </div>);
                    }
                }
            }</userContext.Consumer>
        );
    }
}

VoteMemes.contextType = userContext;
export default VoteMemes;
