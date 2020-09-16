import React from 'react';
import MemePreview from './memePreview';
import '../assets/css/styles.scss';
import InfiniteScroll from 'react-infinite-scroll-component';
class ListMeme extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lastCategoryView: null,
      categoryView: props.categoryView,
      memesFiltrados: props.memesFiltrados
    };
  }
  async componentDidMount() {
    try {
      if (this.state.lastCategoryView !== this.props.categoryView) {
        if (this.props.categoryView) {
          const response = await fetch(`http://127.0.0.1:5000/memes`);
          const json = await response.json();
          this.setState({
            memesFiltrados: json,
            lastCategoryView: this.props.categoryView
          });
        }
      }
    } catch (error) {
      console.log(error);
    }
  }

  async componentDidUpdate() {
    try {
      if (this.state.lastCategoryView !== this.props.categoryView) {
        if (this.props.categoryView) {
          const response = await fetch(`http://127.0.0.1:5000/memes?categoryId=` + this.props.categoryView);
          const json = await response.json();
          this.setState({
            memesFiltrados: json,
            lastCategoryView: this.props.categoryView
          });
        } else {
          this.setState({
            memesFiltrados: this.props.categoryView,
            lastCategoryView: this.props.categoryView,
          });
        }
      }
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    if (this.state.memesFiltrados) {
      return (
        <div className="listado-memes" >
          <InfiniteScroll
            dataLength={this.state.memesFiltrados.length}
            //  next={this.state?.memesFiltrados} Da error ver como implementarlo!
            hasMore={true}
            scrollableTarget="listado-memes"
          >
            {this.state.memesFiltrados.map((meme) => (
              <MemePreview key={meme._id} dataMeme={meme}></MemePreview>
            ))}
          </InfiniteScroll>
        </div>
      );
    } else {
      return <></>
    }
  }
}

export default ListMeme;
