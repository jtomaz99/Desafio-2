import React, { Component } from 'react';
import Data from '../data/database.json';

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
        
        var buttonModal = document.getElementById('button-modal');
        var title = document.getElementById('post-title');

        buttonModal.style.display = "flex";
        title.innerHTML = currentPost[0].title;
        return postId;
    }

    render () {
        const {postIdentifier, userId} = this.state;
        return(
            <div>
                <span className="btn bagde bg-primary" onClick={() => { this.loadArticleModal(postIdentifier, userId) }}>Tela o Pai</span>

                <button type="button" id="button-modal" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    Launch demo modal
                </button>

                <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-fullscreen">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Postagem</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">

                            <div className="card-body">
                                <h5 className="card-title" id="post-title"></h5>
                                <p className="card-text"></p>
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