import React, { Component } from 'react';

import './profile.css';

export default class Profile extends Component {
    constructor(props) {
        super(props); 

    }

    render () {
        return(
            <div>
                <nav className="navbar navbar-dark bg-dark">
                    <div className="container">
                        <a className="navbar-brand" href="/">
                            Sociops
                        </a>
                    </div>
                </nav>
                <div className="row py-5 px-4">
                    <div className="col-md-5 mx-auto">
                        <div className="bg-white shadow rounded overflow-hidden">
                            <div className="px-4 pt-0 pb-4 cover">
                                <div className="media row profile-head profile-settings">
                                    <div className="col profile mr-3"><img src="https://i.imgur.com/8f4zNIP.png" alt="..." width="130" className="rounded mb-2 img-thumbnail"></img></div>
                                    <div className="col media-body mb-5 text-white info-user">
                                        <h4 className="mt-0 mb-0">John Carter</h4>
                                        <p className="small mb-4"> <i className="fas fa-map-marker-alt mr-2"></i> Recife</p>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-light p-4 d-flex justify-content-end text-center">
                                <ul className="list-inline mb-0">
                                    <li className="list-inline-item">
                                        <h5 className="font-weight-bold mb-0 d-block">119</h5><small className="text-muted"> <i className="fas fa-image mr-1"></i> Fotos</small>
                                    </li>
                                    <li className="list-inline-item">
                                        <h5 className="font-weight-bold mb-0 d-block">762</h5><small className="text-muted"> <i className="fas fa-user mr-1"></i> Seguidores</small>
                                    </li>
                                    <li className="list-inline-item">
                                        <h5 className="font-weight-bold mb-0 d-block">254</h5><small className="text-muted"> <i className="fas fa-user mr-1"></i> Seguindo</small>
                                    </li>
                                </ul>
                            </div>
                            <div className="px-4 py-3">
                                <h5 className="mb-0">Sobre</h5>
                                <div className="p-4 rounded shadow-sm bg-light">
                                    <p className="font-italic mb-0">Desenvolvedor React</p>
                                    <p className="font-italic mb-0">Mora em Recife</p>
                                    <p className="font-italic mb-0">Fotógrafo</p>
                                </div>
                            </div>
                            <div className="py-4 px-4">
                                <div className="d-flex align-items-center justify-content-between mb-3">
                                    <h5 className="mb-0">Fotos Recentes</h5><a href="#" className="btn btn-link text-muted">Mostrar todas</a>
                                </div>
                                <div class="row">
                                    <div className="col-lg-6 mb-2 pr-lg-1"><img src="https://images.unsplash.com/photo-1469594292607-7bd90f8d3ba4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80" alt="" className="img-fluid rounded shadow-sm"></img></div>
                                    <div className="col-lg-6 mb-2 pl-lg-1"><img src="https://images.unsplash.com/photo-1493571716545-b559a19edd14?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80" alt="" className="img-fluid rounded shadow-sm"></img></div>
                                    <div className="col-lg-6 pr-lg-1 mb-2"><img src="https://images.unsplash.com/photo-1453791052107-5c843da62d97?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" alt="" className="img-fluid rounded shadow-sm"></img></div>
                                    <div className="col-lg-6 pl-lg-1"><img src="https://images.unsplash.com/photo-1475724017904-b712052c192a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80" alt="" className="img-fluid rounded shadow-sm"></img></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> 
        );
    }
}