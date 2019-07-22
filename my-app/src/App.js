import React from 'react';
import './App.css';
import { BrowserRouter, Route, Link, history, Redirect } from 'react-router-dom';
import IndexPage from './components/IndexPage';
import NewPost from './components/NewPost';




// parent, root component, where the truth data saves
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
  }

  addPost = (title, content, picture) => {

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

  removePost = () => {
    const postLength = this.state.itemList.length
    const newList = this.state.itemList.splice(0, postLength - 1)
    this.setState({
      itemList: newList
    })
  }

  render() {
    return (
      <div className="App">
        <BrowserRouter basename='/post_page/'>
          <Route exact path="/" render={(props) => <IndexPage {...props} removePost={this.removePost} itemList={this.state.itemList} />} />
          <Route path="/add_post" render={(props) => <NewPost {...props} addPost={this.addPost} />} />
        </BrowserRouter>
      </div>
    )
  }
}

export default App;
