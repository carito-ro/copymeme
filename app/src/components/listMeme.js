import React from 'react';
import './listMeme.scss';
import PreviewMeme from './previewMeme';
function ListMeme() {
    return (
        <div className="listado-memes">
            <PreviewMeme></PreviewMeme>
            <PreviewMeme></PreviewMeme>
            <PreviewMeme></PreviewMeme>
        </div>
    );
}
export default ListMeme;
