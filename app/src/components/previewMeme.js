import React from 'react';
import './previewMeme.scss';
import meme from '../assets/images/MEME.jpg';
function PreviewMeme() {
    return (
        <>
            <p className="bd-content-title pl-3">
                Preview de un meme
            </p>
            <div className="card width450px">
                <img src={meme} className="card-img-top" alt="..."></img>
                {/* 
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="/#" className="btn btn-primary">Go somewhere</a>
                </div> */}
            </div>
        </>
    );
}
export default PreviewMeme;
