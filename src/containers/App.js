import { connect } from "react-redux";

import AppComponent from "../components/App";
import { synchronous, asynchronous, startAsynchronous } from "../actions";

function mapDispatchToProps(dispatch) {
  return {
    synchronous: () => dispatch(synchronous("1")),
    asynchronous: () => {
      dispatch(startAsynchronous("2"));
      dispatch(asynchronous("2"));
    },
  }
};

export default connect(null, mapDispatchToProps)(AppComponent);
