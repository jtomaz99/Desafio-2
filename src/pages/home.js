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

    numberOfLikes(){
        
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
                                    </div>
                                    <div class="card-footer likes">
                                        <div>
                                            <i class="far fa-heart text-muted"> 28</i>
                                        </div>
                                        <div>
                                            <small class="text-muted">Posted at {element.postedAt}</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                    {/* <div class="col">
                        <div class="card h-100">
                            <div class="user-info">
                                <div class="profile-photo">
                                    <img src={Data.users[0].picture} class="card-img-top" alt="..."></img>
                                </div>
                                <div class="username">
                                    <span class="text-muted">{Data.users[0].name}</span>
                                </div>
                            </div>
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            </div>
                            <div class="card-footer">
                                <small class="text-muted">Last updated 3 mins ago</small>
                            </div>
                        </div>
                    </div>

                    <div class="col">
                        <div class="card h-100">
                            <div class="profile-photo">
                                <img src={Data.users[1].picture} class="card-img-top" alt="..."></img>
                            </div>
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                            </div>
                            <div class="card-footer">
                                <small class="text-muted">Last updated 3 mins ago</small>
                            </div>
                        </div>
                    </div>

                    <div class="col">
                        <div class="card h-100">
                            <div class="profile-photo">
                                <img src={Data.users[2].picture} class="card-img-top" alt="..."></img>
                            </div>
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                            </div>
                            <div class="card-footer">
                                <small class="text-muted">Last updated 3 mins ago</small>
                            </div>
                        </div>
                    </div> */}

                </div>
            </div>
        );
    }
}