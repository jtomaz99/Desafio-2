import React, { Component } from 'react';
import Data from '../data/database.json';

import './home.css';

export default class Home extends Component {
    constructor() {
        super(); 

    }	

    getProfile(id){
        return(
            Data.users[id]
        );
    }

    getNumberOfLikes(id_post){
        var likes = 0;
        Data.comments.forEach(function(element){
            if (element.post == id_post){
                likes += 1;
            }
        });
        return likes;
    }

    getCategory(id_post_category){
        var category_name;
        Data.categories.forEach(function(element){
            if (element.id == id_post_category){
                category_name = element.name;
            }
        });
		
		if (category_name == "Fotos"){
			return(
				<span className="badge category-dark-blue">#{category_name}</span>
			);
		}
		
		if (category_name == "Animais"){
			return(
                <span className="badge category-light-blue">#{category_name}</span>
			);
		}
		
		if (category_name == "Política"){
			return(
				<span className="badge category-grassland-green">#{category_name}</span>
			);
		}
		
		if (category_name == "Outros"){
			return(
				<span className="badge category-orange">#{category_name}</span>
			);
		}
        return category_name;
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


    render () {
        return(
            <div>
                <div className="row row-cols-1 row-cols-md-3 g-4 cards mt-3">
                    {Data.posts.sort((a, b) => Date.parse(new Date(b.postedAt.split('/').reverse().join("-"))) - Date.parse(new Date(a.postedAt.split('/').reverse().join("-")))).map(element => {
                        return(
                            <div className="col">
                                <div className="card h-100">
                                    <div className="user-info">
                                        <div className="profile-photo">
                                            <img src={this.getProfile(element.postedBy).picture} class="card-img-top" alt="..."></img>
                                        </div>
                                        <div className="username">
                                            <span className="text-muted">{this.getProfile(element.postedBy).name}</span>
                                        </div>
                                    </div>
                                    <div className="card-body">
                                        <h5 className="card-title">{element.title}</h5>
                                        <p className="card-text">{element.body}</p>
                                        {this.getCategory(element.category)}
                                    </div>
                                    <div>
                                        <div className="card-footer likes">
                                            <div>
                                                <i className="far fa-heart text-muted"> {this.getNumberOfLikes(element.id)}</i>
                                            </div>
                                            <div>
                                                <small className="text-muted">Posted at {element.postedAt}</small>
                                            </div>
                                        </div>
                                        <div className="comments">
                                                {Data.comments.map(v =>{
                                                    var commentsId = this.getCommentsId(element.id)
                                                    for (var i = 0; i < commentsId.length; i++){
                                                        if (v.id == commentsId[i]){
                                                            return(
                                                                <div>
                                                                    <span className="badge category-comments">
                                                                        <div>{this.getProfile(v.author).name}:</div>
                                                                        <div className="comment-body">{v.content}</div>
                                                                    </span>
                                                                </div>
                                                            );
                                                        }
                                                    }
                                                })}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                    
                </div>
            </div>
        );
    }
}