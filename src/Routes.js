import React from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import pages from './pages'

const Pages = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <Redirect to="/repositories" />
                </Route>
                {
                    pages.map(page => (
                        <Route key={page.path} path={page.path} component={page.component} />
                    ))
                }
            </Switch>
        </Router>
    )
}

export default Pages