import React from 'react';
import './listMeme.scss';
import PreviewMeme from './previewMeme';
import datos from '../basePrueba/base';


class ListMeme extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            categoryView: props.categoryView,
        };
    }

    render() {
        return (
            <div className="listado-memes">
                {datos.memes.map(
                    (meme) =>
                        <PreviewMeme dataMeme={meme}></PreviewMeme>
                )
                }
            </div>
        );
    }
    componentDidMount() {
        // //Yo creo que tendria que traer por nombre más que ID
        // try {
        //     let memesByCategory = await fetch(`https://localhost/memesByCategory/${categoryView}`);
        //     let memes = await memesByCategory.json();
        // } catch (error) {
        //     res.send(error);
        // }
    }
}



export default ListMeme;
