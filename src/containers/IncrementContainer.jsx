import Increment from "../components/Increment";
import { connect } from "react-redux";

import { ActionIncrement } from "../Actions";

function mapDispatchToProps(dispatch) {
  return {
    handleClick: () => {
      dispatch(ActionIncrement());
    },
  };
}

export default connect(null, mapDispatchToProps)(Increment);
