import React, { Component } from 'react';
import Data from '../data/database.json';
import $ from 'jquery'

import './home.css';
import './articles.css';


export default class Articles extends Component {
    constructor(props) {
        super(props); 

        this.state = {
            postIdentifier: this.props.postId,
            userId: this.props.user
        }
    }

    getCommentsId(id_post){
        var list_of_comments = [];
        Data.comments.forEach(function(element){
            if (element.post == id_post){
                list_of_comments.push(element.id);
            }
        });
        return list_of_comments;
    }

    getProfile(id){
        return(
            Data.users[id]
        );
    }

    closeModal(){
        document.location.reload(true);
    }

    loadArticleModal(postId, userId){
        var currentPost = Data.posts.map(a => a).filter(a => a.id == postId);

        Data.comments.sort((a, b) => Date.parse(new Date(b.postedAt.split('/').reverse().join("-"))) - Date.parse(new Date(a.postedAt.split('/').reverse().join("-")))).map(v =>{
            var commentsId = this.getCommentsId(postId)
            for (var i = 0; i < commentsId.length; i++){
                if (v.id == commentsId[i]){
                    var componentComment = "<div><span className='badge category-comments'><div id='comment-author'>" + this.getProfile(v.author).name + ":" + "</div><div className='comment-body' id='comment-body'>" + v.content + "</div></span></div>"
                    document.getElementById('div-comments').innerHTML += componentComment;
                }
            }

        })

        document.getElementById('post-title').innerHTML = currentPost[0].title;
        document.getElementById('post-body').innerHTML = currentPost[0].body;
        document.getElementById('post-date').innerHTML = "Posted at " + currentPost[0].postedAt;
      
        return postId;
    }

    render () {
        const {postIdentifier, userId} = this.state;
        return(
            <div>
                <span className="btn btn-sm bagde span-expantion" data-bs-toggle="modal" data-bs-target="#modalArticles" onClick={() => { this.loadArticleModal(postIdentifier, userId) }}>Expandir</span>

                <div className="modal fade" id="modalArticles" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-fullscreen">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" onClick={() => { this.closeModal() }} className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">

                            <div className="card-body">
                                <h5 className="card-title" id="post-title"></h5>
                                <p className="card-text" id="post-body"></p>
                            </div>
                            <div>
                                <div className="card-footer likes">
                                    <div>
                                        <i className="text-muted"></i>
                                    </div>
                                    <div>
                                        <small className="text-muted" id="post-date"></small>
                                    </div>
                                </div>
                                <div className="comments" id="div-comments"></div>
                            </div>

                            <div class="modal-footer">
                                <button type="button" onClick={() => { this.closeModal() }} class="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </div> 
        );
    }
}