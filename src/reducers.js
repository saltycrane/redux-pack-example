import { LOAD_FOO_STARTED, LOAD_FOO_SUCCESS, LOAD_FOO_FAILED } from './actions';

function reducer(state={}, action) {
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

export default reducer;
