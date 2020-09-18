import React from 'react';
import MemePreview from './memePreview';
import '../assets/css/styles.scss';
import InfiniteScroll from 'react-infinite-scroll-component';

class ListMeme extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      lastCategoryView: this.props.categoryView,
      categoryView: this.props.categoryView,
      memesFiltrados: this.props.memesFiltrados,
      loading: false,
      actual: 0,
      prevY: 0
    };
  }

  componentDidMount() {
    var options = {
      root: null,
      rootMargin: "0px",
      threshold: 1.0
    };

    this.observer = new IntersectionObserver(
      this.handleObserver.bind(this),
      options
    );
    this.observer.observe(this.loadingRef);
  }

  handleObserver(entities, observer) {
    const y = entities[0].boundingClientRect.y;
    if (this.state.prevY > y) {
      const from = this.state.memesFiltrados.length;
      this.getMemes(from);
      this.setState({ actual: from });
    }
    this.setState({ prevY: y });
  }

  async componentDidUpdate() {
    try {
      if (this.state.lastCategoryView !== this.props.categoryView) {
        if (this.props.categoryView) {
          const response = await fetch(`http://127.0.0.1:5000/memes?limit=4&categoryId=` + this.props.categoryView);
          const json = await response.json();
          this.setState({
            memesFiltrados: json,
            lastCategoryView: this.props.categoryView
          });
        } else {
          const response = await fetch('http://127.0.0.1:5000/memes?limit=4');
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

  async getMemes(from) {
    this.setState({ loading: true });
    let json;
    if (this.props.categoryView) {
      const response = await fetch(`http://127.0.0.1:5000/memes?start=${from}&categoryId=${this.props.categoryView}&limit=4`);
      json = await response.json();
    } else {
      const response = await fetch(`http://127.0.0.1:5000/memes?start=${from}&limit=4`);
      json = await response.json();
    }
    this.setState({
      memesFiltrados: [...this.state.memesFiltrados, ...json],
      lastCategoryView: this.props.categoryView
    });
    this.setState({ loading: false });
  }

  render() {
    const loadingCSS = {
      height: "100px",
      margin: "30px"
    };

    // To change the loading icon behavior
    const loadingTextCSS = { display: this.state.loading ? "block" : "none" };

    if (this.state.memesFiltrados) {
      return (
        <>
          <div className="listado-memes" >
            <InfiniteScroll
              dataLength={this.state.memesFiltrados.length}
              hasMore={true}
              scrollableTarget="listado-memes" >
              {this.state.memesFiltrados.map((meme) => (
                <MemePreview key={meme._id} dataMeme={meme}></MemePreview>
              ))}
            </InfiniteScroll>
          </div>
          <div ref={loadingRef => (this.loadingRef = loadingRef)}
            style={loadingCSS}>
            <span style={loadingTextCSS}>Loading...</span>
          </div>
        </>
      );
    } else {
      return <></>
    }
  }
}

export default ListMeme;
