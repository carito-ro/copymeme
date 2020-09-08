import React from "react";
import ReactDOM from "react-dom";
import {
    BrowserRouter as Router, Switch, Route, Link, Redirect
} from "react-router-dom";
import { Profile } from './profile';
import { AddMeme } from './addMeme';

// function Menu() {
//     return (
//         <Router>
//             <>
//                 <nav>
//                     <ul>
//                         <li>
//                             <Link to="/perfil">Perfil</Link>
//                         </li>
//                         <li>
//                             <Link to="/subir-Meme"> Subir Meme</Link>
//                         </li>
//                         <li>
//                             <Link to="/cerrar-sesion"> Cerrar Sesión</Link>
//                         </li>
//                     </ul>
//                 </nav>
//                 <Switch>
//                     <Route path="/perfil" component={Profile} />
//                     <Route path="/subir-Meme" component={AddMeme} />
//                     <Route path="/cerrar-sesion" component={Profile} />
//                     <Redirect path="/" />
//                 </Switch>
//             </>
//         </Router>
//     );
// }
export default Menu;



