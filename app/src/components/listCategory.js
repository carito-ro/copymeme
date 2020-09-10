import React from 'react';
import './listCategory.scss';

import { Link } from "react-router-dom";
function ListCategory(props) {
    return (
        <div className="listado-categorias">
            <h5 className="bd-content-title mb-3"> Explorar categorias:</h5>
            <div className="list-group " id="list-tab" role="tablist">
                {props.categoties.map(
                    (elto) =>
                        <Link to={`/memes/${elto.name}`} key={elto.name} className=" list-group-item list-group-item-action ">
                            {elto.name}
                        </Link>
                )
                }
            </div>
        </div>
    )
}
export default ListCategory;
