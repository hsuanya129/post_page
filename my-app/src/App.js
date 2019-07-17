import React from 'react';
import './App.css';
import { BrowserRouter, Route, Link, history,Redirect} from 'react-router-dom'

//for index page
class IndexPage extends React.Component{
  constructor(props){
    super(props);
    this.toPostPage = this.toPostPage.bind(this);
    this.toRemovePost = this.toRemovePost.bind(this);
  }

  toPostPage(){
    this.props.history.push('/add_post')
  }

  toRemovePost(){

  }

  render(){
    return(
      <div className="App">
          <button onClick={this.toPostPage}>Add Post</button>
          <button>Remove Post</button>
          <Posts />
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
          <Route path="/add_post" component={NewPost}/>
          
        </BrowserRouter>
      </div>
    )
  }
}

//for new_post page
class NewPost extends React.Component{
  constructor(props){
    super(props);
    
    this.submitPost = this.submitPost.bind(this);
    this.uploadPhoto = this.uploadPhoto.bind(this);

  }

  submitPost(event){
    //save post and redirect
    const title = document.getElementById('titleBox');
    const content = document.getElementById('contentBox');
    this.props.history.push('/')
    


  }

  uploadPhoto(){
    //upload photo here
  }

  render(){
    return(
      <div>
          <p>Title:</p>
          <input type="text" id="titleBox" />
          <p>Content:</p>
          <textarea id="contentBox" defaultValue="Please input Content."/>
          <br/>
          <input id='file-upload' type="file" name="pic" accept="image/*"  />
          <button id="submitPost" onClick={this.submitPost} >submit</button>
          <Route path="/post" component={Posts} />
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
    console.log(`${this.props.title} ${this.props.content}`)
    return(
      <div>
        <p>{this.props.title}</p>
        <p>{this.props.content}</p>
        
      </div>
      
    )
  }
}
 

//for posts div, single source of truth, 
//state store all posts' contents, while props store every single new post's content
class Posts extends React.Component{
  constructor(props){
    super(props);
    this.state={
      itemList:[
        {
          title:'myTitle',
        content:'myContent'
        }
      ]
    }
  }

  addItem(){
    const newList = this.state.itemList.concat({title:this.props.title,
      content:this.props.content})
    this.setState={
      itemList:newList
    }
  }

  render(){
    const itemList = this.state.itemList.map((item,index)=><Post key={index} title={item.title} content={item.content} />)
    return(
      <div>
        {itemList}
        
      </div>
    )
  }
}


export default App;
