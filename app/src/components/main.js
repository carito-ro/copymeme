import React from 'react';
import './main.scss';
import ListCategory from './listCategory';
import datos from '../basePrueba/base';
import ListMeme from './listMeme';

import { useParams } from "react-router-dom";
function Main() {
    let { name } = useParams();
    return (
        <div className="container-fluid">
            <div className="row vh-100">
                <div className="col-md-4 p-3">
                    <ListCategory categoties={datos.categories}></ListCategory>
                </div>
                <div className="col-md-8 p-3 ">
                    Parametro name es: {name}
                    <ListMeme categoryView={name}></ListMeme>
                </div>
            </div>
        </div>
    );
}



export default Main;
