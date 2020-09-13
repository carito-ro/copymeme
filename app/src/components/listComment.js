import React from 'react';
import Comment from './comment';
import AddComment from './addComment';
import datos from '../basePrueba/base';
class ListComment extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            filterComments: null,
            idMeme: props.idMeme
        };
    }
    componentDidMount() {
        this.setState({
            filterComments: datos.comments.filter(
                element =>
                    element.meme === parseInt(this.state.idMeme)
            )
        });
    }
    insertarComment = (nuevoComment) => {
        console.log(nuevoComment);
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
                <AddComment insertarComment={this.insertarComment}>

                </AddComment>

            </div>
        );
    }
}

export default ListComment;
