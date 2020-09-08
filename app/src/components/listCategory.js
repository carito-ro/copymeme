import React from 'react';
import './listCategory.scss';

function ListCategory(props) {
    return (
        <div className="listado-categorias">
            <h5 className="bd-content-title mb-3"> Explorar categorias:</h5>
            <div className="list-group " id="list-tab" role="tablist">
                {props.categoties.map(
                    (elto) =>
                        <a href={`/${elto.name}`} key={elto.id} className="list-group-item list-group-item-action " data-toggle="list" role="tab" aria-controls="home">
                            {elto.name}
                        </a>
                )
                }
            </div>
        </div>
    )

}

export default ListCategory;
