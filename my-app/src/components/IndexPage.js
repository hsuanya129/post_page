import React from 'react';
import './../App.css';
import Posts from './Posts'

//for index page, child of App
class IndexPage extends React.Component {
    constructor(props) {
      super(props);
    }
  
    toPostPage =()=> {
      this.props.history.push('/add_post')
    }
  
    toRemovePost=()=> {
      this.props.removePost()
    }
  
    render() {
      return (
        <div className="App">
          <button onClick={this.toPostPage}>Add Post</button>
          <button onClick={this.toRemovePost}>Remove Post</button>
          <Posts itemList={this.props.itemList} />
        </div>
      )
    }
  }
export default IndexPage