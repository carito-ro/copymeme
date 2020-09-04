import React from 'react';
import './previewMeme.scss';
import meme from '../assets/images/MEME.jpg';
function PreviewMeme() {
    return (
        <div className="preview-wrapper">
            <div class="row">
                <div class="col-8">
                    <h4 className="titulo-meme">
                        Titulo de Meme
                        <br></br>
                        <small>Titulo de categoría</small>
                    </h4>
                </div>
                <div class="col-4 d-flex justify-content-end">
                    <button class="btn btn-vote-up mr-1"><i className="fa fa-thumbs-up"></i></button>
                    <button class="btn btn-vote-down"><i class="fa fa-thumbs-down"></i></button>
                </div>
            </div>
            <div class="row">
                <div class="col-12">
                    <div className="card w-100">
                        <img src={meme} className="card-img-top" alt="..."></img>
                        {/* 
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="/#" className="btn btn-primary">Go somewhere</a>
                </div> */}
                    </div>
                </div>
            </div>
            <div class="row mt-2">
                <div class="col-6">
                </div>
                <div class="col-6 d-flex justify-content-end">

                    <a className="small-link"> 12 <i className="fa fa-thumbs-up"></i> 500 <i className="fa fa-thumbs-down"></i></a>
                    <a className="small-link ml-2" href="#">Ver comentarios</a>
                </div>
            </div>
        </div>
    );
}
export default PreviewMeme;
