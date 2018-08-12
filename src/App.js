import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { connect } from "react-redux";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="col">
          <div>
            <span>A:</span>
            <span>{this.props.a}</span>
          </div>
          <button onClick={() => this.props.updateA(this.props.b)}>
            Update A
          </button>
        </div>
        <div className="col">
          <div>
            <span>B:</span>
            <span>{this.props.b}</span>
          </div>
          <button onClick={() => this.props.updateB(this.props.a)}>
            Update B
          </button>
        </div>
      </div>
    );
  }
}

const mapDispachToProps = dispach => {
  return {
    updateA: b => dispach({ type: "UPDATE_A", b: b }),
    updateB: a => dispach({ type: "UPDATE_B", a: a })
  };
};

const mapStateToProps = state => {
  return {
    a: state.rA.a,
    b: state.rB.b
  };
};

export default connect(
  mapStateToProps,
  mapDispachToProps
)(App);
