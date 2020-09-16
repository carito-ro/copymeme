import React from 'react';
import MemePreview from './memePreview';
import datos from '../basePrueba/base';
import '../assets/css/styles.scss';
import InfiniteScroll from 'react-infinite-scroll-component';

class ListMeme extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lastCategoryView: null,
      categoryView: props.categoryView,
      memesFiltrados: datos.memes,
    };
  }

  componentDidMount() {
    if (this.state.lastCategoryView !== this.props.categoryView) {
      if (this.props.categoryView) {
        this.setState({
          memesFiltrados: datos.memes.filter(
            (element) => element.category === parseInt(this.state.categoryView)
          ),
          lastCategoryView: this.props.categoryView,
        });
      }
    }
  }

  componentDidUpdate() {
    if (this.state.lastCategoryView !== this.props.categoryView) {
      if (this.props.categoryView) {
        this.setState({
          memesFiltrados: datos.memes.filter(
            (element) => element.category === parseInt(this.props.categoryView)
          ),
          lastCategoryView: this.props.categoryView,
        });
      } else {
        this.setState({
          memesFiltrados: datos.memes,
          lastCategoryView: this.props.categoryView,
        });
      }
    }
  }

  render() {
    return (
      <div className="listado-memes" style={{ height: 600, overflow: 'auto' }}>
        <InfiniteScroll
          dataLength={this.state.memesFiltrados.length}
          next={this.state.memesFiltrados}
          hasMore={true}
          scrollableTarget="listado-memes"
        >
          {this.state.memesFiltrados.map((meme) => (
            <MemePreview key={meme.id} dataMeme={meme}></MemePreview>
          ))}
        </InfiniteScroll>
      </div>
    );
  }
}

export default ListMeme;
