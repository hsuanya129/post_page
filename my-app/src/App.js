import React from 'react';
import './App.css';
import { BrowserRouter, Route, Link} from 'react-router-dom'

//for index page
class IndexPage extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div className="App">
          <button><Link to="/add_post/">Add Post</Link></button>
          <button>Remove Post</button>
          <Posts></Posts>
      </div>
    )
  }
}

// for router
class App extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div className="App">
        <BrowserRouter>
          <Route exact path="/" component={IndexPage}/>
          <Route path="/add_post/" component={NewPost}/>
        </BrowserRouter>
      </div>
    )
  }
}

//for new_post page
class NewPost extends React.Component{
  constructor(props){
    super(props);
    this.state={
      titleValue:'',
      contentValue:'Please input Content.'
    }
    this.submitPost = this.submitPost.bind(this);
    this.uploadPhoto = this.uploadPhoto.bind(this);

  }

  submitPost(event){
    //save post and redirect
    event.preventDefault();
  }

  uploadPhoto(){
    //upload photo here
  }

  render(){
    return(
      <div>
        <form onSubmit={this.submitPost}>
          <p>Title:</p>
          <input type="text" id="titleBox" />
          <p>Content:</p>
          <input type="text" id="contentBox" value={this.state.value} />
          <br/>
          <button onClick={this.uploadPhoto}>upload</button>
          <input type='submit' value='submit'/>
        </form>
      </div>
    )
  }
}

// for single post show
class Post extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div>
        <p>I'm a single post</p>
      </div>
    )
  }
}
 

// for posts div
class Posts extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div>
        <Post></Post>
      </div>
    )
  }
}


export default App;
