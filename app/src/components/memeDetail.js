import React from 'react';
import '../assets/css/styles.scss';
import ListComment from './listComment';
import VoteMemes from './voteMemes';
import { withRouter } from "react-router";
class MemeDetail extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            objetoMeme: null
        };
    }
    async componentDidMount() {
        try {
            const response = await fetch(`http://127.0.0.1:5000/memes/` + this.props.match.params.meme);
            const json = await response.json();
            this.setState({
                objetoMeme: json,
            });
        } catch (error) {
            console.log(error);
        }
    }
    render() {
        let elto;
        let objetoMeme = this.state?.objetoMeme;
        if (objetoMeme) {
            elto = <div className="row">
                <div className=" col-12 col-md-7 d-flex justify-content-center align-items-center">
                    <div className=" w-100 ml-5 mr-sm-5 mt-5">
                        <div className="row">
                            <div className="col-8">
                                <h4 className="titulo-meme">
                                    {objetoMeme.title}
                                    <br></br>
                                    <small>{objetoMeme.category.name}</small>
                                </h4>
                            </div>
                            <div className="col-4 d-flex justify-content-end">
                                <VoteMemes meme={objetoMeme}></VoteMemes>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <div className="card w-100">
                                    <img src={objetoMeme.image} className="card-img-top" alt="..."></img>
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
                    <ListComment meme={objetoMeme} key={objetoMeme._id} >

                    </ListComment>
                </div>
            </div>;
        } else {
            elto = <></>;
        }
        return (
            <div className="container-fluid ">
                {elto}
            </div>
        );
    }
}

export default withRouter(MemeDetail);
