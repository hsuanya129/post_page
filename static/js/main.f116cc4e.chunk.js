(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{12:function(e,t,n){},24:function(e,t,n){e.exports=n(34)},29:function(e,t,n){},34:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(20),c=n.n(i),o=(n(29),n(5)),s=n(6),u=n(8),l=n(7),m=n(9),p=(n(12),n(21)),d=n(10),h=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(u.a)(this,Object(l.a)(t).call(this,e))).showImage=function(){if(n.props.picture){var e=n.picture.current,t=new FileReader;t.readAsDataURL(n.props.picture),t.onload=function(t){e.src=t.target.result,e.hidden=!1}}},n.picture=r.a.createRef(),n}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.showImage()}},{key:"render",value:function(){return r.a.createElement("div",{className:"post"},r.a.createElement("p",null,this.props.title),r.a.createElement("p",null,this.props.content),r.a.createElement("img",{ref:this.picture,className:"img",hidden:!0}))}}]),t}(r.a.Component),f=function(e){function t(e){return Object(o.a)(this,t),Object(u.a)(this,Object(l.a)(t).call(this,e))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props.itemList.map(function(e){return r.a.createElement(h,{key:e.id,id:e.id,title:e.title,content:e.content,picture:e.picture})});return r.a.createElement("div",null,e)}}]),t}(r.a.Component),v=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(u.a)(this,Object(l.a)(t).call(this,e))).toPostPage=function(){n.props.history.push("/add_post")},n.toRemovePost=function(){n.props.removePost()},n}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("button",{onClick:this.toPostPage},"Add Post"),r.a.createElement("button",{onClick:this.toRemovePost},"Remove Post"),r.a.createElement(f,{itemList:this.props.itemList}))}}]),t}(r.a.Component),b=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(u.a)(this,Object(l.a)(t).call(this,e))).uploadClick=function(){n.picture.current.click()},n.uploadPic=function(){var e=n.picture.current.files[0];n.previewImg.current.src=URL.createObjectURL(e),n.previewImg.current.hidden=!1,n.previewP.current.hidden=!1},n.submitPost=function(){n.props.addPost(n.title.current.value,n.content.current.value,n.picture.current.files[0]),n.props.history.push("/")},n.previewImg=r.a.createRef(),n.previewP=r.a.createRef(),n.title=r.a.createRef(),n.content=r.a.createRef(),n.picture=r.a.createRef(),n}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("p",null,"Title:"),r.a.createElement("input",{ref:this.title,type:"text",maxLength:10}),r.a.createElement("p",null,"Content:"),r.a.createElement("textarea",{ref:this.content,className:"textareaBox",defaultValue:"Please input Content."}),r.a.createElement("br",null),r.a.createElement("p",{ref:this.previewP,hidden:!0},"Preview:"),r.a.createElement("img",{ref:this.previewImg,className:"img",hidden:!0}),r.a.createElement("br",null),r.a.createElement("input",{ref:this.picture,type:"file",accept:"image/*",onChange:this.uploadPic,hidden:!0}),r.a.createElement("button",{onClick:this.uploadClick},"upload"),r.a.createElement("button",{onClick:this.submitPost},"submit"),r.a.createElement("br",null))}}]),t}(r.a.Component),E=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(u.a)(this,Object(l.a)(t).call(this,e))).addPost=function(e,t,a){var r;r=Date.now();var i=n.state.itemList.concat({id:r,title:e,content:t,picture:a});n.setState({itemList:i})},n.removePost=function(){var e=n.state.itemList.length,t=n.state.itemList.splice(0,e-1);n.setState({itemList:t})},n.state={itemList:[]},n}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"App"},r.a.createElement(p.a,{basename:"/post_page/"},r.a.createElement(d.a,{exact:!0,path:"/",render:function(t){return r.a.createElement(v,Object.assign({},t,{removePost:e.removePost,itemList:e.state.itemList}))}}),r.a.createElement(d.a,{path:"/add_post",render:function(t){return r.a.createElement(b,Object.assign({},t,{addPost:e.addPost}))}})))}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(E,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[24,1,2]]]);
//# sourceMappingURL=main.f116cc4e.chunk.js.map