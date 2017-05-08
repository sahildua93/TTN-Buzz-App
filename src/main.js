import React from 'react'
import { render } from 'react-dom'
import App from './client/App'
import { Router, browserHistory,  Route, Link } from 'react-router'

render(
    <App/>,
    document.getElementById('app')
)
