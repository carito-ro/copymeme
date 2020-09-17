import React from 'react';
import '../assets/css/styles.scss';
import { userContext } from '../userContext';

class AddVote extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      puedeVotar: true,
    };
  }
  componentDidMount() {
    //buscar si el usuario ya voto
    this.validarVoto();
  }
  handleVote = (event) => {
    let type = event.target.id === '1' ? 1 : 0;
    this.props.submitVote({
      author: this.context.user._id,
      meme: this.props.meme._id,
      type: type, // 0 negativo 1 positivo
    });
    event.preventDefault();
    //si ya voto no enviar!
  };

  validarVoto = async () => {
    var url = 'http://127.0.0.1:5000/votes/' + this.props.meme._id;
    await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .catch((error) => console.error('Error:', error))
      .then((response) => {
        console.log(response);
        if (response) {
          if (response.length > 0) {
            this.setState({ puedeVotar: false });
          } else {
            this.setState({ puedeVotar: true });
          }
        } else {
          this.setState({ puedeVotar: false });
        }
      });
  };
  render() {
    return (
      this.state.puedeVotar && (
        <div className="col-4 d-flex justify-content-end">
          <button
            type="button"
            className="btn btn-vote-up mr-1"
            onClick={this.handleVote}
            id="1"
          >
            <i id="1" className="fa fa-thumbs-up">
              {' '}
            </i>
          </button>
          <button
            type="button"
            className="btn btn-vote-down"
            onClick={this.handleVote}
            id="0"
          >
            <i id="0" className="fa fa-thumbs-down">
              {' '}
            </i>
          </button>
        </div>
      )
    );
  }
}

AddVote.contextType = userContext;
export default AddVote;
