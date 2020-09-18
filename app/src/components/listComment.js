import React from 'react';
import Comment from './comment';
import AddComment from './addComment';

class ListComment extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            filterComments: null,
            meme: props.meme,
            isNewComment: false
        };
    }
    async componentDidMount() {
        try {
            const response = await fetch(`http://127.0.0.1:5000/comments/` + this.props.meme._id);
            const json = await response.json();
            this.setState({
                filterComments: json,
            });
        } catch (error) {
            console.log(error);
        }
    }
    async componentDidUpdate() {
        if (this.state?.isNewComment) {
            try {
                const response = await fetch(`http://127.0.0.1:5000/comments/` + this.props.meme._id);
                const json = await response.json();
                this.setState({
                    filterComments: json,
                    isNewComment: false
                });
            } catch (error) {
                console.log(error);
            }
        }
    }
    insertarComment = async (nuevoComment) => {
        try {
            const response = await fetch(`http://127.0.0.1:5000/comments`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(nuevoComment),
            });
            await response.json();
            this.setState({
                isNewComment: true
            });
        } catch (error) {
            console.log(error);
        }
    }

    render() {
        let arrComment = null;
        if (this.state.filterComments) {
            arrComment = this.state.filterComments.map(
                (comment) =>
                    <Comment key={comment._id} dataComment={comment}></Comment>
            )
        }
        return (
            <div className="w-100 pl-2 mb-5">
                {arrComment}
                <AddComment insertarComment={this.insertarComment} meme={this.state.meme}>
                </AddComment>
            </div>
        );
    }
}

export default ListComment;
