import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'
import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import { browserHistory, Router, Route, IndexRoute, IndexRedirect } from 'react-router'
ż
/* CONTAINERS --- */
import Customer from 'containers/Customer'
import CustomerAll from 'containers/Customer/All'
import CustomerAdd from 'containers/Customer/Add'
import CustomerView from 'containers/Customer/View'

import HomeAdd from 'containers/Home/Add'
import HomeEdit from 'containers/Home/Edit'


import * as reducers from './reducers'

export const store = createStore(
    combineReducers({
        ...reducers,
        routing: routerReducer
    })
)

require(__dirname + './../styles/base.scss')

render((
    <Provider store={ store }>
        <Router onUpdate={() => window.scrollTo(0, 0)} history={ browserHistory }>
            <Route path="/" component={ Customer }>
                <IndexRoute component={ CustomerAll } />
                <Route path="customers/add" component={ CustomerAdd } />
                <Route path="customers/:customerId/edit" component={ CustomerView } />
                <Route path="customers/:customerId/homes/add" component={ HomeAdd } />
                <Route path="customers/:customerId/homes/:homeId/edit" component={ HomeEdit } />
            </Route>
        </Router>
    </Provider>
), document.getElementById('root'))