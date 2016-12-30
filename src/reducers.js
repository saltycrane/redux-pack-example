import { combineReducers } from 'redux';
import { handle } from 'redux-pack';

import { LOAD_FOO_STARTED, LOAD_FOO_SUCCESS, LOAD_FOO_FAILED, LOAD_FOO } from './actions';

const reducer = combineReducers({
  thunkExample,
  packExample,
});

function thunkExample(state={}, action) {
  const { type, payload } = action;
  switch (type) {
    case LOAD_FOO_STARTED:
      console.log('LOAD_FOO_STARTED');
      return {
        ...state,
        isLoading: true,
        fooError: null
      };
    case LOAD_FOO_SUCCESS:
      console.log('LOAD_FOO_SUCCESS');
      return {
        ...state,
        isLoading: false,
        foo: payload
      };
    case LOAD_FOO_FAILED:
      return {
        ...state,
        isLoading: false,
        fooError: payload
      };
    default:
      return state;
  }
}

function packExample(state={}, action) {
  const { type, payload } = action;
  switch (type) {
    case LOAD_FOO:
      console.log('LOAD_FOO');
      return handle(state, action, {
        start: s => ({
          ...s,
          isLoading: true,
          fooError: null
        }),
        finish: s => ({ ...s, isLoading: false }),
        failure: s => ({ ...s, fooError: payload }),
        success: s => ({ ...s, foo: payload }),
      });
    default:
      return state;
  }
}

export default reducer;
