import React, { Component } from "react";

export class Newsitem extends Component {
  
  render() {
    let { title, description,imageUrl,newsUrl } = this.props;
    return (
      <div className="my-3">
        <div className="card" style={{ width: "18rem" }}>
          <img
            src={!imageUrl?"https://images.hindustantimes.com/img/2023/01/11/1600x900/shami-kohli-batting-screengrab_1673437684656_1673437699440_1673437699440.jpg":imageUrl}
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <a rel=" noreferrer" href={newsUrl} target="_blank" className="btn btn-dark">
              Go somewhere
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Newsitem;
