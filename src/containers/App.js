import { connect } from "react-redux";

import AppComponent from "../components/App";
import { synchronous, asynchronousAction } from "../actions";

function mapDispatchToProps(dispatch) {
  return {
    synchronous: () => dispatch(synchronous("1")),
    asynchronous: () => { asynchronousAction(dispatch, "2") },
  }
};

export default connect(null, mapDispatchToProps)(AppComponent);
