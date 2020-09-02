import React from 'react';
import './listCategory.scss';

function ListCategory() {
    return (
        <>
            <p className="bd-content-title pl-3"> Explorar categorias:</p>
            <div className="list-group " id="list-tab" role="tablist">
                <a className="list-group-item list-group-item-action " id="list-home-list" data-toggle="list" href="#list-home" role="tab" aria-controls="home">Categoria 1</a>
                <a className="list-group-item list-group-item-action" id="list-profile-list" data-toggle="list" href="#list-profile" role="tab" aria-controls="profile">Categoria 2</a>
                <a className="list-group-item list-group-item-action" id="list-messages-list" data-toggle="list" href="#list-messages" role="tab" aria-controls="messages">Categoria 3</a>
                <a className="list-group-item list-group-item-action" id="list-settings-list" data-toggle="list" href="#list-settings" role="tab" aria-controls="settings">Categoria 4</a>
            </div>
        </>
    );
}
export default ListCategory;
