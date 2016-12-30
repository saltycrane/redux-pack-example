import React, { Component } from 'react';
import { connect } from 'react-redux';

import { loadFooThunk } from './actions';

class ReduxThunkExample extends Component {
  render() {
    const { state, dispatch } = this.props;

    console.log('render', state);

    return (
      <div>
        <h4>ReduxThunkExample</h4>
        <button onClick={() => dispatch(loadFooThunk(1234))}>Dispatch action w/ redux-thunk</button>
      </div>
    );
  }
}

ReduxThunkExample = connect(
  (state) => ({state: state.thunkExample}),
)(ReduxThunkExample);

export default ReduxThunkExample;
