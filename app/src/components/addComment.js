import React from 'react';
import '../assets/css/styles.scss';

class AddComment extends React.Component {
    constructor (props) {
        super(props);
        this.comment = React.createRef();
    }
    onSubmit = (event) => {
        event.preventDefault();
        const comment = this.comment.current.value;
        this.props.insertarComment({ comment: comment });
        this.comment.current.value = '';
    }
    render() {
        return (
            <div className="mb-5">
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
                                    className="d-inline-block rounded-circle circuloAddComment"></div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        );
    }

}


export default AddComment;
