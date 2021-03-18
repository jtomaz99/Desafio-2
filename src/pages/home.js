import React, { Component } from 'react';
import Data from '../data/database.json';

import './home.css';

export default class HomeDeslogado extends Component {
    constructor(props) {
        super(props); 
		this.handleLoginClick = this.handleLoginClick.bind(this);
    }
	
	handleLoginClick(){
		this.props.history.push("/login");
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
        return category_name;
    }


    render () {
        return(
            <div>
                <div class="row row-cols-1 row-cols-md-3 g-4 cards mt-3">
                    {Data.posts.sort((a, b) => Date.parse(new Date(b.postedAt.split('/').reverse().join("-"))) - Date.parse(new Date(a.postedAt.split('/').reverse().join("-")))).map(element => {
                        return(
                            <div class="col">
                                <div class="card h-100">
                                    <div class="user-info">
                                        <div class="profile-photo">
                                            <img src={this.getProfile(element.postedBy).picture} class="card-img-top" alt="..."></img>
                                        </div>
                                        <div class="username">
                                            <span class="text-muted">{this.getProfile(element.postedBy).name}</span>
                                        </div>
                                    </div>
                                    <div class="card-body">
                                        <h5 class="card-title">{element.title}</h5>
                                        <p class="card-text">{element.body}</p>
                                        <span class="badge bg-info">#{this.getCategory(element.category)}</span>
                                    </div>
                                    <div class="card-footer likes">
                                        <div>
                                            <i class="far fa-heart text-muted"> {this.getNumberOfLikes(element.id)}</i>
                                        </div>
                                        <div>
                                            <small class="text-muted">Posted at {element.postedAt}</small>
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