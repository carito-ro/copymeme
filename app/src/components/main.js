import React from 'react';
import '../assets/css/styles.scss';
import ListCategory from './listCategory';
import datos from '../basePrueba/base';
import ListMeme from './listMeme';

import { useParams } from 'react-router-dom';
function Main() {
  let { category } = useParams();
  return (
    <div className="container-fluid">
      <div className="row vh-100">
        <div className="col-md-4 p-3">
          <ListCategory
            categories={datos.categories}
            categoryView={category}
          ></ListCategory>
        </div>
        <div className="col-md-8 p-0 ">
          <ListMeme categoryView={category}></ListMeme>
        </div>
      </div>
    </div>
  );
}

export default Main;
