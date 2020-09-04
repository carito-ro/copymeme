import React from 'react';
import './listCategory.scss';

function ListCategory() {
    return (
        <div class="listado-categorias">
            <h5 className="bd-content-title mb-3"> Explorar categorias:</h5>
            <div className="list-group " id="list-tab" role="tablist">
                <a className="list-group-item list-group-item-action " id="list-home-list" data-toggle="list" href="#list-home" role="tab" aria-controls="home">Deportes</a>
                <a className="list-group-item list-group-item-action" id="list-profile-list" data-toggle="list" href="#list-profile" role="tab" aria-controls="profile">Humor negro</a>
                <a className="list-group-item list-group-item-action" id="list-messages-list" data-toggle="list" href="#list-messages" role="tab" aria-controls="messages">Trabajo</a>
                <a className="list-group-item list-group-item-action" id="list-settings-list" data-toggle="list" href="#list-settings" role="tab" aria-controls="settings">Too dark to see</a>
            </div>
        </div>
    );
}
export default ListCategory;
