import React from "react";
import { connect } from "react-redux";
import { ActionDecrement } from "../Actions";

const Decrement = (props) => <button onClick={props.handleClick}>-</button>;

function mapDispatchToProps(dispatch) {
  return {
    handleClick: () => {
      dispatch(ActionDecrement());
    },
  };
}

export default connect(null, mapDispatchToProps)(Decrement);
