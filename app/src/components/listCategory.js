import React from 'react';
import '../assets/css/styles.scss';
import { Link } from "react-router-dom";
class ListCategory extends React.Component {

    constructor(props) {
        super(props);
        this.selectedCategory = React.createRef();
    }

    componentDidMount() {
        if (this.selectedCategory.current) {
            this.selectedCategory.current.focus();
        }
    }

    render() {
        return (
            <div className="listado-categorias">
                <h5 className="bd-content-title mb-3"> Explorar categorias:</h5>
                <div className="list-group " id="list-tab" role="tablist">
                    {this.props.categories.map(
                        (category) => {
                            if (category._id === parseInt(this.props.categoryView)) {
                                return <Link ref={this.selectedCategory} to={`/memes/${category._id}`} key={category.name} className="list-group-item list-group-item-action ">
                                    {category.name}
                                </Link>
                            } else {
                                return <Link to={`/memes/${category._id}`} key={category.name} className="list-group-item list-group-item-action ">
                                    {category.name}
                                </Link>
                            }
                        }
                    )}
                </div>
            </div>
        )
    }
}

export default ListCategory;
