import React from 'react';
import './listMeme.scss';
import AddComment from './addComment';

function ListComment() {
    return (
        <div className="">
            <p className="bd-content-title pl-3">
                Lista de comentarios:
            </p>
            <AddComment></AddComment>
        </div>
    );
}
export default ListComment;
