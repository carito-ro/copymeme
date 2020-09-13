import React from 'react';
import '../assets/css/styles.scss';
import { Link } from "react-router-dom";

class MemePreview extends React.Component {
    render() {
        return (
            <div className="preview-wrapper">
                <div className="row">
                    <div className="col-8">
                        <h4 className="titulo-meme">
                            {this.props.dataMeme.title}
                            <br></br>
                            <small>{this.props.dataMeme.category}</small>
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
                            <img src={this.props.dataMeme.url} className="card-img-top" alt="..."></img>
                        </div>
                    </div>
                </div>
                <div className="row mt-2">
                    <div className="col-6">
                    </div>
                    <div className="col-6 d-flex justify-content-end">
                        <a className="small-link" href="/#"> {this.props.dataMeme.positiveVotesCount} <i className="fa fa-thumbs-up"></i> {this.props.dataMeme.negativeVotesCount} <i className="fa fa-thumbs-down"></i></a>
                        <Link to={`/meme/${this.props.dataMeme.id}`} className="small-link ml-2">Ver comentarios</Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default MemePreview;
