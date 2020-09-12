import React from 'react';
import './memePreview.scss';
import { useParams } from "react-router-dom";
import datos from '../basePrueba/base';

function MemeDetail() {

    let { meme } = useParams();
    let objetoMeme = datos.memes.find(element => element.id == meme);

    return (
        <div class="container-fluid ">
            <div class="row">
                <div class="col-8 d-flex justify-content-center align-items-center">
                    <div className="preview-wrapper w-75 mt-5">
                        <div className="row">
                            <div className="col-8">
                                <h4 className="titulo-meme">
                                    {objetoMeme.title}
                                    <br></br>
                                    <small>{objetoMeme.category}</small>
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
                                    <img src={objetoMeme.url} className="card-img-top" alt="..."></img>
                                </div>
                            </div>
                        </div>
                        <div className="row mt-2">
                            <div className="col-6">
                            </div>
                            <div className="col-6 d-flex justify-content-end">
                                <a className="small-link" href="/#"> {objetoMeme.positiveVotesCount} <i className="fa fa-thumbs-up"></i> {objetoMeme.negativeVotesCount} <i className="fa fa-thumbs-down"></i></a>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default MemeDetail;
