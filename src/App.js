import { React } from './libraries'
import './styles/app.css'
import Base from './containers/base/Base'
import { Page404 } from './components'

import { Switch,Route } from 'react-router-dom'

function App(props) {
  return (
    <Switch>
      <Route path='/:slug' component={Base} />
      <Route path='*' component={Page404} />
    </Switch>
  );
}

export default App;