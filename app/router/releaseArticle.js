import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import {ItemContainer} from './../../components'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import $ from 'jquery'



class HomePage extends React.Component {
    constructor(props) {
        super(props);
    }
    releaseArticle(){
        let title=this.title.value;
        let content=this.content.getEditor().root.innerHTML;
        if(title){
            $.ajax({
                url:'http://localhost:3000/article/createArticle',
                type:'post',
                data:{
                    title:title,
                    content:content
                },
                dataType:'json',
                success:function(data){
                    alert(data.message);
                }
            })
        }
    }

    render(){
        return <div className="rightContainer">
            <div className="rightContainerTitle">发布文章</div>
            <ItemContainer title="文章标题">
                <input
                    className="blockInput"
                    placeholder="输入文章标题"
                    ref={el => this.title = el}
                />
            </ItemContainer>
            <ItemContainer
                title="文章内容"
            >
                <ReactQuill ref={el => this.content = el}/>
            </ItemContainer>
            <button className="normalBtn" onClick={()=>this.releaseArticle()}>发布</button>
        </div>
    }
}

export default HomePage;