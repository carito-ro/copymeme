import React from 'react';
import '../assets/css/styles.scss';
import { userContext } from '../userContext';

class AddVote extends React.Component {

    componentDidMount() {
        //buscar si el usuario ya voto
    }
    handleVote = (event) => {
        event.preventDefault();
        //si ya voto no enviar!
        this.props.submitVote(
            {
                author: this.context.user._id,
                type: event.target.id, // 0 negativo 1 positivo
                meme: this.props.meme.id
            });
    }
    render() {
        return (
            <div className="col-4 d-flex justify-content-end">
                <button type="button" className="btn btn-vote-up mr-1" onClick={this.handleVote} id="1"><i id="1" className="fa fa-thumbs-up"> </i></button>
                <button type="button" className="btn btn-vote-down" onClick={this.handleVote} id="0"><i id="0" className="fa fa-thumbs-down"> </i></button>
            </div>
        );
    }
}

AddVote.contextType = userContext;
export default AddVote;
