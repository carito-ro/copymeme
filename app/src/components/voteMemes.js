import React from 'react';
import '../assets/css/styles.scss';
import { userContext } from '../userContext';
import AddVote from './addVote';

class VoteMemes extends React.Component {
  submitVote = (voto) => {
    if (voto) {
      this.guardar(voto);
    }
  };

  guardar = async (voto) => {
    var url = 'http://127.0.0.1:5000/votes';

    await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(voto),
    })
      .then((res) => res.json())
      .catch((error) => console.error('Error:', error))
      .then((response) => {
        // Actualizar el listado de memes.
      });
  };

  render() {
    return (
      <userContext.Consumer>
        {({ authenticated }) => {
          if (authenticated) {
            return (
              <AddVote
                meme={this.props.meme}
                submitVote={this.submitVote}
              ></AddVote>
            );
          }
        }}
      </userContext.Consumer>
    );
  }
}
AddVote.contextType = userContext;
export default VoteMemes;
