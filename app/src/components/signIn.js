import React from 'react';
import './signIn.scss';
import meme from '../assets/images/BeFunky-collage.png';

function Login() {
    return (
        <div className="login-wrapper">
            <div className="row">
                <div className="col-6">
                </div>
                <div className="col-6 d-flex justify-content-center">
                    <button className="btn btn-vote-up mr-1"><i className="fa fa-thumbs-up"></i></button>
                    <button className="btn btn-vote-down"><i className="fa fa-thumbs-down"></i></button>
                </div>
            </div>
        </div>
    );
}
export default PreviewMeme;
