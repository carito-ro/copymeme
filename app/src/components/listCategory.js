import React from 'react';
import './listCategory.scss';

function ListCategory(props) {
    return (
        <>
            <p className="bd-content-title pl-3"> Explorar categorias:</p>
            <div className="list-group " id="list-tab" role="tablist">

                {props.categoties.map(
                    (elto) =>
                        <a href={`/${elto.name}`} key={elto.id} className="list-group-item list-group-item-action " data-toggle="list" role="tab" aria-controls="home">
                            {elto.name}
                        </a>
                )
                }
            </div>
        </>
    )

}

export default ListCategory;
