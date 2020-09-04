import React from 'react';
import './listMeme.scss';

class AddMeme extends React.Component {
    constructor(props) {
        super(props);
        this.image = React.createRef();
        this.title = React.createRef();
        this.category = React.createRef();
        this.description = React.createRef();
        this.submit = this.submit.bind(this);
    }
    submit(event) {
        let image = this.nombre.current.value;
        let title = this.nombre.current.value;
        let category = this.nombre.current.value;
        let description = this.nombre.current.value;
        this.props.addMeme(
            {
                title: title,
                category: category,
                image: image,
                description: description
            });
        event.preventDefault();
    }
    render() {
        return (
            <div className="">
                <p className="bd-content-title pl-3">
                    Agregar Meme:
             </p>
                <form>
                    <div className="row">
                        <div className="col-7">
                            <input type="text"
                                name="image"
                                ref={this.image}
                                className="form-control"
                                placeholder="Imagen" />
                        </div>
                        <div className="col-7">
                            <input type="text"
                                name="title"
                                ref={this.title}
                                className="form-control"
                                placeholder="Titulo" />
                        </div>
                        <div className="col-7">
                            <input type="text"
                                name="category"
                                ref={this.category}
                                className="form-control"
                                placeholder="Categoria" />
                        </div>
                        <div className="col-7">
                            <input type="text"
                                name="description"
                                ref={this.description}
                                className="form-control"
                                placeholder="Descripción" />
                        </div>
                        <div className="col-7">
                            <button type="submit"
                                className="btn btn-info mb-2"
                                onClick={this.submit}>
                                agregar </button>
                        </div>

                    </div>
                </form>
            </div>
        )
    }
}

export default AddMeme;
