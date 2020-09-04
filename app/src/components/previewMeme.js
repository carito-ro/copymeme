import React from 'react';
import './previewMeme.scss';
import meme from '../assets/images/MEME.jpg';
function PreviewMeme() {
    return (
        <div className="preview-wrapper">
            <div className="row">
                <div className="col-8">
                    <h4 className="titulo-meme">
                        Titulo de Meme
                        <br></br>
                        <small>Titulo de categoría</small>
                    </h4>
                </div>
                <div className="col-4 d-flex justify-content-end">
                    <button className="btn btn-vote-up mr-1"><i className="fa fa-thumbs-up"></i></button>
                    <button className="btn btn-vote-down"><i className="fa fa-thumbs-down"></i></button>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <div className="card w-100">
                        <img src={meme} className="card-img-top" alt="..."></img>

                    </div>
                </div>
            </div>
            <div className="row mt-2">
                <div className="col-6">
                </div>
                <div className="col-6 d-flex justify-content-end">

                    <a className="small-link" href="/#"> 12 <i className="fa fa-thumbs-up"></i> 500 <i className="fa fa-thumbs-down"></i></a>
                    <a className="small-link ml-2" href="/#">Ver comentarios</a>
                </div>
            </div>
        </div>
    );
}
export default PreviewMeme;
