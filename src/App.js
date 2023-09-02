import {BrowserRouter, Route, Switch} from 'react-router-dom'

import Login from './components/Login'
import Register from './components/Register'
import Home from './components/Home'
import Product from './components/Product'
import Job from './components/Job'
import Profile from './components/Profile'
import ProtectedRoute from './components/ProtectedRoute'

import './App.css'

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/register" component={Register} />
      <Route exact path="/login" component={Login} />
      <ProtectedRoute exact path="/" component={Home} />
      <ProtectedRoute exact path="/product" component={Product} />
      <ProtectedRoute exact path="/job" component={Job} />
      <ProtectedRoute exact path="/profile" component={Profile} />
    </Switch>
  </BrowserRouter>
)

export default App
