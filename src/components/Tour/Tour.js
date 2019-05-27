import React, { Component } from "react";
import "./Tour.scss";

export default class Tour extends Component {
  state = {
    showInfo: false
  };
  handleInfo = () => {
    // oppposite value
    this.setState({
      showInfo: !this.state.showInfo
    });
  };
  render() {
    const { id, city, img, name, info } = this.props.tour;
    const { removeTours } = this.props;
    return (
      <article className="tour">
        <div className="img-container">
          <img src={img} alt={name} />
          <span className="close-btn">
            <i
              className="fas fa-window-close"
              onClick={() => removeTours(id)}
            />
          </span>
        </div>
        <div className="tour-info">
          <h3>{city}</h3>
          <h4>{name}</h4>
          <h5>
            Info
            <span onClick={this.handleInfo}>
              <i className="fas fa-caret-square-down" />
            </span>
          </h5>
          {this.state.showInfo && <p>{info}</p>}
        </div>
      </article>
    );
  }
}
