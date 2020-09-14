import React from 'react';
import '../assets/css/styles.scss';
import { userContext } from '../userContext';
import AddVote from './addVote';

class VoteMemes extends React.Component {
    submitVote = (voto) => {
        if (voto) {
            console.log(voto);//Enviar meme
        }
    }

    render() {
        return (
            <userContext.Consumer>{
                ({ authenticated }) => {
                    if (authenticated) {
                        return <AddVote meme={this.props.meme} submitVote={this.submitVote}></AddVote>
                    }
                }
            }</userContext.Consumer>
        );
    }
}
AddVote.contextType = userContext;
export default VoteMemes;
