// redux-thunk
export const LOAD_FOO_STARTED = 'LOAD_FOO_STARTED';
export const LOAD_FOO_SUCCESS = 'LOAD_FOO_SUCCESS';
export const LOAD_FOO_FAILED = 'LOAD_FOO_FAILED';

export function loadFooThunk(id) {
  return dispatch => {
    dispatch({ type: LOAD_FOO_STARTED, payload: id });
    return fakeFetchFoo(id).then(foo => {
      dispatch({ type: LOAD_FOO_SUCCESS, payload: foo });
    }).catch(error => {
      dispatch({ type: LOAD_FOO_FAILED, error: true, payload: error });
    });
  };
}

// redux-pack
export const LOAD_FOO = 'LOAD_FOO';

export function loadFooPack(id) {
  return {
    type: LOAD_FOO,
    promise: fakeFetchFoo(id),
  };
}

function fakeFetchFoo() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('foo');
    }, 1000);
  });
}
