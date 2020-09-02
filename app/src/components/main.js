import React from 'react';
import './main.scss';
import ListCategory from './listCategory';
import ListMeme from './listMeme';
function Main() {
    return (
        <div className="container-fluid ">
            <div className="row vh-100">
                <div className="col-md-4 p-3 border bg-light">
                    <ListCategory></ListCategory>
                </div>
                <div className="col-md-8 p-3 border bg-light">
                    <ListMeme></ListMeme>
                </div>

            </div>
        </div>
    );
}
export default Main;
