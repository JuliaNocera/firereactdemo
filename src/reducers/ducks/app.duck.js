// action types
const APP_IS_INITIALIZED = 'APP_IS_INITIALIZED'

// actions
export const initializeApp = (payload) => ({
  type: APP_IS_INITIALIZED,
  payload
})


const INITIAL_STATE = {}

export default function(state = INITIAL_STATE, action = {}) {
  switch(action.type) {
    case APP_IS_INITIALIZED: return {hello: "hi"}
  }
}

/* example of thunk at work
export const fetchUserPosts = () => {
  return (dispatch, getState) => {
    fetch('http://localhost:3001/devapi/getUserPosts')
    .then(blah blah blah)
    ...
    .then((json) => {
      dispatch(userPostsUpdated(json))
    })
  }
}
*/
