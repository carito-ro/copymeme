import React from 'react';
import './listMeme.scss';
import PreviewMeme from './previewMeme';
function ListMeme() {
    return (
        <div className="">
            <p className="bd-content-title pl-3">
                Lista de meme:
            </p>
            <PreviewMeme></PreviewMeme>
        </div>
    );
}
export default ListMeme;
