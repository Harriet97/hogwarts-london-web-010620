import React, { Component } from "react";
import HogTile from "./HogTile";

class HogList extends Component {
  state = {
    greaseFiltered: false,
    nameSorted: false,
    weightSorted: false
  };

  greaseFilter = () => {
    this.setState({
      greaseFiltered: !this.state.greaseFiltered
    });
  };

  nameSort = () => {
    if (this.state.weightSorted && !this.state.nameSorted) {
      this.setState({
        nameSorted: !this.state.nameSorted,
        weightSorted: false
      });
    } else {
      this.setState({
        nameSorted: !this.state.nameSorted
      });
    }
  };

  weightSort = () => {
    if (this.state.nameSorted && !this.state.weightSorted) {
      this.setState({
        weightSorted: !this.state.weightSorted,
        nameSorted: false
      });
    } else {
      this.setState({
        weightSorted: !this.state.weightSorted
      });
    }
  };

  sortHogs = hogsArr => {
    if (this.state.nameSorted) {
      return hogsArr.sort((a, b) => a.name.localeCompare(b.name));
    } else if (this.state.weightSorted) {
      return hogsArr.sort((a, b) => a.weight - b.weight);
    } else {
      return hogsArr;
    }
  };

  filterHogs = hogsArray =>
    this.state.greaseFiltered
      ? hogsArray.filter(hog => hog.greased === true)
      : hogsArray;

  renderHogs = () => {
    let filteredHogs = this.filterHogs(this.props.hogs);
    let sortedHogs = this.sortHogs(filteredHogs);
    return sortedHogs.map((hog, id) => <HogTile hog={hog} key={id} />);
  };

  render() {
    return (
      <div>
        <div>
          <button onClick={this.greaseFilter}>
            {this.state.greaseFiltered
              ? "Show all hogs"
              : "Show only greased hogs"}
          </button>
          <button onClick={this.nameSort}>Sort by name</button>
          <button onClick={this.weightSort}>Sort by weight</button>
        </div>
        <div className="ui grid container">{this.renderHogs()}</div>
      </div>
    );
  }
}

export default HogList;
