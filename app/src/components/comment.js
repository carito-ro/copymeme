import React from 'react';
import '../assets/css/styles.scss';

function Comment({ dataComment }) {
    return (
        <>
            <div className="row pb-3">
                <div className="d-flex align-items-center circuloComment "><i id="1" className="fa fa-user"></i>
                </div>
                <span className="col-10">
                    <small>{dataComment.author?.name}</small>
                    <br></br>{dataComment.content}
                </span>
            </div>
        </>
    );
}
export default Comment;
