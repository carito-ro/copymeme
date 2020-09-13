import React from 'react';
import './comment.scss';

function Comment({ dataComment }) {
    return (
        <>
            <div className="row pb-3">
                <div className=" d-flex align-items-center circuloComment rounded-circle">
                </div>
                <span className="col-10 d-flex align-items-center align-items-center">
                    {dataComment.content}
                </span>
            </div>
        </>
    );
}
export default Comment;
