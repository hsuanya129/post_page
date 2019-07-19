import React from 'react';
import './App.css';
import { HashRouter, Route, Link, history, Redirect } from 'react-router-dom'


// parent component
class App extends React.Component {
  constructor(props) {
    super(props);

    //for saving data
    this.state = {
      itemList: [
        // {
        //   id:""
        //   title: "",
        //   content: "",
        //   picture:""
        // }
      ]
    }
    //binding method with this
    this.addPost = this.addPost.bind(this)
    this.removePost = this.removePost.bind(this)
  }

  addPost(title, content, picture) {

    let id;
    id = Date.now()

    const newList = this.state.itemList.concat({
      id: id,
      title: title,
      content: content,
      picture: picture
    })
    this.setState({
      itemList: newList
    })
  }

  removePost() {
    const postLength = this.state.itemList.length
    const newList = this.state.itemList.splice(0, postLength - 1)
    this.setState({
      itemList: newList
    })
  }

  render() {
  
    return (
      <div className="App">
        <HashRouter>
          <Route exact path="/" render={(props) => <IndexPage {...props} removePost={this.removePost} itemList={this.state.itemList} />} />
          <Route path="/add_post" render={(props) => <NewPost {...props} addPost={this.addPost} />} />
        </HashRouter>
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
    this.uploadPic = this.uploadPic.bind(this)
    this.uploadClick = this.uploadClick.bind(this)

  }

  uploadClick(){
    const newPic = document.getElementById('pictureBox')
    newPic.click()
  }

  uploadPic() {
    //section below is for preview
    const newPic = document.getElementById('pictureBox').files[0]
    const previewImg = document.getElementById('previewImg')
    const previewP = document.getElementById('previewP')
    previewImg.src = URL.createObjectURL(newPic)
    previewImg.hidden = false;
    previewP.hidden = false;
  }


  submitPost() {

    //save post && call parent function to truly save post's information
    const title = document.getElementById('titleBox').value
    const content = document.getElementById('contentBox').value
    const picture = document.getElementById('pictureBox').files[0]

    this.props.addPost(title, content, picture);
    this.props.history.push('/')
  }

  render() {
    return (
      <div>
        <p>Title:</p>
        <input className='textBox' type="text" id="titleBox" maxLength={10} />
        <p>Content:</p>
        <textarea className='textareaBox' id="contentBox" defaultValue="Please input Content." />
        <br />
        <p id='previewP' hidden={true}>Preview:</p>
        <img id='previewImg' className='img' hidden={true} />
        <br />
        <input id='pictureBox' type="file" accept="image/*" onChange={this.uploadPic} hidden={true}/>
        <button id='pictureBtn' onClick={this.uploadClick}>upload</button>
        <button id="submitPost" onClick={this.submitPost} >submit</button>
        <br/>
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
    const itemList = this.props.itemList.map((item) => <Post key={item.id} id={item.id} title={item.title} content={item.content}
      picture={item.picture} />)

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

  componentDidMount() {

    if (this.props.picture) {
      const imgId = this.props.id
      const reader = new FileReader()
      reader.readAsDataURL(this.props.picture)
      reader.onload = function (e) {
        const img = document.getElementById(imgId) 
        img.src= e.target.result
        img.hidden=false
      }
    }
  }

  render() {
    return (
      <div className='post'>
        <p>{this.props.title}</p>
        <p>{this.props.content}</p>
        <img id={this.props.id} className='img' hidden={true} />
      </div>
    )
  }
}

export default App;
