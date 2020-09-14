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
            message: ''
        };
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
            url: this.state.imagen,
            title: this.state.titulo,
            description: this.state.descripcion,
            author: 'prueba',
        }
        this.props.uploadMeme(meme);
        this.setState({ titulo: '', descripcion: '', imagen: '', category: 0, subioImagen: false, message: 'Meme subido con éxito' });
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
        if (this.state.message) {
            alert = <div className="alert alert-danger" role="alert">
                {this.state.message}
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
                                <select name="category" className="form-control custom-select" value={this.state.categoria}
                                    onChange={this.handleCategoryChange}>
                                    <option value="0">Categorias</option>
                                    <option value="1">Deportes</option>
                                    <option value="2">Humor Negro   </option>
                                    <option value="3">Trabajo</option>
                                    <option value="3">To dark to see</option>
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
