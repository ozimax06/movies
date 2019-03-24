import React, { Component } from 'react';

class Movie extends Component {
   
    render() { 
        return (  
            <div className="col-md-4">
                <div className="card mb-4 box-shadow">
                <img className="card-img-top" src={this.props.image} alt="Card image cap"/>
                <div className="card-body">
                    <p className="card-text"> {this.props.title}</p>
                    <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                        <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                    </div>
                    <small className="text-muted">{this.props.vote_average}</small>
                    </div>
                </div>
            </div>
          </div>
        );
    }
}
 
export default Movie;