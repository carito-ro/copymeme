import React from 'react';
import '../assets/css/styles.scss';
import { useParams } from "react-router-dom";
import datos from '../basePrueba/base';
import ListComment from './listComment';
import VoteMemes from './voteMemes';
function MemeDetail() {

    let { meme } = useParams();
    let objetoMeme = datos.memes.find(element => element.id === parseInt(meme));

    return (
        <div className="container-fluid ">
            <div className="row">
                <div className=" col-12 col-md-7 d-flex justify-content-center align-items-center">
                    <div className=" w-100 ml-5 mr-sm-5 mt-5">
                        <div className="row">
                            <div className="col-8">
                                <h4 className="titulo-meme">
                                    {objetoMeme.title}
                                    <br></br>
                                    <small>{objetoMeme.category}</small>
                                </h4>
                            </div>
                            <div className="col-4 d-flex justify-content-end">
                                <VoteMemes meme={objetoMeme}></VoteMemes>
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
                <div className=" col-12 mh-100 col-md-5 pt-5 d-flex justify-content-center align-items-top">
                    <ListComment meme={objetoMeme} ></ListComment>
                </div>
            </div>
        </div>
    );
}

export default MemeDetail;
