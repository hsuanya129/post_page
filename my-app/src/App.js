import React from 'react';
import './App.css';
import { BrowserRouter, Route, Link} from 'react-router-dom'

//for index page
class App extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div className="App">
        <BrowserRouter>
          <button><Link to="/add_post/">Add Post</Link></button>
          <button>Remove Post</button>
          <Route exact path="/" component={App}/>
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

  }

  render(){
    return(
      <div>
        <p>It's new post</p>
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

      </div>
    )
  }
}


export default App;
