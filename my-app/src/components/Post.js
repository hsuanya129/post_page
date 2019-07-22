import React from 'react';
import './../App.css';

// for single post show, child of Posts
class Post extends React.Component {
    constructor(props) {
        super(props);
        this.picture = React.createRef();
    }

    //if the post contains a picture, show it
    showImage = () => {
        
        if (this.props.picture) {
            const img = this.picture.current //在這裡先行宣告放入const中是由於下方的匿名函式無法用this取得
            const reader = new FileReader()
            reader.readAsDataURL(this.props.picture)
            reader.onload = function (e) {
                img.src = e.target.result
                img.hidden = false
            }
        }
    }

    //DOM couldn't be reached until component has been mounted
    componentDidMount() {
        this.showImage();
    }

    render() {
        return (
            <div className='post'>
                <p>{this.props.title}</p>
                <p>{this.props.content}</p>
                <img ref={this.picture} className='img' hidden={true} />
            </div>
        )
    }
}
export default Post