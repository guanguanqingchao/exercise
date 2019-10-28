import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import * as pages from './pages'


export default function App() {
    return (
        <Switch>

            <Route exact path="/" component={pages.HomePage} />
            <Route path="/detail" component={pages.DetailPage} />
            <Route path="/user" component={pages.UserPage} />
            <Redirect to="/login" component={pages.NotFoundPage} />

        </Switch>
    )
}

