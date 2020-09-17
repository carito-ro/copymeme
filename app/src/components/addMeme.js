import React from 'react';
import '../assets/css/styles.scss';

class AddMeme extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            titulo: '',
            descripcion: '',
            imagen: '',
            category: 0,
            subioImagen: false,
            memeUpload: false,
            categories: [],
            user: ''
        };
    }

    componentWillMount() {
        fetch("http://127.0.0.1:5000/categories")
            .then((response) => {
                return response.json()
            })
            .then((categories) => {
                this.setState({ categories })
            });

        this.setState({ user: JSON.parse(localStorage.getItem("user")) });
    }

    showWidget = (widget) => {
        widget.open();
    }

    checkUpload = (result) => {
        if (result.event === 'success') {
            this.setState({ imagen: result.info.secure_url, subioImagen: true });
        }
    }

    handleTitleChange = (event) => {
        this.setState({ titulo: event.target.value });
    }

    handleCategoryChange = (event) => {
        this.setState({ category: event.target.value });
    }

    handleDescriptionChange = (event) => {
        this.setState({ descripcion: event.target.value });
    }

    handleSubmit = (event) => {
        let meme = {
            positiveVotesCount: 0,
            negativeVotesCount: 0,
            category: this.state.category,
            image: this.state.imagen,
            title: this.state.titulo,
            description: this.state.descripcion,
            author: this.state.user
        }
        fetch("http://127.0.0.1:5000/memes", {
            method: 'post',
            body: JSON.stringify(meme),
            headers: { 'Content-Type': 'application/json' },
        })
            .then(res => res.json())
            .then(json => console.log(json));

        this.props.uploadMeme(meme);
        this.setState({ titulo: '', descripcion: '', imagen: '', category: 0, subioImagen: false, memeUpload: true });
        event.preventDefault();
    }

    render() {
        let widget = window.cloudinary.createUploadWidget({
            cloudName: "pancho8725",
            uploadPreset: "preset_pancho"
        }, (error, result) => {
            this.checkUpload(result)
        });
        let alert;
        if (this.state.memeUpload) {
            alert = <div className="alert alert-success" role="alert">
                <strong>Su meme ha subido con exito</strong>
                <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>

            </div>
        }
        else {
            alert = null;
        }
        return (
            <div className="row d-flex justify-content-center align-items-center">
                <div className="form w-50">
                    <form className="form mt-5" method="POST" onSubmit={this.handleSubmit}>
                        {alert}
                        <div className="row">
                            <div className="col-12">
                                <input className="form-control" type="text" placeholder="Titulo" name="titulo" value={this.state.titulo}
                                    onChange={this.handleTitleChange} />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <textarea className="form-control" type="text" placeholder="Descripción" name="description" value={this.state.descripcion}
                                    onChange={this.handleDescriptionChange} />
                            </div>
                        </div>
                        <div className="row mt-2">
                            <div className="col-12">
                                <select name="category" className="form-control custom-select" value={this.state.category} placeholder="Seleccione una categoria"
                                    onChange={this.handleCategoryChange}>
                                    <option selected>Seleccione una categoria</option>
                                    {this.state.categories.map(cat => {
                                        return (
                                            <option value={cat._id}>{cat.name}</option>
                                        );
                                    })}
                                </select>
                            </div>
                        </div>
                        <div className="row mt-2">
                            <div className="col-12 d-flex justify-content-center align-items-center">
                                {this.state.subioImagen &&
                                    <img src={this.state.imagen} alt="" className="card-img-top w-25"></img>
                                }
                                {!this.state.subioImagen &&
                                    <button type="button" className="btn btn-primary" onClick={() => this.showWidget(widget)}>Seleccionar imagen</button>
                                }
                            </div>
                        </div>
                        <hr></hr>
                        <div className="row mt-2">
                            <div className="col-12">
                                {this.state.subioImagen &&
                                    <button type="submit" className="btn btn-primary">Agregar</button>
                                }
                                {!this.state.subioImagen &&
                                    <button disabled type="button" className="btn btn-primary">Agregar</button>
                                }
                            </div>
                        </div>
                    </form>
                </div>
            </div >
        )
    }

}

export default AddMeme;
