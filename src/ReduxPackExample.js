import React, { Component } from 'react';
import { connect } from 'react-redux';

import { loadFooPack } from './actions';

class ReduxPackExample extends Component {
  render() {
    const { state, dispatch } = this.props;

    console.log('render', state);

    return (
      <div>
        <h4>ReduxPackExample</h4>
        <button onClick={() => dispatch(loadFooPack(1234))}>Dispatch action w/ redux-pack</button>
      </div>
    );
  }
}

ReduxPackExample = connect(
  (state) => ({state: state.packExample}),
)(ReduxPackExample);

export default ReduxPackExample;
