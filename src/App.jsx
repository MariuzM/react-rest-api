import React from 'react'
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'
// import Navbar from './views/Navbar'
// import SignInSide from './views/Login'
import Home from './views/Home'
import Registration from './views/Registration'

export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/register" component={Registration} />
        <Route path="/" render={() => <div>404</div>} />
      </Switch>
    </BrowserRouter>
  )
}
