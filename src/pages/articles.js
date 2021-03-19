import React, { Component } from 'react';
import Data from '../data/database.json';
import $ from 'jquery'

export default class Articles extends Component {
    constructor(props) {
        super(props); 

        this.state = {
            postIdentifier: this.props.postId,
            userId: this.props.user
        }
    }

    loadArticleModal(postId, userId){
        var currentPost = Data.posts.map(a => a).filter(a => a.id == postId);

        document.getElementById('post-title').innerHTML = currentPost[0].title;
        document.getElementById('post-body').innerHTML = currentPost[0].body;

        
        return postId;
    }

    render () {
        const {postIdentifier, userId} = this.state;
        return(
            <div>
                <span className="btn bagde bg-primary" data-bs-toggle="modal" data-bs-target="#modalArticles" onClick={() => { this.loadArticleModal(postIdentifier, userId) }}>Tela o Pai</span>

                <div className="modal fade" id="modalArticles" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-fullscreen">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Postagem</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
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
                                        <small className="text-muted"></small>
                                    </div>
                                </div>
                            </div>

                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </div> 
        );
    }
}