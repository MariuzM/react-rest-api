import React from 'react'
import { Switch, Route, Link } from 'react-router-dom'
import Navbar from './views/Navbar'
import SignInSide from './views/Login'
import Registration from './views/Registration'

export default function App() {
  return (
    <>
      <Navbar />
      <Route path="/signin" component={SignInSide} />
      <Route path="/register" component={Registration} />
    </>
  )
}
