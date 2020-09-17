import React from "react";
import '../assets/css/styles.scss';
import { userContext } from '../userContext';
class AddComment extends React.Component {
    constructor (props) {
        super(props);
        this.comment = React.createRef();
    }
    onSubmit = (event) => {
        event.preventDefault();
        this.props.insertarComment(
            {
                content: this.comment.current.value,
                author: this.context.user._id,
                meme: this.props.meme?._id
            });
        this.comment.current.value = '';
    }
    render() {
        return (
            <userContext.Consumer>{
                ({ authenticated }) => {
                    if (authenticated) {
                        return (
                            <div className="mb-2">
                                <hr></hr>
                                <div className="bd-content-title pl-3">
                                    <form className="form">
                                        <div className="row">
                                            <input type="text" maxLength="256"
                                                className="col-8 d-inline-block"
                                                placeholder="Agrega un comentario..."
                                                ref={this.comment}
                                            />
                                            <div className="col-4">
                                                <div type="submit"
                                                    onClick={this.onSubmit}
                                                    className="d-inline-block rounded-circle circuloAddComment"><i id="1" className="fa fa-comment"></i></div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        );
                    }
                }
            }</userContext.Consumer>
        );
    }
}

AddComment.contextType = userContext;
export default AddComment;
