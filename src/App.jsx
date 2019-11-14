import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import axios from 'axios'

import firebase from 'firebase'
import config from './fire-config'

import Home from './views/Home'
import Registration from './views/Registration'
import CountryList from './CountryList'

function test() {
  axios
    .get('https://jsonplaceholder.typicode.com/users')
    .then(response => {
      // console.log('API Response', response)
      const newContacts = response.data.map(c => {
        return { id: c.id, name: c.name }
      })
      const newState = { contacts: newContacts }
      console.log(newState)
    })
    .catch(error => console.log(error))
}
test()

firebase.initializeApp(config)
function getUserData() {
  const ref = firebase.database().ref('/')
  ref.on('value', snapshot => {
    const state = snapshot.val()
    console.log(state)
  })
}
getUserData()

export default function App() {
  return (
    <BrowserRouter>
      <CountryList />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/register" component={Registration} />
        <Route path="/" render={() => <div>404</div>} />
      </Switch>
    </BrowserRouter>
  )
}
