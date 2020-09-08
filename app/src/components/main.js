import React from 'react';
import './main.scss';
import ListCategory from './listCategory';
import ListMeme from './listMeme';
import datos from '../basePrueba/base';
function Main() {
    return (
        <div className="container-fluid">
            <div className="row vh-100">
                <div className="col-md-4 p-3">
                    <ListCategory categoties={datos.categories}></ListCategory>
                </div>
                <div className="col-md-8 p-3 ">
                    <ListMeme></ListMeme>
                </div>
            </div>
        </div>
    );
}
export default Main;
