import React from 'react';
import './listMeme.scss';
import './previewMeme.scss';
import fetch from 'node-fetch';

class AddMeme extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            imagen: '',
            subioImagen: false
        };
    }
    showWidget = (widget) => {
        widget.open();
    }

    chekcUpload = (result) => {
        if (result.event === 'success') {
            this.setState({ imagen: result.info.secure_url, subioImagen: true });
        }
    }

    render() {
        let widget = window.cloudinary.createUploadWidget({
            cloudName: "pancho8725",
            uploadPreset: "preset_pancho"
        },
            (error, result) => {
                this.chekcUpload(result)
            });
        return (
            <div className="row  d-flex justify-content-center align-items-center">
                <div class="form">
                    <form class="form">
                        <input type="text" placeholder="Titulo" />
                        <select class="custom-select">
                            <option selected>Categorias</option>
                            <option value="1">Deportes</option>
                            <option value="2">Humor Negro   </option>
                            <option value="3">Trabajo</option>
                            <option value="3">To dark to see</option>
                        </select>
                        <img src={this.state.imagen} className="card-img-top w-80 h-80"></img>
                        {!this.state.subioImagen &&
                            <button type="button" class="btn btn-primary" onClick={() => this.showWidget(widget)}>Añadir Meme</button>
                        }
                        {this.state.subioImagen &&
                            <button type="button" class="btn btn-primary">Agregar</button>
                        }
                    </form>
                </div>
            </div>
        )
    }

}

export default AddMeme;
