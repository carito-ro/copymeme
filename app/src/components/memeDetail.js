import React from 'react';
import './memeDetail.scss';
import ListComment from './listComment';
function ListMeme() {
    return (
        <div className="">
            <p className="bd-content-title pl-3">
                Lista de comentarios:
            </p>
            <ListComment></ListComment>
        </div>
    );
}
export default ListMeme;