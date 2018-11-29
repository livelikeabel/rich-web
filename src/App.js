import React, { Component } from 'react'
import { Switch, Route } from 'react-router'
import { BrowserRouter } from 'react-router-dom'

import { routes } from './routes'

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            {routes.map(route => (
              <Route {...route} />
            ))}
          </Switch>
        </BrowserRouter>
      </div>
    )
  }
}

export default App
