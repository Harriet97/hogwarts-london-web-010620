import React, { Component } from "react";

class HogTile extends Component {
  state = {
    selected: false
  };

  selectHog = () => {
    this.setState({ selected: !this.state.selected });
  };

  getImg = name => {
    let imgName = name
      .split(" ")
      .join("_")
      .toLowerCase();
    let hogImg = require(`../hog-imgs/${imgName}.jpg`);
    return hogImg;
  };

  getMedal = medal => {
    let medalImg = require(`../medal_imgs/${medal}.png`);
    return medalImg;
  };

  render() {
    const hog = this.props.hog;
    if (this.state.selected) {
      return (
        <div className="card" onClick={this.selectHog}>
          <h1>{hog.name}</h1>
          <h3>{hog.specialty}</h3>
          <h3>
            {hog.greased
              ? "Catch me if you can :P"
              : "I'm waiting to be greased"}
          </h3>
          <h3>{hog.weight} kg </h3>
          <img
            src={this.getMedal(hog["highest medal achieved"])}
            alt={hog["highest medal achieved"]}
            className="medal"
          ></img>
        </div>
      );
    } else {
      return (
        <div className="card" onClick={this.selectHog}>
          <h1>{hog.name}</h1>
          <img src={this.getImg(hog.name)} alt={hog.name}></img>
        </div>
      );
    }
  }
}

export default HogTile;
