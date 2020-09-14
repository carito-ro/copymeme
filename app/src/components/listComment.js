import React from 'react';
import Comment from './comment';
import AddComment from './addComment';
import datos from '../basePrueba/base';
class ListComment extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            filterComments: null,
            meme: props.meme,
            isNewComment: false
        };
    }
    componentDidMount() {
        this.setState({
            filterComments: datos.comments.filter(
                element =>
                    element.meme === parseInt(this.state.meme?.id)
            )
        });
    }
    componentDidUpdate() {
        if (this.state?.isNewComment) {
            this.setState({
                // filterComments con  parseInt(this.state.idMeme)
                //se lo agrego a filterComments:[]
                isNewComment: false
            });
        }
    }
    insertarComment = (nuevoComment) => {
        console.log(nuevoComment);
        /* var url = 'http://127.0.0.1:5000/comments';

    await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(nuevoComment),
    })
      .then((res) => res.json())
      .catch((error) => console.error('Error:', error))
      .then((response) => {
        if (response) {
          ver que va acá
            //si se inserto modifico estado para actualizar
          this.setState({ isNewComment: true });
        }
      }); */
        this.setState({ isNewComment: true });
    }

    render() {
        let arrComment = null;
        if (this.state.filterComments) {
            arrComment = this.state.filterComments.map(
                (comment) =>
                    <Comment key={comment.id} dataComment={comment}></Comment>
            )
        }
        return (
            <div className="w-100 pl-5 pt-0 mt-0 pl-md-4 pt-md-4 mt-md-5">
                {arrComment}
                <AddComment insertarComment={this.insertarComment} meme={this.state.meme}>
                </AddComment>
            </div>
        );
    }
}

export default ListComment;
