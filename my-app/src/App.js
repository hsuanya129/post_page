import React from 'react';
import './App.css';
import { BrowserRouter, Route, Link, history, Redirect } from 'react-router-dom'


// parent component
class App extends React.Component {
  constructor(props) {
    super(props);

    //for saving data
    this.state = {
      itemList: [
        // {
        //   title: "",
        //   content: ""
        // }
      ]
    }
    //binding method with this
    this.addPost = this.addPost.bind(this)
    this.removePost = this.removePost.bind(this)
  }


  //write some callbacks function here
  addPost(title, content) {
    const newTitle = title
    const newContent = content
    const newList = this.state.itemList.concat({
      title: newTitle,
      content: newContent
    })
    this.setState({
      itemList: newList
    })
  }

  removePost(){
    const postLength = this.state.itemList.length
    const newList =this.state.itemList.splice(0,postLength-1)
    this.setState({
      itemList:newList
    })
  }

  render() {
    console.log(this.state.itemList)
    return (
      <div className="App">
        <BrowserRouter>
          <Route exact path="/" render={(props) => <IndexPage {...props} removePost={this.removePost} itemList={this.state.itemList} />} />
          <Route path="/add_post" render={(props) => <NewPost {...props} addPost={this.addPost} />} />
        </BrowserRouter>
      </div>
    )
  }
}

//for index page, child of App
class IndexPage extends React.Component {
  constructor(props) {
    super(props);
    this.toPostPage = this.toPostPage.bind(this);
    this.toRemovePost = this.toRemovePost.bind(this);
  }

  toPostPage() {
    this.props.history.push('/add_post')
  }

  toRemovePost() {
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



//for add_post page, child of App
class NewPost extends React.Component {
  constructor(props) {
    super(props);

    this.submitPost = this.submitPost.bind(this);
    this.uploadPhoto = this.uploadPhoto.bind(this);

  }

  submitPost() {
    //save post 
    const title = document.getElementById('titleBox').value
    const content = document.getElementById('contentBox').value

    this.props.addPost(title, content);
    this.props.history.push('/')
  }

  uploadPhoto() {
    //upload photo here
  }

  render() {
    return (
      <div>
        <p>Title:</p>
        <input type="text" id="titleBox" />
        <p>Content:</p>
        <textarea id="contentBox" defaultValue="Please input Content." />
        <br />
        <input id='file-upload' type="file" name="pic" accept="image/*" />
        <button id="submitPost" onClick={this.submitPost} >submit</button>
      </div>
    )
  }
}




//for showing all posts, map and render every post component, child of index
class Posts extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const itemList = this.props.itemList.map((item, index) => <Post key={index} title={item.title} content={item.content} />)
    
    return (
      <div>
        {itemList}
      </div>
    )
  }

}

// for single post show, child of Posts
class Post extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='post'>
        <p>{this.props.title}</p>
        <p>{this.props.content}</p>
      </div>
    )
  }
}

export default App;
