import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import {ItemContainer} from './../../components'
import $ from 'jquery'



class ArticleList extends React.Component {
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
            <div className="rightContainerTitle">文章列表</div>
            
        </div>
    }
}

export default ArticleList;