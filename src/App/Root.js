import React from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
// import routes from '../routes'
// import DevTools from './DevTools'
// import { Router } from 'react-router'

const Root = ({ store, history }) => (
  <Provider store={store}>
  </Provider>
)

Root.propTypes = {
  store: PropTypes.object.isRequired,
//  history: PropTypes.object.isRequired
}

export default Root
 
/*
 *
 * TO Implement Router and History
 * Use routes & <Router />
 * Add history to src/index.js
import routes from '../routes'
import DevTools from './DevTools'
import { Router } from 'react-router'

const Root = ({ store, history }) => (
  <Provider store={store}>
    <div>
      <Router history={history} routes={routes} />
      <DevTools />
    </div>
  </Provider>
)
 */
