import React from 'react';
import '../assets/css/styles.scss';
import { Link } from "react-router-dom";
class ListCategory extends React.Component {

    constructor (props) {
        super(props);
        this.selectedCategory = React.createRef();
    }

    componentDidMount() {
        if (this.selectedCategory.current) {
            this.selectedCategory.current.focus();
        }
    }

    render() {
        let categoryName = 'Actual: Todas';
        if (this.props.categoryView) {
            categoryName = `Actual: ${this.props.categories.find(cat => cat._id === this.props.categoryView).name}`;
        }
        return (
            <div className="listado-categorias text-center">
                <h5 className="bd-content-title mb-1"> Explorar categorias
                </h5>
                <small><b>{categoryName}</b></small>
                <div className="list-group mt-3 text-left" id="list-tab" role="tablist">
                    <Link to={`/`} key='Todas' className='list-group-item list-group-item-action'>
                        Todas
                    </Link>
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
