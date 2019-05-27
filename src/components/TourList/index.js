import React, { Component } from "react";
import "./TourList.scss";
import Tour from "../Tour/Tour";
import { tourData } from "../tourData";

export default class TourList extends Component {
  state = {
    tours: tourData
  };

  removeTours = id => {
    console.log(id);
    const { tours } = this.state;
    const displayTours = tours.filter(tour => tour.id !== id);
    this.setState({
      tours: displayTours
    });
  };
  render() {
    const { tours } = this.state;
    return (
      <section className="tourlist">
        {tours.map(tour => {
          return (
            <Tour key={tour.id} tour={tour} removeTours={this.removeTours} />
          );
        })}
      </section>
    );
  }
}
