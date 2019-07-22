import React from 'react';
import './../App.css';
import Post from './Post'

//for showing all posts, map and render every post component, child of index
class Posts extends React.Component {
    constructor(props) {
      super(props);
    }
  
    render() {
      const itemList = this.props.itemList.map((item) => <Post key={item.id} id={item.id} title={item.title} content={item.content}
        picture={item.picture} />)
  
      return (
        <div>
          {itemList}
        </div>
      )
    }
  
  }

export default Posts