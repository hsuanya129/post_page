import React from 'react';
import './../App.css';


//for add_post page, child of App
class NewPost extends React.Component {
    constructor(props) {
      super(props);
      //preview Image DOM refs section
      this.previewImg = React.createRef();
      this.previewP = React.createRef();

      //post content DOM refs section
      this.title = React.createRef();
      this.content = React.createRef();
      this.picture = React.createRef();
    }
  
    //when the upload 'button' hit, call the hidden 'input file' to do his job
    uploadClick = () => {
      this.picture.current.click();
    }

    //section below is for image previewing
    uploadPic = () => {
      const newPic = this.picture.current.files[0]
      this.previewImg.current.src = URL.createObjectURL(newPic);
      this.previewImg.current.hidden = false;
      this.previewP.current.hidden = false;
    }
  
    //fetch DOM data then call parent function to truly save post's information
    submitPost = () => {
      this.props.addPost(this.title.current.value, this.content.current.value, this.picture.current.files[0]);
      this.props.history.push('/');
    }
  
    render() {
      return (
        <div>
          <p>Title:</p>
          <input ref={this.title} type="text"  maxLength={10} />
          <p>Content:</p>
          <textarea ref={this.content} className='textareaBox' defaultValue="Please input Content." />
          <br />
          <p ref={this.previewP} hidden={true}>Preview:</p>
          <img ref={this.previewImg} className='img' hidden={true} />
          <br />
          <input ref={this.picture} type="file" accept="image/*" onChange={this.uploadPic} hidden={true}/>
          <button onClick={this.uploadClick}>upload</button>
          <button onClick={this.submitPost} >submit</button>
          <br />
        </div>
      )
    }
  }

export default NewPost