import React from 'react';
import '../assets/css/styles.scss';
import ListCategory from './listCategory';
import ListMeme from './listMeme';
import { withRouter } from "react-router";
class Main extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      listCategories: null,
      memesAll: null
    };
  }

  async componentDidMount() {
    try {
      let json1, response1;
      const response = await fetch(`http://127.0.0.1:5000/categories`);
      const json = await response.json();
      if (this.props.match.params.category) {
        response1 = await fetch(`http://127.0.0.1:5000/memes?categoryId=` + this.props.match.params.category);
        json1 = await response1.json();
      } else {
        response1 = await fetch(`http://127.0.0.1:5000/memes`);
        json1 = await response1.json();
      }
      this.setState({
        listCategories: json,
        memesAll: json1
      });
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    if (this.state.listCategories && this.state.memesAll) {
      return <div className="container-fluid mt-5">
        <div className="row vh-100">
          <div className="col-md-4 p-3">
            <ListCategory
              categories={this.state.listCategories}
              categoryView={this.props.match.params.category}
            ></ListCategory>
          </div>
          <div className="col-md-8 p-0 ">
            <ListMeme categoryView={this.props.match.params.category} memesFiltrados={this.state.memesAll}></ListMeme>
          </div>
        </div>
      </div>
    } else { return <>  </> }
  }
}
export default withRouter(Main);

